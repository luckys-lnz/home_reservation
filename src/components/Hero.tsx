import React from "react";
import Image from "next/image";
import { bannerImg, chinese, cuteSmile } from "@/assets";

function Hero() {
  return (
    <div className="mt-20 px-6">
      <div className="flex grid-cols-2 justify-center items-start">
        <div className="">
          <h1 className="font-poppins font-[600px] text-[32px] leading-[38px] pb-[25px]">
            Reserve Your Ideal Holiday
          </h1>
          <span className="font-poppins font-[600px] text-[20px] leading-6">
            Lets get Aquinted
          </span>
          <p className="font-poppins font-[400px] text-[13px] leading-[18px]">
            Auctor nibh hendrerit gravida aenean ut dis posuere bibendum at.
            Mattis velit at adipiscing ut eu.
          </p>
        </div>
        <Image
          src={bannerImg}
          alt="banner_img"
          className="w-[100px] h-[220px]"
        />
      </div>
    </div>
  );
}

export default Hero;
