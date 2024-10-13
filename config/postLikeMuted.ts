import { useMutation,useQueryClient  } from 'react-query';
type likedata={
    userId:number,
    postId:number,
}

 const likePost=async(likedata:likedata)=>{

    const response = await fetch(`http://localhost:5000/post/add`, {
        method: "POST",
        body:JSON.stringify(likedata)
      });

      if (!response.ok) {
        throw new Error('Failed to post');
      }
    
      return await response.json();  
}

export const uselikeMutation=()=>{

    const queryClient = useQueryClient()
   return useMutation(likePost, {
       onSuccess: async () => {
          await queryClient.invalidateQueries('getpost');
       }
   })

  
}



