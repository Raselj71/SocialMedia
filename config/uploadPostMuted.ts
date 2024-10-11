export const uploadPost=async(postData:FormData)=>{

    const response = await fetch(`http://localhost:5000/post/add`, {
        method: "POST",
        body: postData,
      });

      if (!response.ok) {
        throw new Error('Failed to post');
      }
    
      return await response.json();  
}

