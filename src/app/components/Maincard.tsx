import Image from "next/image";
import React from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { mainCardsData } from "../../../data";
const card = () => {
  return (
    //  <div className="min-w-[30vw] h-screen  grid xl:grid-cols-3  bg-red-300      ">

    <>
      <div className="grid md:grid-cols-2    xl:grid-cols-3 xl:h-fit xl:min-w-[12vw] gap-6 md:gap-3      min-w-[30vw] md:min-w-[40vw]   xl:ml-12 xl:mr-8 ">
        {mainCardsData.map((data) => (
          <div
            className=" min-w-[10vw] md:min-w-[10vw] md:h-[48vw] xl:h-[25vw]  flex flex-col mt-4  items-center cursor-pointer "
            key={data.id}
          >
            {/* card1 */}
            {/* img */}
            <div className="  relative  min-w-[90vw] md:min-w-[10vw] xl:min-w-[10vw]">
              <div className="min-w-[80vw]  min-h-[65vw]  md:min-w-[44vw] md:min-h-[30vw] xl:min-w-[29vw] xl:min-h-[18vw] relative">
                <Image
                  src={data.videoImg}
                  alt={""}
                  fill
                  className="object-cover rounded-xl hover:rounded-none"
                />
              </div>
              <p className="absolute right-1 bottom-1 text-white bg-black p-1 text-xs rounded-md  ">
                {data.videoTime}
              </p>
            </div>
            {/* textsec */}
            <div className=" flex w-full mt-1    pt-3  ">
              <div className="relative mr-2 xl:w-[50px] xl:h-[40px]">
                <Image
                  src={data.channellogo}
                  alt={""}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className=" w-full   flex flex-col    ">
                <p className="  h-fit md:h-[3em]  line-clamp-2 text-base font-medium ">
                  {data.title}
                </p>
                <div className="flex gap-1 items-center pt-2">
                  <p className=" text-sm text-gray-600">{data.channelName}</p>
                  {data.isVerified === true && (
                    <RiVerifiedBadgeFill className="text-sm" />
                  )}
                </div>
                <div className="flex text-center     ">
                  <p className="text-sm text-gray-600">{data.views} </p>

                  <p className="text-sm text-gray-600 flex items-center justify-center ">
                    <span>.</span>
                    {data.date}
                  </p>
                </div>
              </div>
              {/* ICon */}
              <div className=" ">
                <button>
                  <PiDotsThreeVerticalBold className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default card;
