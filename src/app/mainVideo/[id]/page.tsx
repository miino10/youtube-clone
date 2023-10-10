import LikeSubsCard from "@/app/components/LikeSubsCard";
import React from "react";
import Image from "next/image";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { mainCardsData } from "../../../../data";

function mainVideo() {
  return (
    <div className=" h-screen md:h-full  md:mx-12 lg:mx-28 w-full md:w-[90%] ">
      <div className=" flex mt-5 gap-5    flex-col lg:flex-row  h-fit ">
        <div className=" w-[50vw] lg:w-[10vw] h-full  flex-1  ">
          <iframe
            src="https://www.youtube.com/embed/u93B9OCRe3g"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl w-[95vw] h-[70vw] md:w-[80vw] lg:w-[52vw] lg:h-[44vw] xl:w-[50vw] xl:h-[30vw] 2xl:w-[60vw] 2xl:h-[40vw] border border-black"
          ></iframe>
          <div>
            <div className="  w-[80vw] md:h-[6vw] md:mb-7 lg:mb-0 lg:w-[45vw] xl:h-[5vw] text-lg font-medium line-clamp-2  2xl:mb-3">
              <h1 className="text-[8px]  md:text-sm xl:text-lg 2xl:text-2xl">
                Let's build Video Blog using NextJs | Tailwindcss | Firebase |
                GSAP Animations - For Beginners
              </h1>
            </div>
            <LikeSubsCard />
          </div>
        </div>
        <div className=" h-fit w-[31vw] flex flex-col gap-4  flex-1 lg:ml-44 ">
          <div>tagpart</div>{" "}
          {mainCardsData.map((data) => (
            <div
              className="flex justify-between w-[90vw] md:w-[90vw] lg:w-[32vw] "
              key={data.id}
            >
              <div className="flex gap-2">
                <div>
                  <div className="w-[50vw] h-[30vw] md:w-[30vw] md:h-[20vw] lg:w-[14vw] lg:h-[9vw] relative">
                    <Image
                      src={data.videoImg}
                      alt={""}
                      fill
                      className="object-cover rounded-lg"
                    />
                    <p className="bg-black text-white w-fit p-1 text-[8px] md:text-xs absolute bottom-0 right-1 rounded-lg">
                      {data.videoTime}
                    </p>
                  </div>
                </div>
                <div className=" md:my-5 lg:my-0 lg:w-[14vw]">
                  <div className="mb-2 md:w-[40vw] lg:w-[15vw]  ">
                    <h3 className="line-clamp-2 text-[10px] md:text-base">
                      {data.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 md:mb-1">
                    <p className="text-[8px] md:text-[14px] lg:text-sm">
                      {data.channelName}
                    </p>
                    {data.isVerified && (
                      <RiVerifiedBadgeFill className="text-xs md:text-sm" />
                    )}
                  </div>
                  <div className="flex gap-1">
                    <p className="text-[8px] md:text-[13px] lg:text-xs text-gray-500">
                      {data.views} views
                    </p>
                    <p className="text-[8px] md:text-[13px] lg:text-xs text-gray-500">
                      {data.date}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <button>
                  <PiDotsThreeVerticalBold className="md:text-xl lg:text-2xl 2xl:text-4xl" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default mainVideo;
