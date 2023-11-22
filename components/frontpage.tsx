"use client";
import { useRouter } from "next/navigation";


export default function FrontPage() {
 const router = useRouter();
 const handleGoToUser = () => {
   router.push("/users");
 };


 const handleGoToWaiter = () => {
   router.push("/waiters");
 };
 return (
   <>
     <div className="flex flex-col items-center justify-center h-screen">
       <h1 className="title text-black text-6xl ">
         <p>NO</p>
         <p>MA</p>
         <p>DA</p>
       </h1>
       <div className="p-8 flex flex-row justify-center space-x-4">
         <button
           onClick={handleGoToUser}
           className={`bg-green-900 text-white active:bg-green-700 text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none ocus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150`}
         >
           Sou Cliente
         </button>
         <button
           onClick={handleGoToWaiter}
           className={`bg-green-900 text-white active:bg-green-600 text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150`}
         >
           Sou garçom
         </button>

       </div>
     </div>
   </>
 );
}
