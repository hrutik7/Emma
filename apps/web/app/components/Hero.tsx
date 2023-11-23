import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center text-inherit items-center align-middle w-[100%] mt-12">
      <h1 className=" flex-col font-avro font-semibold tracking-wide flex  justify-center text-[4rem] w-[80%] md:w-[78%]">
        <span> Your Personal <span className="text-[#2563EB]">Assistant</span></span>
        <span className="flex justify-center flex-col md:flex-row">  <span>Simplifying &nbsp;</span> 
        <span>
           <div className="w-28 h-28 pt-1 overflow-hidden rounded-3xl bg-[#EEEDFF]">

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
    </div>
  );
};

export default Hero;
