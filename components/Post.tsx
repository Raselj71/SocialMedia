import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useSession } from "next-auth/react";
import { PiImagesBold } from "react-icons/pi";
import { BsEmojiLaughing } from "react-icons/bs";
import { FaUserTag } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import 'dotenv/config'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




function Post({ visible, close }: any) {
    const {data:session} = useSession();
    const [mediaFiles, setMediaFiles] = useState([]);
    const [content, setContent]=useState('')
    const [showInput, setInput]=useState(false)

  const handleFileChange = (event:any) => {
    const files = Array.from(event.target.files); 
   
    const validFiles = files.map(file => {
      const fileType = file.type.split('/')[0];
      if (fileType === 'image' || fileType === 'video') {
        return {
          url: URL.createObjectURL(file),
          type: fileType,
          file: file,
        };
      }
      return null;
    }).filter(file => file !== null); 

    setMediaFiles((prevFiles) => [...prevFiles, ...validFiles]);
  };

  const handleRemove = (index:any) => {
    const updatedFiles = mediaFiles.filter((_, i) => i !== index); 
    setMediaFiles(updatedFiles);
  };
  const handleSubmit=async(e:any)=>{
    e.preventDefault()
    const formData=new FormData()
    formData.append('content',content)
    formData.append('userid', session?.user?.id)
    mediaFiles.map((media, index)=>{
        formData.append(`mediaFiles`, media.file)
    })

    try {
           const response= await fetch(`http://localhost:5000/post/add`,{
            method:"POST",
            body:formData
           })

           if(response.ok){
            setContent('');
            setMediaFiles([]);
            console.log("post upload successfully")
            toast.success('Post uploaded')
            close()
           }
    } catch (error) {
         console.log(error)
         toast.error('post upload failed')
    }


  }

  
    if (!visible) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md lg:max-w-lg w-full">
         <div className="flex justify-between items-center">
             <p className="font-bold text-lg">Create Post</p>
             <button onClick={close} className="text-xl p-2 rounded-full bg-gray-200 text-gray-500 hover:bg-gray-300"><RxCross2/></button>
         </div>

         <hr className=" mt-4"/>

          <div>
             <form onSubmit={handleSubmit}>
                <textarea value={content} onChange={(e)=>{setContent(e.target.value)}} placeholder={`What's on your mind,? ${session?.user?.name}`} name="post" id="post" className="w-full p-4 outline-none"></textarea>

                  <div>

                  <input type="file" name="mediaFiles" accept="image/*, video/*" onChange={handleFileChange} multiple className={`w-full border-2 rounded-xl p-2 file:bg-blue-600 file:rounded-lg file:border-none file:text-white ${!showInput?"hidden":""}`} />
      
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-1 mt-5">
        {mediaFiles.length > 0 && (
          mediaFiles.map((media, index) => (
            <div key={index} className="relative">
              {media.type === 'image' ? (
                <img src={media.url} alt="Preview"  className="w-full h-auto"/>
              ) : (
                <video controls style={{ width: '100%', maxHeight: '200px' }}>
                  <source src={media.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <button type="button" className="absolute top-0 right-0  p-2 rounded-full bg-gray-200 text-gray-500 font-bold" onClick={() => handleRemove(index)}><RxCross2/></button>
            </div>
          ))
        )}
      </div>
                  </div>
                 <div className="border-2 p-4 rounded-lg">
                       <div className="flex items-center justify-between space-x-2">
                           <p className="text-gray-600 font-bold">Added to your post</p>
                            <div className="space-x-4">
                            <button onClick={()=>{setInput(!showInput)}} type="button" className="text-green-600 text-3xl"><PiImagesBold/></button>
                            <button type="button" className="text-blue-600 text-3xl"><FaUserTag/></button>
                            <button type="button" className="text-yellow-600 text-3xl"><BsEmojiLaughing/></button>
                            <button type="button" className="text-red-600 text-3xl"><FaLocationDot/></button>
                            </div>
                       </div>
                 </div>

                 <button type="submit" className="w-full mt-4 bg-blue-600 text-white rounded-md text-xl py-2">Post</button>
             </form>
          </div>
      </div>
    </div>
  );
}

export default Post;
