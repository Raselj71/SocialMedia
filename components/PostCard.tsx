import React from "react";
import { BiLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";



type authortype = {
  id: number;
  firstName: string;
  lastName: string;
};
type mediaType = {
  id: number;
  url: string;
  type: string;
  postId: number;
};

function PostCard({
  postId,
  authorId,
  content,
  updatedAt,
  author,
  media,
}: {
  postId: number;
  authorId: number;
  content: string;
  updatedAt: string;
  author: authortype;
  media: mediaType[];
}) {
  return (
    <div className="bg-white p-4 rounded-md">
      <div>
        <div className="flex items-center gap-4">
          <img src={""} alt="image" className="size-10 rounded-full" />
          <p className="font-semibold">{author.firstName } {author.lastName}</p>
        </div>

        <div>{content}</div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-1 mt-5">
          {media.length > 0 &&
            media.map((media, index) => (
              <div key={index} className="relative">
                {media.type === "IMAGE" ? (
                <div className="w-full h-[300px] flex justify-center items-center bg-gray-100">
                <img
                  src={media.url}
                  alt="Preview"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              
                ) : (
                  <video controls style={{ width: "100%", maxHeight: "200px" }}>
                    <source src={media.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            ))}
        </div>
      
         <div className="flex justify-between mx-10 mt-4">
             <div >
               <button className="flex items-center gap-2  text-gray-600"><BiLike/> <span className="font-semibold">Like</span></button>
              
             </div>
             <div >
               <button className="flex items-center gap-2  text-gray-600"><FaRegCommentDots/>  <span className="font-semibold">Comment</span></button>
             
             </div>
             <div >
               <button className="flex items-center gap-2  text-gray-600"><PiShareFat/>  <span className="font-semibold">Share</span></button>
             
             </div>
         </div>
      </div>
    </div>
  );
}

export default PostCard;
