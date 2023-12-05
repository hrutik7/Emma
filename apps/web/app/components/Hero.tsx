
import React from "react";

import { ShimmerButton } from "./ShimmerButton";
import Link from "next/link";
export function Blur() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 pointer-events-none"
    >
      <div className="fix-safari-blur blur-[106px] h-56 bg-gradient-to-br from-cyan-500 to-blue-400"></div>
      <div className="fix-safari-blur blur-[106px] h-32 bg-gradient-to-r from-indigo-400 to-blue-30"></div>
    </div>
  );
}

const Hero = () => {
  return (
    <div className="flex gap-12 flex-col justify-center text-inherit items-center align-middle w-[100%] mt-[10%]">
    <Blur />
      <h1 className=" flex-col text-center font-avro  font-semibold tracking-wide flex  justify-center text-[4rem] w-[80%] md:w-[78%]">
        <span> Your Personal <span className="text-transparent  md:text-8xl bg-clip-text bg-gradient-to-r from-[#77a2d4] via-[#2971c7] to-[#77a2d4]">Assistant</span></span>
        <span className="flex justify-center flex-col md:flex-row">  <span>Analyzing &nbsp;</span> 
        <span className="flex justify-center -mt-20 md:mt-0">
           <div className="w-28 h-28 pt-1 justify-center items-center  overflow-hidden rounded-3xl bg-[#EEEDFF]">

            <div className="relative animate-waving-hand  w-[240px] h-[240px]  transform-gpu -ml-[50%]">
              {/* <p  className="relative  mt-[19px] ml-[86px] w-[60px] h-[60px]">💪</p> */}
            <img src="money.svg" className="relative  mt-[19px] ml-[80px] w-[70px] h-[70px]"/>
            {/* <p className="relative -rotate-90 mt-[44px] mr-[20px] w-[60px] h-[60px]">💰</p> */}
            <img src="lotus.svg" className="relative -rotate-90 mt-[34px] mr-[20px] w-[70px] h-[70px] "/>
            <img src="bicep.svg" className="relative rotate-180 mt-[16px] ml-[90px] w-[65px] h-[65px]" />
         
            <img src="love.svg" className="relative rotate-90 -mt-[170px] ml-[170px] w-[76px] h-[70px]"/>
            </div>

           </div>
          </span> &nbsp; Life</span>
         
      </h1>
      <p className="text-xl font-medium text-zinc-500 w-[60%] text-center">Empowering Your Every Day, Delivering Unmatched Support and Sophisticated Analysis for an Effortlessly Enhanced <span className="text-zinc-800">Life Experience.</span></p>
          <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <Link
                href="https://tally.so/r/mVzx7J"
                target="_blank"
                className="w-full sm:w-max"
              >
                <ShimmerButton
                  className="relative w-full sm:w-max flex items-center justify-center transition-all hover:shadow-[0_0_0_3px_rgba(255,255,255,0.3)_inset]"
                  background="#2971c7"
                >
                  <span className="relative whitespace-pre text-center text-base font-semibold leading-none tracking-tight text-white z-10">
                    Join the waitlist →
                  </span>
                </ShimmerButton>
              </Link>
              <Link
                target="_blank"
                href="https://cal.com/hrutik/15min"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-blue-600/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-[#2971c7]">
                  Book a call
                </span>
              </Link>
            </div>
    </div>
  );
};

export default Hero;
