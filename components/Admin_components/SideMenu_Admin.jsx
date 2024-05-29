"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

// const items = [
//     getItem('Dashboard', '/admin'),
//     getItem('Products', '/admin/products'),
//     getItem('Orders', '/admin/orders'),
//     getItem('Admins', '/admin/admins'),
//     getItem('Banner & Side-Section', '/admin/banner&sideSec'),
//   ];

const SideMenu_Admin = ({ setOpenMenuDiv }) => {

    const pathname = usePathname()

    const menuItems = [
        {
          label: 'Dashboard',
          key: '/admin',
        },
        {
          label: 'Products',
          key: '/admin/products',
        },
        {
          label: 'Orders',
          key: '/admin/orders',
        },
        {
          label: 'Admins',
          key: '/admin/admins',
        },
        {
          label: 'Banner & Side-Section',
          key: '/admin/banner&sideSec',
        },
    ]


  return (
    <>
    <div className="w-[250px] h-full bg-[#202020] text-white flex flex-col gap-y-2 px-2 py-3">
        {menuItems.map((data,i)=>(
            <Link key={i} href={`${data.key}`} >
                <button onClick={()=>setOpenMenuDiv(false)}
                className={'w-full h-max px-3 py-1.5 text-[16px] '+ 
                ' flex items-center rounded-md '+
                (pathname === data.key ? ' font-medium bg-[#202020] text-white' 
                : ' bg-[#202020] hover:text-[#ffffff66] text-white')}>
                    {data.label}
                </button>
            </Link>
        ))}
    </div>
    </>
  )
}

export default SideMenu_Admin