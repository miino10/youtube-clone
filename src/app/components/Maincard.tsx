import Image from "next/image";
import React from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { mainCardsData } from "../../../data";
const card = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 xl:gap-3       xl:grid-cols-3 xl:h-fit xl:min-w-[12vw] gap-6 md:gap-3       min-w-[30vw] md:min-w-[40vw]     xl:ml-8 xl:mr-8 ">
        {mainCardsData.map((data) => (
          <div
            className=" mx-3  lg:mx-8 xl:mx-0      min-w-[10vw] md:min-w-[10vw] md:h-[48vw] lg:min-w-[40vw]  lg:h-[43vw] xl:min-w-[18vw]  xl:h-[26vw]  flex flex-col mt-4  lg:mb-4 xl:mb-0  items-center cursor-pointer "
            key={data.id}
          >
            {/* card1 */}
            {/* img */}
            <div className="  relative  min-w-[82vw] md:min-w-[10vw] xl:min-w-[10vw]">
              <div className="min-w-[40vw]  min-h-[65vw]  md:min-w-[44vw] md:min-h-[30vw] lg:min-w-[40vw] xl:min-w-[28vw] xl:min-h-[16vw] relative">
                <Image
                  src={data.videoImg}
                  alt={""}
                  fill
                  className="object-cover rounded-xl hover:rounded-none"
                />
              </div>
              <p className="absolute right-1 bottom-1 text-white bg-black p-1 text-xs rounded-md 2xl:w-fit 2xl:text-3xl   2xl:h-[45px]  ">
                {data.videoTime}
              </p>
            </div>
            {/* textsec */}
            <div className=" flex  w-full mt-1    pt-3   2xl:w-[28vw] ">
              <div className="relative mr-2 min-w-[30px] h-[30px] xl:w-[40px] xl:h-[35px] 2xl:h-[80px] 2xl:w-[80px]">
                <Image
                  src={data.channellogo}
                  alt={""}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className=" w-full   flex flex-col    ">
                <p className="  h-fit   line-clamp-2 text-base font-medium 2xl:text-3xl ">
                  {data.title}
                </p>
                <div className="flex gap-1 items-center pt-2">
                  <p className=" text-sm text-gray-600 2xl:text-3xl">
                    {data.channelName}
                  </p>
                  {data.isVerified === true && (
                    <RiVerifiedBadgeFill className="text-sm" />
                  )}
                </div>
                <div className="flex text-center     ">
                  <p className="text-sm text-gray-600 2xl:text-xl">
                    {data.views}{" "}
                  </p>

                  <p className="text-sm text-gray-600 flex items-center justify-center 2xl:text-xl">
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
