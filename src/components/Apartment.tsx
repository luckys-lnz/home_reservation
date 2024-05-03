import React from "react";
import Image from "next/image";
import { sofa, mapImg } from "@/assets";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Apartment() {
  return (
    <div className="p-4 relative">
      <div className="relative rounded-[24px] overflow-hidden">
        <Image
          src={sofa}
          alt="room with sofa"
          layout="responsive"
          width={1200}
          height={800}
        />
        <div className="absolute inset-0 flex flex-col">
          <div className="bg-black bg-opacity-50 rounded-[24px] p-4 text-white">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xl font-bold">
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
            <p className="text-wrap">
              Auctor nibh hendrerit gravida aenean ut dis posuere bibendum at.
              Mattis velit at adipiscing ut eu.
            </p>
            <div className="flex">
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
