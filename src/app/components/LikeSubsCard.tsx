"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PiShareFat } from "react-icons/pi";
import { BiLike, BiDislike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { videoData } from "../../../data";
import Morepopup from "./Morepopup";
import Sharepopup from "./Sharepopup";

function LikeSubsCard() {
  const [disliked, setdisliked] = useState(false);
  const [liked, setliked] = useState(false);
  const [more, setMore] = useState(false);
  const [share, setShare] = useState(false);
  const handleLikes = () => {
    setdisliked(false); // Set disliked to false
    setliked(!liked); // Set liked to true
  };
  const handleDislikes = () => {
    setliked(false); // Set liked to true
    setdisliked(!disliked); // Set disliked to false
  };
  const handleMoreToggle = () => {
    setMore(!more);
  };
  const handleShareToggle = () => {
    setShare(!share);
  };

  return (
    <>
      {videoData.map((data) => (
        <div
          className="flex items-center justify-between  md:h-[5vw] "
          key={data.id}
        >
          <div className="flex md:gap-12 lg:gap-6 items-center  ">
            {/* img */}
            <div className="flex gap-1 md:gap-5   lg:w-[18vw] xl:w-[15vw] ">
              <div className="w-[40px] h-[30px] md:w-[50px] md:h-[50px] lg:w-[40px] lg:h-[40px] 2xl:h-[60px] 2xl:w-[60px] relative ">
                <Image
                  src="/papua1.jpg"
                  fill
                  alt={""}
                  className="object-cover rounded-full"
                />
              </div>
              <div className=" md:w-[14vw] md:h-[6vw]  lg:h-[4vw] lg:w-fit  ">
                <h2 className="line-clamp-2 text-[12px] md:text-sm 2xl:text-lg md:mb-2">
                  {data.name}
                </h2>
                <p className="text-[8px] md:text-xs 2xl:text-sm ">
                  {data.subscribers} Subscribers
                </p>
              </div>
            </div>
            <div className="mr-3 md:mr-7">
              <button className="bg-black text-white px-2 py-2 md:py-2 md:px-4 rounded-full text-[8px] md:text-base lg:text-sm  2xl:text-xl 2xl:w-[6vw] 2xl:h-[3vw]">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex gap-1 md:gap-3  ">
            {/* likespart */}
            <div className="flex   lg:w-[8vw] border-black  justify-center rounded-full">
              {liked ? (
                <button
                  className="flex items-center gap-1 bg-slate-100 hover:bg-slate-200 w-[30px]  md:w-[8vw] 2xl:w-[5vw] px-1 md:px-2 rounded-s-full"
                  onClick={handleLikes}
                >
                  <BiSolidLike className="text-[10px]  md:text-lg  lg:text-xl 2xl:text-4xl" />

                  <p className="text-[8px] md:text-sm">{data.likes + 1}</p>
                </button>
              ) : (
                <button
                  className="flex items-center gap-1 bg-slate-100 hover:bg-slate-200 w-[30px]  md:w-[8vw] 2xl:w-[5vw] px-1  md:px-2 rounded-s-full"
                  onClick={handleLikes}
                >
                  <BiLike className="text-[10px] md:text-lg lg:text-xl 2xl:text-4xl" />

                  <p className="text-[8px]  md:text-sm">{data.likes}</p>
                </button>
              )}

              {disliked ? (
                <button
                  onClick={handleDislikes}
                  className="flex justify-between items-center bg-slate-100 hover:bg-slate-200 w-[20px]  md:w-[5vw] 2xl:w-[3vw] px-1 md:px-2  rounded-e-full"
                >
                  <BiSolidDislike className="text-[10px] md:text-lg lg:text-xl 2xl:text-4xl" />
                </button>
              ) : (
                <button
                  onClick={handleDislikes}
                  className="bg-slate-100 hover:bg-slate-200 w-[20px] md:w-[5vw] 2xl:w-[3vw] px-1 md:px-2  rounded-e-full"
                >
                  <BiDislike className="text-[10px] md:text-lg lg:text-xl 2xl:text-4xl" />
                </button>
              )}
            </div>
            <div className="bg-slate-100 hover:bg-slate-200 w-[40px] md:w-[80px]  rounded-e-full rounded-full  lg:w-[7vw] 2xl:w-[6vw] 2xl:h-[3vw] lg:h-9 flex justify-center items-center ">
              <button
                className="flex items-center gap-1"
                onClick={handleShareToggle}
              >
                <PiShareFat className="text-[8px]    md:text-2xl  lg:text-xl 2xl:text-4xl" />
                <p className="text-[8px] md:text-sm 2xl:text-base">Share</p>
              </button>
            </div>
            <div className="bg-slate-100 hover:bg-slate-200 rounded-full w-5 h-5  md:w-[40px] md:h-[40px]  2xl:w-[70px] 2xl:h-[70px] flex justify-center items-center">
              <button className="" onClick={handleMoreToggle}>
                <BsThreeDots className="text-[8px] md:text-2xl lg:text-xl 2xl:text-4xl" />
              </button>
            </div>
            {more && <Morepopup />}
            {share && <Sharepopup />}
          </div>
        </div>
      ))}
    </>
  );
}

export default LikeSubsCard;
