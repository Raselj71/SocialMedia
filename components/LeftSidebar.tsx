'use client'
import React from 'react'
import { useSession ,signOut} from "next-auth/react";
import Link from 'next/link'
import Image from 'next/image';

function LeftSidebar() {
    const {data:session} = useSession();
  return (
    <div className='mx-4 flex flex-col'>
        
         <Link href={'/'}>
                   <div className='flex items-center space-x-6 hover:bg-slate-300 px-4 py-2 rounded-md'>
                   <img src={session?.user?.image!} alt='image' className='size-10 rounded-full'/>
                        <p className='font-bold text-xl '>{session?.user?.name}</p>
                        
                   </div>
           </Link>
    </div>
  )
}

export default LeftSidebar