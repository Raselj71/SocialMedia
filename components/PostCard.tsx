import React from 'react'

function PostCard({postId, content,updatedAt,authorFirstName, authorLastName,auhthorId, media}) {
  return (
    <div className='bg-white p-4 rounded-md'>
         <div>
              <div>
              <img src={media} alt='image' className='size-10 rounded-full'/>
               <p></p>
              </div>

              <div>
                 {content}
              </div>

              <div>
                
              </div>
         </div>
          
    </div>
  )
}

export default PostCard