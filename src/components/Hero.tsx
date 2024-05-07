import React from "react";
import Image from "next/image";
import "../app/globals.css";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";

import RoundedBtn from "./RoundBtn";
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
import {
  faAngleDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { bannerFaces } from "@/constants";

function Hero() {
  return (
    <div className="h-screen flex flex-col md:grid md:grid-cols-2 px-4">
      <div className=" md:flex md:flex-col">
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
                icon={<BsArrowUpRight className="w-4 h-4 inline-flex" />}
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
              icon={<BsArrowUpRight className="w-5 h-5 inline-flex" />}
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

        {/* HIDDEN OVERLAY IMAGE ON SMALL DEVICES */}
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

      {/* TOP CONTENT FOR THE RIGHT-HAND COMP*/}
      <div className="relative flex-1 md:py-4 md:pl-4 flex">
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
              <div className="md:flex md:justify-between">
                <div className="flex justify-between items-center rounded-[24px] w-[265px] bg-white/100">
                  <div className="p-3 ">
                    <p className="text-[16px] font-[600px] leading-[24px] text-black">
                      Tettey Quarshie <br />
                      East Legon
                    </p>
                    <div>
                      <RoundedBtn
                        variant="RoundedBtn"
                        type={"button"}
                        icon={<BsArrowDownRight className="w-4 h-4" />}
                      />
                    </div>
                  </div>
                  <div>
                    <Image src={mapImg} alt="map-img" className="p-2" />
                  </div>
                </div>
                <div className="hidden md:flex md:justify-center">
                  <div>
                    <div className="inline-flex gap-3">
                      <Button
                        variant="SelectBtn"
                        type="button"
                        title="Contact"
                        icon={<FiPhone className="w-4 h-4 inline-flex" />}
                      />
                      <div>
                        <RoundedBtn
                          type={"button"}
                          variant={"RoundedBtnWhite"}
                          icon={<IoPersonOutline className="w-4 h-4 inline-flex text-black"/>}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM CONTENT FOR THE RIGHT-HAND COMP*/}
              <div className="absolute bottom-0 flex-col items-start">
                <p className="text-balance">
                  Auctor nibh hendrerit gravida aenean ut dis posuere bibendum
                  at. Mattis velit at adipiscing ut eu.
                </p>
                <div className="flex md:justify-between md:items-center gap-2 py-4">
                  <div className="flex justify-center gap-4">
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
                  <div className="hidden md:flex md:pr-4">
                    <Button
                      variant="SearchBtn"
                      type="button"
                      title="Search"
                      icon={
                        <FontAwesomeIcon
                          icon={faSearch}
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
    </div>
  );
}

export default Hero;
