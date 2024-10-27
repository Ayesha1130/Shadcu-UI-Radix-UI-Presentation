import React from "react";
import Link from "next/link";
import { GrLinkNext } from "react-icons/gr";

const slide2 = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-5 p-20">
        <h2 className="mb-10 text-4xl md:text-5xl lg:text-6xl font-bold  text-blue-900 ">
          Shadcn UI Introduction
        </h2>
        <p className="mb-4 text-sm md:text-base lg:text-lg">
          Beautifully designed components that you can copy and paste into your
          applications. This is NOT a component library. It`s a collection of
          re-useble components. pick the components you need.Copy and paste the
          code into your project and customize to your needs.The code is yours.
        </p>
        <h2 className="font-bold">Why Choose Shadcn UI</h2>
        <p className="mb-4 text-sm md:text-base lg:text-lg">
          Shadcn UI offers a wide range of components, without default styles,
          and utilities to help you build accessible and maintainable
          interfaces.
        </p>
        <h2 className="font-bold">What is Shadcn UI?</h2>
        <p className="mb-4 text-sm md:text-base lg:text-lg">
          Shadcn UI is an open source customized UI component library designed
          to hely developer create visually appealing.
        </p>
        <h2 className="font-bold">Key Features</h2>
        <h2 className="font-bold">Customibility</h2>
        <p className="mb-4 text-sm md:text-base lg:text-lg">
          Provides unstyled components ,allowing developers full control over
          the design.
        </p>
        <h2 className="font-bold">Flexible Design</h2>
        <p className="mb-4 text-sm md:text-base lg:text-lg">
          Easy adapation to different design systems and style
        </p>
        <h2 className="font-bold">Developer Experience</h2>
        <p className="mb-4 text-sm md:text-base lg:text-lg">
          Provides a developer experience that is easy to understand and
          maintain.
        </p>
        <h2 className="font-bold">Lightweight</h2>
        <p className="mb-4 text-sm md:text-base lg:text-lg">
          Library is designed to be Lightweight,enhancing application
          performance .
        </p>
        <h2 className="font-bold">Integration with Modern Frameworks.</h2>
        <p className="mb-4 text-sm md:text-base lg:text-lg">
          Shadcn UI is designed to work seamlessly with popular modern
          frameworks like React, Vue, Angular, and more.
        </p>
        <h2 className="font-bold ">Shadcn UI</h2>
        <p className="mb-4 text-sm md:text-base lg:text-lg">
          <strong>PROPS</strong>: Quick Setup, Tailwind Integration,pre designed
          components
        </p>
        <div className="flex flex-col">
          <h2 className="mt-5  text-3xl md:text-4xl lg:text-5xl  italic  text-blue-900">
            Installation
          </h2>
          <p className="mt-4 text-sm md:text-base lg:text-lg">
            You can install Shadcn UI via npm:
          </p>
          <code className="mt-5 text-sm md:text-base lg:text-lg bg-black text-white p-4 rounded-lg">
            npx shadcn@latest init
          </code>
          <Link
            href="https://ui.shadcn.com/docs"
            className="mt-5 text-sm md:text-base lg:text-lg bg-black text-white p-4 rounded-lg"
          >
            {" "}
            Click Here For Shadcn UI Docs
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <Link
          href="/slide3"
          className="flex mb-20 p-4 w-60 md:w-72 lg:w-80 text-center items-center bg-gradient-to-r from-purple-500 to-pink-800 text-white text-xl font-bold"
        >
          Next
          <GrLinkNext className="size-5 ml-2 mt-1" />
        </Link>
      </div>
    </div>
  );
};

export default slide2;
