"use client";

import React, { useEffect, useRef, useState } from "react";
import Nav from "../../components/Nav.jsx";
import { BagProvider } from "@/context/BagContext.js";
import { useSession } from "next-auth/react";
import HomeLayoutLoading from "@/utils/HomeLayoutLoading.js";
import Sidebar from "../../components/Sidebar.jsx"
import Footer from "@/components/Footer";


export default function homeLayout({ children }) {
  const { data: session } = useSession();
  var userId = session ? session.user.id : null;

  const toTop = useRef();

  const [allbagData, setAllBagData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isDataLoaded, setDataLoaded] = useState(false);

  const fetchBagData = async () => {
    try {
      const response = await fetch(`/api/bag/${userId.toString()}`, {
        method: "GET",
      });
      const data = await response.json();
      if (response.ok) {
        setAllBagData(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setDataLoaded(true);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchBagData();
    } else {
      setLoading(false);
    }
  }, [userId]);

  const backToTop = () => {
    toTop.current.scrollIntoView({ behavior: "smooth" });
  };

  if (userId ? isLoading || !isDataLoaded : isLoading) {
    // loading state
    return (
      <>
        <HomeLayoutLoading />
      </>
    );
  }

  return (
    <section className="bg-[#202020] w-full h-max min-h-[calc(100vh_-_70px)]">
      <BagProvider initialBagData={allbagData}>
        <div className="w-full h-max fixed top-0 z-20">
          <Nav userId={userId} userName={session && session.user.name} />
        </div>

        <div ref={toTop} className="w-full bg-blue-500 h-[10px]"></div>

        <div className="w-full min-h-screen max-h-max mt-[60px] flex overflow-hidden">
          <Sidebar/>
          {children}
        </div>


        <div className=" lg:w-[100vw] overflow-x-hidden flex">
          <div className=' w-full h-max  pt-6 flex flex-col items-center gap-y-7'>
            <div className=' w-full h-max flex flex-col'>
              <Footer/>
            </div>  
          </div>
        </div>


        
      </BagProvider>
    </section>
  );
}



