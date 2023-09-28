"use client";

import React, { useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { tagData } from "../../../data";

const Smnavbar = () => {
  const [seletcetdTag, setSelectedTag] = useState(null);
  const handleColor = (tag :any) => {
    setSelectedTag(tag);
  };
  return (
    <div className=" flex items-center justify-between gap-2 md:gap-4 lg:gap-8 py-2  min-w-[50vw] h-[12vw] ml-3 px-2 lg:ml-8 2xl:ml-14  md:h-[3vw] lg:h-[5vw] md:mr-5 lg:mr-0 md:min-w-[90vw]  ">
      <div id="scroll-container" className="flex  gap-2 overflow-x-scroll   ">
        {tagData.map((data) => (
          <button
            onClick={() => handleColor(data.id)}
            key={data.id}
            className={`${
              seletcetdTag === data.id ? "bg-black text-white" : "bg-gray-200"
            } py-1 px-2 2xl:p-4  lg:px-4 lg:py-2  text-[6px] lg:text-[13px] 2xl:text-[20px]   w-fit whitespace-nowrap rounded-md "`}
          >
            {data.tag}
          </button>
        ))}
      </div>
      <div>
        <BsChevronRight className="lg:mr-10 xl:mr-12 xl:text-xl" />
      </div>
    </div>
  );
};

export default Smnavbar;
