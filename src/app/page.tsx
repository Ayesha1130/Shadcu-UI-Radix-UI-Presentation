import React from "react";
import Link from "next/link";
import { GrLinkNext } from "react-icons/gr";


export default function Home() {
  return (
    <div className="flex flex-col justify-center  items-center  ">
      <div className=" mt-28 p-20 md:ml-20">
        <h1 className=" flex text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 ">
          Welcome to my Presentation
        </h1>
       
        <Link href='/slide1' className="flex mt-20 p-4 w-60 md:w-72 lg:w-80 text-center items-center bg-gradient-to-r from-purple-500 to-pink-800 text-white text-xl font-bold">Next<GrLinkNext className="size-5 ml-2 mt-1"/></Link>
          
        <h3 className="mt-20  font-bold text-gray-900">
          Created by GIAIC Student Leader....
        </h3>
        <h4 className=" underline font-bold text-green-800">
          Ayesha Iqbal
        </h4>
        
      </div>
     
    </div>
  );
}
