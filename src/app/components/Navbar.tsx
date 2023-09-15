import Image from "next/image";
import React from "react";
import { VscMenu } from "react-icons/vsc";
import { MdKeyboardVoice } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { BsBell } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="flex items-center gap-3 mx-7  ">
      {/* youtube-logo and burtger icon */}
      <div className="flex flex-1  items-center gap-5  ">
        <div>
          <VscMenu className="text-xl " />
        </div>
        <div className="relative w-16 h-12 md:w-24 md:h-14">
          <Image src={"/youtube.png"} alt={""} fill />
        </div>
      </div>
      {/* searchingbar */}
      <div className="flex justify-center items-center  flex-[1_1_40%]  py-2 gap-3 ">
        <div
          className=" flex items-center
      "
        >
          <input
            type="text"
            className=" text-sm font-medium w-[70vh] h-[30px] md:w-[90vh] md:h-[40px] px-3    shadow appearance-none border border-gray-300 rounded-s-3xl    text-gray-700  leading-tight focus:w-[100vh] focus:shadow-outline"
            placeholder="Search"
          />

          <button className="flex justify-center items-center w-[65px] h-[40px] bg-gray-50 hover:bg-gray-200   border-gray-300 border  rounded-e-3xl">
            {" "}
            <GoSearch className=" text-xl" />
          </button>
        </div>
        <div>
          <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-300">
            {" "}
            <MdKeyboardVoice className="text-2xl" />
          </button>
        </div>
      </div>
      {/* profile-part */}
      <div className=" flex items-center justify-end gap-6 flex-1  w-[20px] pr-2 ">
        <div></div>
        <div className=" relative ">
          <div className=" hover:bg-gray-200 p-2 w-[40px] rounded-full    ">
            <BsBell className="text-xl" />
            <div className="  flex ">
              <button className="text-xs absolute top-0 left-4   bg-red-600 text-white rounded-full w-[25px]">
                9+
              </button>
            </div>
          </div>
        </div>
        <div className="w-[35px] h-[35px] relative ">
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
