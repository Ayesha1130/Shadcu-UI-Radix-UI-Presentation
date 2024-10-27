import React from "react";
import Link from "next/link";

import { GrLinkNext } from "react-icons/gr";

const Slide1 = () => {
  return (
    <div className="flex flex-col justify-center  items-center  ">
      <div className="  p-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900">
          UI Development Made Easy Shadcn And Radix
        </h1>

        <div className="flex flex-col pl-5 mt-20">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold  text-blue-900">
            Introduction
          </h2>
          <p className="mt-4 text-sm md:text-base lg:text-lg">
            Radix is an open source-UI component library for building
            high-quality, accessible design systems and web applications.
          </p>

          <h2 className="mt-10 text-xl md:text-2xl lg:text-3xl font-semibold text-green">
            Why Choose Radix UI
          </h2>
          <p className="mt-4 text-sm md:text-base lg:text-lg">
            Radix UI offers zero styles components and functionality,giving you
            complete control over styling.
          </p>
          <h2 className="mt-10 mb-8 text-xl md:text-2xl lg:text-3xl font-semibold">
            Key Features
          </h2>
          <h2 className="font-bold">Accessibility</h2>
          <p className="mb-4 text-sm md:text-base lg:text-lg">
            Radix UI is designed for screen readers and keyboard navigation,
            making apps unable for everyone
          </p>
          <h2 className="font-bold">Performance</h2>
          <p className="mb-4 text-sm md:text-base lg:text-lg">
            Radix UI is built using modern JavaScript, CSS, and Web APIs, making
            it fast and efficient
          </p>
          <h2 className="font-bold">Customization</h2>
          <p className="mb-4 text-sm md:text-base lg:text-lg">
            Radix UI provides unstyled components, utilities, and patterns to
            help you build accessible and maintainable interfaces.
          </p>
          <h2 className="font-bold">unstyled</h2>
          <p className=" mb-4 text-sm md:text-base lg:text-lg">
            Radix UI offers a wide range of components, without default styles,
            and utilities to customize the appearance of the component and
            allowing full design control
          </p>
          <h2 className="font-bold">Composition</h2>
          <p className="mb-4 text-sm md:text-base lg:text-lg">
            Radix UI Easy to combine components for complex UI.
          </p>
          <h2 className="font-bold ">Lightweight</h2>
          <p className="mb-4 text-sm md:text-base lg:text-lg">
            Radix UI Small library size for better performance,and making it
            easy to include in your project.
          </p>
          <h2 className="font-bold ">Radix UI</h2>
          <p className="mb-4 text-sm md:text-base lg:text-lg">
            <strong>PROPS</strong>: Flexibility Customization
          </p>
          <h2 className="mt-5  text-3xl md:text-4xl lg:text-5xl  italic  text-blue-900">
            Installation
          </h2>
          <p className="mt-4 text-sm md:text-base lg:text-lg">
            You can install Radix UI via npm:
          </p>
          <code className="mt-5 text-sm md:text-base lg:text-lg bg-black text-white p-4 rounded-lg">
            npm install @radix-ui/react
          </code>
          <Link
            href="https://www.radix-ui.com/primitives/docs/overview/introduction"
            className="mt-5 text-sm md:text-base lg:text-lg bg-black text-white p-4 rounded-lg"
          >
            {" "}
            Click Here For Radix UI Docs
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <Link
          href="/slide2"
          className="flex mb-20 p-4 w-60 md:w-72 lg:w-80 text-center items-center bg-gradient-to-r from-purple-500 to-pink-800 text-white text-xl font-bold"
        >
          Next
          <GrLinkNext className="size-5 ml-2 mt-1" />
        </Link>
      </div>
    </div>
  );
};

export default Slide1;
