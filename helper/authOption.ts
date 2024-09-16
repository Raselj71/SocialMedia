
import CredentialsProvider from "next-auth/providers/credentials";



export const authOptions = {
  pages: {
    signIn: "/",
  },
  session: {
    strategy: "jwt" as const,
    maxAge:2*60*60 
  },
  secret: process.env.NEXTAUTH_SECRET,


    callbacks: {
    async jwt({ token, user }:any) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.userid=user._id
        token.image=user.profilePicture
        
      }
      return token;
    },
    async session({ session, token }:any) {
      if (token) {
        session.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.id=token.userid
        session.user.image=token.image
        
        
      }
      return session;
    },

},

  providers: [
    CredentialsProvider({
      name: "credential",

      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
       
        if (credentials === null) {
          return null;
        } else {
          try {

            const response = await fetch(`${process.env.SERVER_URL}/user/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  email: credentials?.email,
                  password: credentials?.password,
                }),
              });

      
              const user = await response.json();
      
             
              if (response.ok && user) {
                return user;
              }
      
            
              return null;
            
            
           
          
          } catch (error) {
            console.log(error)
            throw new Error("Failed to authorized");
          }
        }
      },
    }),
  ],


  
};