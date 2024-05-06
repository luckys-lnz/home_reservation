import React from "react";
import Image from "next/image";
import {
  bannerImg,
  sofa,
  mapImg,
  sofa2,
  chinese,
  cuteSmile,
  suit,
} from "@/assets";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { banaFacesLg, bannerFaces } from "@/constants";

function Hero() {
  return (
    <div className="h-screen flex flex-col md:grid md:grid-cols-2">
      <div className="px-4 md:flex md:flex-col">
        <div className="mt-16 md:flex-1 ">
          <div className="flex justify-center items-start md:grid-cols-2 md:gap-4">
            <div>
              <h1 className="font-poppins font-[600px] text-[32px] md:text-[64px] leading-[38px] md:leading-[64px] pb-[25px]">
                Reserve Your Ideal Holiday
              </h1>
              <span className="font-poppins font-[600px] text-[20px] leading-[24px]">
                Lets get Aquinted
              </span>
              <p className="font-poppins font-[400px] text-[16px] leading-[24px]">
                Auctor nibh hendrerit gravida aenean ut dis posuere bibendum at.
                Mattis velit at adipiscing ut eu.
              </p>
            </div>
            <Image
              src={bannerImg}
              alt="banner_img"
              className="w-[100px] h-[220px]"
            />

            {/* SIDE FACE IMAGE AND SUB-IMAGE */}
            <div className="hidden md:flex md:flex-col md:gap-4 md:justify-evenly md:items-center">
              <Image
                src={chinese}
                alt="face-img"
                className="w-[53px] h-[53px]"
              />
              <Image src={suit} alt="face-img" className="w-[87px] h-[86px]" />
              <Image
                src={cuteSmile}
                alt="face-img"
                className="w-[53px] h-[53px]"
              />
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
            </div>
          </div>
          <span className="hidden md:flex md:justify-center md:items-center md:gap-4">
            <h2 className=" font-poppins text-[42px] font-[600px] leading-[56px]">
              +50k
            </h2>
            <p className="text-wrap font-[400px] text-[10px] leading-[14px]">
              Auctor aenean ut dis posuere.
            </p>
            <h2 className=" font-poppins text-[42px] font-[600px] leading-[56px]">
              +2k
            </h2>
            <p className="text-wrap font-[400px] text-[10px] leading-[14px]">
              Auctor aenean ut dis posuere.
            </p>
            <h2 className=" font-poppins text-[42px] font-[600px] leading-[56px]">
              +5
            </h2>
            <p className="text-wrap font-[400px] text-[10px] leading-[14px]">
              Auctor aenean ut dis posuere.
            </p>
          </span>

          {/* Main button */}
          <div className="flex justify-between items-center md:hidden">
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
            <div className="flex ">
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

        {/* hidden Element on small device */}
        <div className="hidden flex-1 py-4 md:flex">
          <div
            style={{
              backgroundImage: `url(${sofa2.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="relative rounded-[24px] flex-1"
          >
            <div className="absolute bottom-0 p-4">
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
            </div>
          </div>
        </div>
      </div>

      {/* overlay */}
      <div className="relative flex-1 p-4 flex">
        <div
          style={{
            backgroundImage: `url(${sofa.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="relative rounded-[24px] overflow-hidden flex-1"
        >
          <div className="absolute inset-0 flex flex-col h-full">
            <div className="w-full rounded-[24px] p-4  text-white">
              <div className="flex justify-between items-center rounded-[24px] w-[265px] bg-white/100">
                <div className="p-3 ">
                  <p className="text-[16px] font-[600px] leading-[24px] text-black">
                    Tettey Quarshie <br />
                    East Legon
                  </p>
                  <div>
                    <RoundedBtn />
                  </div>
                </div>
                <div>
                  <Image src={mapImg} alt="map-img" className="pr-3" />
                </div>
              </div>
              <div className="absolute bottom-0 flex-col items-start">
                <p className="text-balance">
                  Auctor nibh hendrerit gravida aenean ut dis posuere bibendum
                  at. Mattis velit at adipiscing ut eu.
                </p>
                <div className="flex gap-2 py-4">
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
