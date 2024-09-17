'use client'
import React, { useState } from 'react'
import Logo from '@/app/public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { IoSearchSharp } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { RiFileVideoFill } from "react-icons/ri";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdGroupAdd } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { RiNotificationFill } from "react-icons/ri";
import { useSession ,signOut} from "next-auth/react";
import { usePathname } from 'next/navigation'
import { BsFillCollectionPlayFill } from "react-icons/bs";





function Header() {
    const[isSearch, setSearch]=useState(false)
    const {data:session} = useSession();
    const pathname = usePathname()


  return (
    <div className='bg-white w-full px-10 py-2 drop-shadow-md flex justify-between lg:justify-around items-center'>
         <div className='flex items-center space-x-4'>
               <Link href={'/dashbord'}><Image src={Logo} alt='Logo' width={40} height={40}/></Link>
              <input className={`bg-[#f2f4f7] h-12 rounded-full px-3 outline-none ${!isSearch?"hidden":""}`} type='search' placeholder='Search Facebook'/>
              <button className={`text-gray-500 rounded-full bg-gray-200 p-3 ${isSearch?"hidden":""}`} onClick={()=>{setSearch(!isSearch)}}><IoSearchSharp/></button>
         </div>
        

         <div className='hidden md:flex  items-center space-x-4'>
             <Link className={`text-2xl text-slate-600 hover:bg-slate-100 rounded-md w-24 h-12 flex justify-center items-center ${pathname==="/dashbord"?"text-blue-600 border-b-2 active border-blue-600 rounded-b-none":""}`} href={"/dashbord"}><AiFillHome/></Link>
             <Link className={`text-2xl text-slate-600 hover:bg-slate-100 rounded-md w-24 h-12 flex justify-center items-center ${pathname==="/dashbord/video"?"text-blue-600 border-b-2 active border-blue-600 rounded-b-none":""}`} href={"/dashbord/video"}><BsFillCollectionPlayFill /></Link>
             <Link className={`text-2xl text-slate-600 hover:bg-slate-100 rounded-md w-24 h-12 flex justify-center items-center ${pathname==="/dashbord/group"?"text-blue-600 border-b-2 active border-blue-600 rounded-b-none":""}`} href={"/dashbord/group"}><HiMiniUserGroup/></Link>
             <Link className={`text-2xl text-slate-600 hover:bg-slate-100 rounded-md w-24 h-12 flex justify-center items-center ${pathname==="/dashbord/friends"?"text-blue-600 border-b-2 active border-blue-600 rounded-b-none":""}`} href={"/dashbord/friends"}><MdGroupAdd/></Link>
             
         </div>

         <div className='flex space-x-4 lg:space-x-5'>
            <button className='bg-gray-300 p-3 rounded-full'><BsMessenger/></button>
            <button className='bg-gray-300 p-3 rounded-full'><RiNotificationFill/></button>
            <button><img src={session?.user?.image!} alt='image' className='size-10 rounded-full'/></button>
         </div>
        
    </div>
  )
}

export default Header