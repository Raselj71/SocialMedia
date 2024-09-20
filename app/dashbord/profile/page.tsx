import React from 'react'
import { FaCamera } from "react-icons/fa";


function page() {
  return (
    <div className='w-full '>
        <div className='w-full h-40 lg:h-60 bg-slate-600 rounded-md relative'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjsJg0VZ_OohPt6dIBkUV2kloFjIo-7M0q2Q&s" alt="" className='w-full h-full object-cover rounded-md' />
               <button className='absolute bottom-0 right-0 m-2 flex items-center bg-white px-3 py-2 space-x-2 text-gray-700 rounded-md'><FaCamera/><span className='font-medium'>Edit cover photo</span></button>
        </div>

        <div>
          
        </div>


    </div>
  )
}

export default page