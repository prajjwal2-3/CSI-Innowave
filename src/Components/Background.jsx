import React from "react";

import Body from "./Homepage/Body";

export default function GridBackgroundDemo() {
  return (
    <div className="h-auto overflow-hidden w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex py-16 sm:py-20 justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 ">
      <div className="sm:w-[120rem] w-[35rem]"><Body/></div>
      </div>
    </div>
  );
}
