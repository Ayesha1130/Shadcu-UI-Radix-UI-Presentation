import React from "react";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

const Slide3 = () => {
  return (
    <div className="flex flex-col justify-center  items-center bg-gradient-to-t from-black to-pink-700 h-screen ">
      <div className=" mt-28 p-20 md:ml-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 ">
          Thank you for reading
        </h1>
      </div>
      <div className="flex justify-center items-center ">
        <Link
          href="/"
          className="flex mb-20 p-4 w-60 md:w-72 lg:w-80 text-center items-center bg-gradient-to-r from-purple-500 to-pink-800 text-white text-xl font-bold"
        >
          <IoMdArrowBack className="size-7 ml-2 mt-1" />
          Back
        </Link>
      </div>
    </div>
  );
};

export default Slide3;
