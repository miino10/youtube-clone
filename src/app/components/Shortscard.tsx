"use client";
import Image from "next/image";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { BsChevronDown } from "react-icons/bs";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { shortsData } from "../../../data";
import Link from "next/link";

export const Shortscard = () => {
  const [toggle, setToggle] = useState(false);
  const [shortsHidden, setShortsHidden] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const hiddenshorts = () => {
    setShortsHidden(!shortsHidden);
  };
  return (
    <>
      {toggle ? (
        <div className="flex gap-4  w-fit ml-6 p-4 ">
          <p className="text-xs lg:text-lg">Shelf will be hidden for 30 Days</p>
          <button
            className="text-blue-400 text-xs  lg:text-base"
            onClick={handleToggle}
          >
            undo
          </button>
        </div>
      ) : (
        <div className="w-full h-fit flex flex-col lg:gap-4 xl:gap-6">
          <div className="flex justify-between items-center    lg:mx-6">
            <div className="flex gap-2 items-center ">
              <div className="w-[5vw] md:w-[3vw] h-[8vw] md:h-[5vw] xl:w-[2vw] xl:h-[2vw] relative ">
                <Image
                  src={"/shortsyoutube.png"}
                  alt={"shortsyoutube"}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-sm">Shorts</div>
            </div>
            <div>
              <button onClick={handleToggle}>
                <RxCross1 className="text-xl" />
              </button>
            </div>
          </div>
          {shortsHidden ? (
            <div className="grid grid-cols-2 gap-4 lg:gap-0 my-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  lg:w-[90] xl:w-[90vw]  lg:ml-7  ">
              {shortsData.slice(0, 5).map((data) => (
                <div
                  className=" w-[40vw] md:w-[20vw] lg:w-[20vw] xl:w-[17vw] mb-5"
                  key={data.id}
                >
                  <Link href={"/"}>
                    <div className="w-[40vw] md:w-[28vw] lg:w-[20vw] xl:w-[17vw] h-[70vw] md:h-[50vw] lg:h-[40vw] xl:h-[30vw] relative">
                      <Image
                        src={data.profile}
                        alt={""}
                        fill
                        className="object-cover rounded-md lg:rounded-xl"
                      />
                    </div>
                  </Link>
                  <div className="flex justify-between pt-2">
                    <Link href={"/"}>
                      <div className="flex flex-col gap-1">
                        <p className="line-clamp-2 text-base 2xl:text-2xl">
                          {data.title}
                        </p>
                        <p className="line-clamp-1  text-xs 2xl:text-lg">
                          {data.views} views
                        </p>
                      </div>
                    </Link>
                    <div className="flex flex-col items-center">
                      <button>
                        <PiDotsThreeVerticalBold className="text-4xl" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 lg:gap-0 my-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  lg:w-[90] xl:w-[90vw]  lg:ml-7  ">
              {shortsData.map((data) => (
                <div
                  className=" w-[40vw] md:w-[20vw] lg:w-[20vw] xl:w-[17vw] mb-5"
                  key={data.id}
                >
                  <Link href={"/"}>
                    <div className="w-[40vw] md:w-[28vw] lg:w-[20vw] xl:w-[17vw] h-[70vw] md:h-[50vw] lg:h-[40vw] xl:h-[30vw] relative">
                      <Image
                        src={data.profile}
                        alt={""}
                        fill
                        className="object-cover rounded-md lg:rounded-xl"
                      />
                    </div>
                  </Link>
                  <div className="flex justify-between pt-2">
                    <Link href={"/"}>
                      <div className="flex flex-col gap-1">
                        <p className="line-clamp-2 text-base 2xl:text-2xl">
                          {data.title}
                        </p>
                        <p className="line-clamp-1  text-xs 2xl:text-lg">
                          {data.views} views
                        </p>
                      </div>
                    </Link>
                    <div className="flex flex-col items-center">
                      <button>
                        <PiDotsThreeVerticalBold className="2xl:text-4xl" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="">
            <button
              className="bg-gray-300 w-full flex justify-center py-2"
              onClick={hiddenshorts}
            >
              <BsChevronDown />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
