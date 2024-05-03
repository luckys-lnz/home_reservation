import React from "react";
import Image from "next/image";
import { bannerImg, sofa, mapImg } from "@/assets";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { bannerFaces } from "@/constants";
import sofa2 from "@/assets/sofa.jpeg";

function Hero() {
  return (
    <div className="h-screen flex flex-col">
      <div className="mt-20 px-4">
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
        <div className="flex justify-between items-center">
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
      </div>

      {/* overlay */}
      <div className="relative flex-1 p-4 flex">
        <div
          style={{
            backgroundImage: `url(${sofa2.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="relative rounded-[24px] overflow-hidden flex-1 bg-pink-200"
        >
          <div className="absolute inset-0 flex flex-col h-full">
            <div className="w-full rounded-[24px] p-4  text-white">
              <div className="flex justify-between items-center rounded-[24px] p-3 bg-white/100">
                <div>
                  <p className="text-xl font-bold text-black">
                    Tettey Quarshie <br />
                    East Legon
                  </p>
                  <div>
                    <RoundedBtn />
                  </div>
                </div>
                <div>
                  <Image src={mapImg} alt="map direction" />
                </div>
              </div>
              <div className="absolute bottom-0 flex-col items-start">
                <p className="text-balance">
                  Auctor nibh hendrerit gravida aenean ut dis posuere bibendum
                  at. Mattis velit at adipiscing ut eu.
                </p>
                <div className="flex gap-2 pb-4 pt-4">
                  <Button
                    variant="SelectBtn"
                    type="button"
                    title="Select"
                    icon={
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className="inline-flex w-4 h-4"
                      />
                    }
                  />
                  <Button
                    variant="SelectBtn"
                    type="button"
                    title="Location"
                    icon={
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className="inline-flex w-4 h-4"
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const RoundedBtn = () => {
  return (
    <button className="bg-black rounded-full p-3">
      <FontAwesomeIcon
        icon={faArrowRight}
        className="h-6 w-6 inline-flex text-white"
      />
    </button>
  );
};

export default Hero;
