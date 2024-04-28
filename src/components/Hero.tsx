import React from "react";
import Image from "next/image";
import { bannerImg, chinese, cuteSmile, sofa, mapImg } from "@/assets";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { bannerFaces } from "@/constants";

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

      <div className="flex justify-between items-center pb-6">
        <Button
          variant="MoreBtn"
          type="button"
          title="More"
          icon={
            <FontAwesomeIcon
              icon={faArrowRight}
              className="h-4 w-4 inline-flex"
            />
          }
        />
        <div className="flex">
          {bannerFaces.map((imgProp, index) => (
            <div key={index}>
              {imgProp.faceImg && (
                <Image
                  src={imgProp.faceImg}
                  alt={imgProp.description}
                  width={53}
                  height={53}
                  className="p-2"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="relative bg-white ">
        <Image src={sofa} alt="room with sofa" className="rounded-[24px]" />

        {/* overlay */}
        <div className="absolute top-0 flex p-4 ">
          <div className="bg-white flex justify-center items-center px-3 rounded-[24px]">
            <div>
              <p>
                Tettey Quarshie <br />
                East Legon{" "}
              </p>
              <div className="">
                <RoundedBtn />
              </div>
            </div>
            <div className="py-3">
              <Image src={mapImg} alt="map direction" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const RoundedBtn = () => {
  return (
    <div>
      <button className="bg-black rounded-full p-3">
        <FontAwesomeIcon
          icon={faArrowRight}
          className="h-6 w-6 inline-flex text-white"
        />
      </button>
    </div>
  );
};

export default Hero;
