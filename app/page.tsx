import Image from "next/image";
import icon from "@/app/public/icon.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container w-full flex flex-col px-10 lg:flex-row lg:justify-center lg:items-center">
  <div className="lg:w-1/3">
    <Image src={icon} alt="facebook" className="lg:w-80" />
    <h3 className="text-2xl px-4 mb-5 lg:text-xl">
      Facebook helps you connect and share with the people in your life.
    </h3>
  </div>

  <div className="lg:w-1/2 lg:mt-10">
    <form className="flex mb-10 lg:mb-0 flex-col bg-white drop-shadow-2xl rounded-md p-4">
      <input
        className="h-14 px-4 mt-5 focus:outline-blue-500 text-lg border rounded-md"
        type="text"
        placeholder="Email address"
      />
      <input
        className="h-14 px-4 mt-3 focus:outline-blue-500 text-lg border rounded-md"
        type="text"
        placeholder="Password"
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

      <Link
        className="bg-[#42b72a] h-12 mb-5 text-white text-lg flex items-center justify-center rounded-md"
        href={"/signup"}
      >
        Create new account
      </Link>
    </form>
  </div>
</div>

  );
}
