"use client";

import { useSession ,signOut} from "next-auth/react";
import { RiVideoAddFill } from "react-icons/ri";
import { PiImagesBold } from "react-icons/pi";
import { BsEmojiLaughing } from "react-icons/bs";
import Post from "@/components/Post";
import { useState } from "react";



const Page = () => {
  const {data:session} = useSession();
  const[visible , SetVisible]=useState(false)

  return (
    <section className="w-full lg:px-10">

      <Post  visible={visible} close={()=>{SetVisible(!visible)}}/>

      <div className="bg-white w-full px-2 rounded-lg">
        <div className="flex space-x-4 lg:px-10 py-2">
        <img src={session?.user?.image!} alt='image' className='size-10 rounded-full'/>
        <button onClick={()=>{SetVisible(!visible)}} className="flex-grow text-start rounded-full bg-gray-100 text-gray-600 px-10 text-lg hover:bg-gray-200">What's on your mind</button>
        </div>

        <hr className="mt-3" />

        <div className="flex justify-between py-4">
             <button className="flex items-center space-x-2 hover:bg-gray-200 px-4 py-2 rounded-md lg:flex-grow lg:justify-center"> 
                        <RiVideoAddFill className="text-red-600" />
                        <p className="font-medium text-gray-600">Live Video</p>
             </button>
             <button onClick={()=>{SetVisible(!visible)}} className="flex items-center space-x-2 hover:bg-gray-200 px-4 py-2 rounded-md lg:flex-grow lg:justify-center"> 
                        <PiImagesBold className="text-green-600" />
                        <p className="font-medium text-gray-600">Photo/Video</p>
             </button>
             <button className="flex items-center space-x-2 hover:bg-gray-200 px-4 py-2 rounded-md lg:flex-grow lg:justify-center"> 
                        <BsEmojiLaughing className="text-yellow-500"/>
                        <p className="font-medium text-gray-600">Felling/Activity</p>
             </button>
        </div>
         
      </div>
      

   
    </section>
  );
};

export default Page;
