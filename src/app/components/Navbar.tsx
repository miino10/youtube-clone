import Image from "next/image";
import React from "react";
import { VscMenu } from "react-icons/vsc";
import { MdKeyboardVoice } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { BsBell } from "react-icons/bs";
import { TbVideoPlus } from "react-icons/tb";
const Navbar = () => {
  return (
    <div className="bg-white flex items-center justify-between gap-1 md:gap-2 px-2 md:px-2 lg:px-8 xl:px-7 2xl:h-[5vw] 2xl:px-12  sticky top-0 z-50">
      {/* youtube-logo and burtger icon */}
      <div className=" flex items-center gap-2 md:gap-4 lg:gap-4 xl:gap-5">
        <div>
          <VscMenu className="text-sm md:text-xl lg:text-xl  2xl:text-5xl" />
        </div>
        <div className="relative  w-[20vw] h-10 md:w-[8vw] xl:w-[7vw] 2xl:h-[6vw] md:h-14">
          <Image src={"/youtube.png"} alt={""} fill />
        </div>
      </div>
      {/* searchingbar */}
      <div className=" flex  gap-2 md:gap-1 lg:gap-3   justify-center xl:justify-end xl:gap-5  lg:w-[50vw] xl:w-[55vw] ">
        <div className=" flex items-center  ">
          <input
            type="text"
            className=" text-xs lg:text-base xl:text-sm  2xl:text-4xl font-medium h-[20px] w-full lg:w-[40vw] lg:h-[3vw]  md:w-[50vw] md:h-[40px] 2xl:w-[50vw] 2xl:h-[3vw] px-3    shadow appearance-none border border-gray-300 rounded-s-3xl 2xl:rounded-ss-3xl    text-gray-700  leading-tight md:focus:w-[100vh] focus:shadow-outline"
            placeholder="Search"
          />

          <button className="flex justify-center items-center w-[15px] h-[20px] md:w-[4vw] lg:w-[5vw] lg:h-[3vw] md:h-[40px] bg-gray-50 hover:bg-gray-200   border-gray-300 border  rounded-e-3xl">
            {" "}
            <GoSearch className=" text-xs md:text-xl 2xl:text-4xl" />
          </button>
        </div>
        <div className="hidden md:flex md:justify-center md:items-center">
          <button className="w-4 h-4 md:w-7 md:h-7 lg:w-[3vw] lg:h-[3vw] bg-gray-100  rounded-full hover:bg-gray-300 flex justify-center items-center">
            {" "}
            <MdKeyboardVoice className="text-sm  lg:text-xl 2xl:text-4xl" />
          </button>
        </div>
      </div>
      {/* profile-part */}
      <div className="flex lg:gap-4 2xl:gap-6   lg:w-[15vw] 2xl:w-[14vw] justify-center xl:justify-end ">
        <div className="md:flex md:items-center hidden hover:bg-gray-200  rounded-full lg:w-[3vw] lg:h-[3vw]  p-2 ">
          <TbVideoPlus className="text-xl lg:text-4xl 2xl:text-6xl" />
        </div>

        <div className=" relative hidden md:block ">
          <div className=" hover:bg-gray-200 p-2 w-[40px] rounded-full  lg:w-[3vw] lg:h-[3vw]   ">
            <BsBell className="text-base lg:text-xl 2xl:text-6xl" />
            <div className="  flex ">
              <button className="text-xs 2xl:text-3xl  absolute top-0 xl:top-1 xl:left-5 left-4 2xl:left-8 2xl:bottom-10   bg-red-600 text-white rounded-full w-[25px] md:w-[20px] 2xl:w-[2vw] md:px-1">
                9+
              </button>
            </div>
          </div>
        </div>
        <div className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[3vw] lg:h-[3vw] relative flex items-center ">
          <Image
            src={"/profile.jpg"}
            alt={""}
            fill
            className="rounded-full object-cover border-gray-400 border"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
