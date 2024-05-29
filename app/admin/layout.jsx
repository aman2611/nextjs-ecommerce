"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import SideMenu_Admin from "@/components/Admin_components/SideMenu_Admin";
import Loader_Admin from "@/components/Admin_components/Loader_Admin";
import Nav_Admin from "@/components/Admin_components/Nav_Admin";
import Footer from "@/components/Footer";

export default function homeLayout({ children }) {

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect(`/auth`)
    }
  })

  var userCheck = session && session.user.isAdmin

  const toTop = useRef();

  const [isLoading, setLoading] = useState(true);
  const [openMenuDiv, setOpenMenuDiv] = useState(false);

  useEffect(() => {
    if(userCheck) {
      setLoading(false) 
    }else{
      redirect('/auth')
    }
  }, [userCheck]);

  const backToTop = () => {
    toTop.current.scrollIntoView({ behavior: 'smooth' });
  }


  if (isLoading) {
    // loading state
    return (
      <div className="w-full h-screen">
        <Loader_Admin />
      </div>
    )
  }


  return ( 
    <section className='w-full h-max min-h-screen flex flex-col'>

      <div className='w-full h-max fixed top-0 z-20'>
        <Nav_Admin setOpenMenuDiv={setOpenMenuDiv} openMenuDiv={openMenuDiv}
        userName={session && session.user.name} />
      </div>

      <div ref={toTop} className='w-full h-[10px]' ></div>

      <div className="w-full min-h-[calc(100vh_-_70px)] max-h-max mt-[60px] flex justify-end ">
        <div className={"lg:w-[250px] w-full h-[calc(100vh_-_70px)] " + 
        " fixed top-[70px] left-0 z-20 bg-[#272727c0] backdrop-blur-[1px] "+ 
        (openMenuDiv ? ' lg:translate-x-[0%] translate-x-[0%] ' 
          : ' lg:translate-x-[0%] -translate-x-[120%] ')}>
            <div className={"w-max h-full lg:duration-0 duration-200 ease-linear " +
            (openMenuDiv ? ' lg:translate-x-[0%] translate-x-[0%] ' 
            : ' lg:translate-x-[0%] -translate-x-[120%] ')}>
            <SideMenu_Admin setOpenMenuDiv={setOpenMenuDiv} />
            </div>
        </div>
        <div className='lg:w-[calc(100%_-_250px)] w-full min-h-full max-h-max'>
          {children}
        </div>
      </div>

      <div className="w-full h-max mt-[70px] flex justify-end">
        <div className='lg:w-[calc(100%_-_250px)] w-full h-max  pt-6 flex flex-col items-center gap-y-7'>
          <div className=' w-full h-max flex flex-col items-center justify-between'>
          <Footer/>
          </div>  
        </div>
      </div>

    </section>
  );
}