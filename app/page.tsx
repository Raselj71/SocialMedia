"use client";
import Image from "next/image";
import icon from "@/app/public/icon.svg";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup from "@/components/Signup";
import { useSession } from "next-auth/react";

export default function Home() {
  const {data:session} = useSession();
  const router = useRouter();

   if (session) {
      router.push('/dashbord')
   }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[showsignup, setSignup]=useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      });

      console.log(response)

      if (response?.error) {
        toast.error("Invalid Credentials");
        return;
      }

      router.push("/dashbord");
    } catch (error) {
      toast.error("Invalid Credentials");
    }
  };
const hanldeSignup=(e:any)=>{
      
       setSignup(!showsignup)
}
  return (
    <div>

<Signup visible={showsignup} close={()=>{setSignup(!showsignup)}}/>
    <div className={`w-full flex h-screen justify-center  ${showsignup?"blur-sm":""}`}>
     
        
    
      <div className="container px-10 lg:flex items-center">
        <div className="lg:w-1/3 flex flex-col items-center">
          <Image src={icon} alt="facebook" className="lg:w-80 xl:w-96" />
          <h3 className="text-2xl px-4 mb-5 lg:text-xl lg:font-medium xl:font-bold xl:px-16">
            Facebook helps you connect and share with the people in your life.
          </h3>
        </div>

        <div className="lg:w-1/2 lg:mt-10">
          <form
            className="flex mb-10 lg:mb-0 flex-col bg-white drop-shadow-2xl rounded-md p-4"
            onSubmit={handleSubmit}
          >
            <input
              className="h-14 px-4 mt-5 focus:outline-blue-500 text-lg border rounded-md"
              type="text"
              placeholder="Email address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <input
              className="h-14 px-4 mt-3 focus:outline-blue-500 text-lg border rounded-md"
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <button
              className="bg-blue-600 font-bold text-white mt-4 h-12 rounded-md text-lg"
              type="submit"
            >
              Login
            </button>

            <Link
              className="mt-6 text-center text-blue-600 hover:underline text-base"
              href={"/"}
            >
              Forgotten Password?
            </Link>
            <hr className="mt-8" />

            <button
              className="bg-[#42b72a] h-12 mb-5 text-white text-lg flex items-center justify-center rounded-md"
              onClick={hanldeSignup}
              type="button"
            >
              Create new account
            </button>
          </form>
        </div>
      </div>

     
    </div>
    <ToastContainer/>

    </div>
  );
}
