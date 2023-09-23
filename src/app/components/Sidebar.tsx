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
      // If the same icon is clicked again, deactivate it
      setActiveIcon(null);
    } else {
      // Activate the clicked icon and deactivate the previously active icon
      setActiveIcon(iconName);
    }
  };

  return (
    <div className="min-w-[2vw] mx-2 md:mx-0  h-fit md:min-w-[2vw] lg:w-[8vw] xl:w-[6vw] lg:py-2 lg:gap-3 xl:gap-4 xl:py-4   flex flex-col items-center  bg-white sticky left-0  top-14 ">
      <button
        onClick={() => handleIconClick("home")}
        className={
          "flex flex-col gap-1 justify-center items-center hover:bg-gray-100 w-full px-1 py-2 rounded-xl"
        }
      >
        {activeIcon === "home" ? (
          <GoHomeFill className=" w-[4vw]  h-[4vw] md:w-[3vw] lg:w-[2vw] lg:h-[2vw] xl:w-[20px] xl:h-[20px]" />
        ) : (
          <GoHome className="w-[4vw] h-[4vw] md:w-[3vw] lg:w-[2vw] lg:h-[2vw] xl:w-[30px] xl:h-[20px]" />
        )}

        <p className="text-[6px] lg:text-xs xl:text-[10px]">Home</p>
      </button>

      <div className="flex flex-col items-center gap-2">
        <button onClick={() => handleIconClick("shorts")}>
          {activeIcon === "shorts" ? (
            <div className="relative w-[4vw]  h-[4vw] md:w-[3vw] md:h-[3vw] lg:h-[2vw] lg:w-[2vw] xl:w-[30px] xl:h-[20px]">
              <Image src={"/shortsblack.png"} alt={""} fill />
            </div>
          ) : (
            <div className="relative w-[4vw]  h-[4vw] md:w-[3vw] md:h-[3vw] lg:h-[2vw] lg:w-[2vw] xl:w-[22px] xl:h-[20px]">
              <Image src={"/shorts.png"} alt={""} fill />
            </div>
          )}
        </button>

        <p className="text-[6px] lg:text-xs xl:text-[10px]">Shorts</p>
      </div>

      <button
        onClick={() => handleIconClick("Subscriptions")}
        className="flex  flex-col gap-1 xl:gap-2 justify-center items-center hover:bg-gray-100 w-full px-1 py-3 xl:py-2 rounded-xl"
      >
        {activeIcon === "Subscriptions" ? (
          <MdSubscriptions
            className={
              "w-[4vw] h-[4vw] md:w-[3vw] md:h-[3vw] lg:h-[2vw] lg:w-[2vw] xl:w-[30px] xl:h-[20px]"
            }
          />
        ) : (
          <MdOutlineSubscriptions
            className={
              "w-[4vw] h-[4vw] md:w-[3vw] md:h-[3vw] lg:h-[2vw] lg:w-[2vw] xl:w-[22px] xl:h-[20px]"
            }
          />
        )}

        <p className="text-[5px] font-thin lg:text-xs xl:text-[10px]">
          Subscriptions
        </p>
      </button>

      <button
        onClick={() => handleIconClick("library")}
        className="flex flex-col gap-1  justify-center items-center hover:bg-gray-100 w-full px-1 py-3 xl:py-2 rounded-xl"
      >
        {activeIcon === "library" ? (
          <MdVideoLibrary className="w-[4vw] h-[4vw] md:w-[3vw] md:h-[3vw] lg:h-[2vw] lg:w-[2vw] xl:w-[25px] xl:h-[30px]" />
        ) : (
          <MdOutlineVideoLibrary className="w-[4vw] h-[4vw] md:w-[3vw] md:h-[3vw] lg:h-[2vw] lg:w-[2vw] xl:w-[25px] xl:h-[30px]" />
        )}

        <p className="text-[6px] lg:text-xs xl:text-[10px]">Library</p>
      </button>
    </div>
  );
};

export default Sidebar;
