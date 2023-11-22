import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center text-inherit items-center align-middle w-[100%] mt-12">
      <h1 className=" flex-col font-avro font-semibold tracking-wide flex  justify-center text-[4rem] w-[80%] md:w-[78%]">
        <span> Your Personal <span className="text-[#2563EB]">Assistant</span></span>
        <span className="flex justify-center flex-col md:flex-row">  <span>Simplifying &nbsp;</span> 
        <span>
           <div className="w-28 h-28 rounded-3xl bg-[#EEEDFF]">

            <div className="relative w-[240px] h-[240px] -ml-[50%]">
            <img src="https://sprintdock.app/assets/intergrations/mac.svg" className="relative mt-[2px] ml-[100px] w-[40px] h-[40px]"/>
            <img src="https://sprintdock.app/assets/intergrations/macpro.svg" className="relative mt-[100px] mr-[20px] w-[40px] h-[40px]"/>
            <img src="https://sprintdock.app/assets/intergrations/command.svg" className="relative mb-[20px] ml-[100px] w-[40px] h-[40px]" />
            <img src="https://sprintdock.app/assets/intergrations/apple.svg" className="relative mt-[0px] ml-[220px] w-[40px] h-[40px]"/>
            </div>

           </div>
          </span> &nbsp; Life</span>
      </h1>
    </div>
  );
};

export default Hero;
