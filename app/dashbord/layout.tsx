import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <nav>
             <Header/>
        </nav>
        <main className="flex w-full mt-4">
              <div className="hidden lg:block lg:w-1/4">
                       <LeftSidebar/>
              </div>
               <div className="w-full lg:w-[60%]  px-4 lg:px-10">
               {children}
               </div>
               <div className="hidden lg:block lg:w-1/4">

               </div>
        </main>
      
      </>
    )
  }