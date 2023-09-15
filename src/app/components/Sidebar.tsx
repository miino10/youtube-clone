"use client";

import Image from "next/image";
import React, { useState } from "react";
import { GoHome, GoHomeFill } from "react-icons/go";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary, MdVideoLibrary } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
const Sidebar = () => {
 const [activeIcon, setActiveIcon] = useState(null);
 const handleIconClick = (iconName:any) => {
   if (activeIcon === iconName) {
     // If the same icon is clicked again, deactivate it
     setActiveIcon(null);
   } else {
     // Activate the clicked icon and deactivate the previously active icon
     setActiveIcon(iconName);
   }
 };

  return (
    <div className="w-[13vh]  flex flex-col items-center  mx-1 gap-1 ">
      <button
        onClick={() => handleIconClick("home")}
        className={
          "flex flex-col gap-1 justify-center items-center hover:bg-gray-100 w-full px-1 py-5 rounded-xl"
        }
      >
        {activeIcon === "home" ? (
          <GoHomeFill className="text-xl" />
        ) : (
          <GoHome className="text-xl" />
        )}

        <p className="text-xs">Home</p>
      </button>

      <div className="flex flex-col items-center gap-2">
        <button onClick={() => handleIconClick("shorts")}>
          {activeIcon === "shorts" ? (
            <div className="relative w-11 h-6">
              <Image src={"/shortsblack.png"} alt={""} fill />
            </div>
          ) : (
            <div className="relative w-6 h-6">
              <Image src={"/shorts.png"} alt={""} fill />
            </div>
          )}
        </button>

        <p className="text-xs">Shorts</p>
      </div>

      <button
        onClick={() => handleIconClick("Subscriptions")}
        className="flex flex-col gap-1 justify-center items-center hover:bg-gray-100 w-full px-1 py-5 rounded-xl"
      >
        {activeIcon === "Subscriptions" ? (
          <MdSubscriptions className={"text-xl"} />
        ) : (
          <MdOutlineSubscriptions className={"text-xl"} />
        )}

        <p className="text-xs">Subscriptions</p>
      </button>

      <button
        onClick={() => handleIconClick("library")}
        className="flex flex-col gap-1 justify-center items-center hover:bg-gray-100 w-full px-1 py-5 rounded-xl"
      >
        {activeIcon === "library" ? (
          <MdVideoLibrary className="text-xl" />
        ) : (
          <MdOutlineVideoLibrary className="text-xl" />
        )}

        <p className="text-xs">Library</p>
      </button>
    </div>
  );
};

export default Sidebar;
