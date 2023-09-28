"use client";

import Image from "next/image";
import React, { useState } from "react";
import { GoHome, GoHomeFill } from "react-icons/go";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary, MdVideoLibrary } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState(null);
  const handleIconClick = (iconName: any) => {
    if (activeIcon === iconName) {
      setActiveIcon(null);
    } else {
      setActiveIcon(iconName);
    }
  };

  return (
    <div className=" min-w-[8vw]  md:mr-0 mx-1  lg:mx-0   h-fit 2xl:h-[20vw]  md:min-w-[2vw] lg:w-[7vw] xl:w-[6vw] lg:py-2 lg:gap-3 xl:gap-7 2xl:gap-9 xl:py-4   flex flex-col     sticky left-0  top-10 md:top-16 lg:top-14 2xl:top-[128px] ">
      <button
        onClick={() => handleIconClick("home")}
        className={
          "flex flex-col 2xl:flex-row gap-2 justify-center items-center hover:bg-gray-100 w-full px-1 py-2 rounded-xl"
        }
      >
        {activeIcon === "home" ? (
          <GoHomeFill className=" w-[4vw]  h-[4vw] md:w-[2vw] lg:w-[2vw] lg:h-[2vw] xl:w-[25px] xl:h-[30px] 2xl:w-[40px] 2xl:h-[70px]" />
        ) : (
          <GoHome className="w-[4vw] h-[4vw] md:w-[2vw] md:h-[2vw] lg:w-[15px] lg:h-[2vw] xl:w-[25px] xl:h-[30px] 2xl:w-[40px] 2xl:h-[70px]" />
        )}

        <p className="text-[6px]  lg:text-[10px] xl:text-[10px] 2xl:text-[16px]">
          Home
        </p>
      </button>

      <div className="flex flex-col 2xl:flex-row 2xl:justify-center items-center gap-2">
        <button onClick={() => handleIconClick("shorts")}>
          {activeIcon === "shorts" ? (
            <div className="relative w-[2vw]  h-[2vw] md:w-[2vw] md:h-[2vw] lg:h-[2vw] lg:w-[2vw] xl:w-[25px] xl:h-[25px] 2xl:h-[60px] 2xl:w-[40px]">
              <Image src={"/shortsblack.png"} alt={""} fill />
            </div>
          ) : (
            <div className="relative w-[4vw]  h-[4vw] md:w-[2vw] md:h-[2vw] lg:h-[2vw] lg:w-[2vw] xl:w-[25px] xl:h-[25px] 2xl:h-[60px] 2xl:w-[40px]">
              <Image src={"/shorts.png"} alt={""} fill />
            </div>
          )}
        </button>

        <p className="text-[6px]  lg:text-[10px] xl:text-[10px]">Shorts</p>
      </div>

      <button
        onClick={() => handleIconClick("Subscriptions")}
        className="flex  flex-col 2xl:flex-row gap-1 xl:gap-2 justify-center items-center hover:bg-gray-100 w-full px-1 py-3 xl:py-2 2xl:pl-6 rounded-xl"
      >
        {activeIcon === "Subscriptions" ? (
          <MdSubscriptions
            className={
              "w-[4vw] h-[4vw] md:w-[2vw] md:h-[2vw] lg:h-[2vw] lg:w-[2vw] xl:w-[25px] xl:h-[25px] 2xl:w-[40px] 2xl:h-[70px]"
            }
          />
        ) : (
          <MdOutlineSubscriptions
            className={
              "w-[4vw] h-[4vw] md:w-[2vw] md:h-[2vw] lg:h-[2vw] lg:w-[2vw] xl:w-[25px] xl:h-[25px] 2xl:w-[40px] 2xl:h-[70px]"
            }
          />
        )}

        <p className="text-[4px] font-thin lg:text-[10px] xl:text-[10px] 2xl:text-[16px">
          Subscriptions
        </p>
      </button>

      <button
        onClick={() => handleIconClick("library")}
        className="flex flex-col 2xl:flex-row gap-2  justify-center items-center hover:bg-gray-100 w-full px-1 py-3 xl:py-2 rounded-xl"
      >
        {activeIcon === "library" ? (
          <MdVideoLibrary className="w-[4vw] h-[4vw] md:w-[2vw] md:h-[2vw] lg:h-[2vw] lg:w-[2vw] xl:w-[30px] xl:h-[30px] 2xl:w-[40px] 2xl:h-[70px]" />
        ) : (
          <MdOutlineVideoLibrary className="w-[4vw] h-[4vw] md:w-[2vw] md:h-[2vw] lg:h-[2vw] lg:w-[2vw] xl:w-[30px] xl:h-[30px] 2xl:w-[40px] 2xl:h-[70px]" />
        )}

        <p className="text-[6px]  lg:text-[10px] xl:text-[10px] 2xl:text-[16px]">
          Library
        </p>
      </button>
    </div>
  );
};

export default Sidebar;
