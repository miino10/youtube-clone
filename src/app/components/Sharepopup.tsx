"use client"
import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";

function Sharepopup() {
    const[close,setClose]=useState(false)
    const handleClose=()=>{
        setClose(true)
    }
  return (
    <div className="bg-green-200 w-[40vw] h-[25vw] bottom-[8rem] left-[25rem] absolute px-7 py-4 rounded-lg z-50 ">
      <div className="flex justify-between">
        <p>Share</p>
        <button onClick={handleClose}>
          <TfiClose className="text-xl" />
        </button>
      </div>
      <div
        className="overflow-x-scroll flex  gap-2  w-[34vw] "
        id="scroll-container"
      >
        <div className="flex  gap-4   h-[10vw] ">
          <div className="flex  flex-col items-center gap-2">
            {" "}
            <button className="bg-red-200 w-[4.5vw] h-[4.5vw] rounded-full"></button>
            <p className="text-xs">Embed</p>
          </div>
          <div className="flex  flex-col items-center gap-2">
            {" "}
            <button className="bg-red-200 w-[4.5vw] h-[4.5vw] rounded-full"></button>
            <p className="text-xs">WhatsApp</p>
          </div>
          <div className="flex  flex-col items-center gap-2">
            <button className="bg-blue-500 w-[4.5vw] h-[4.5vw] rounded-full"></button>
            <p className="text-xs">Facebook</p>
          </div>
          <div className="flex  flex-col items-center gap-2">
            {" "}
            <button className="bg-yellow-800 w-[4.5vw] h-[4.5vw] rounded-full"></button>
            <p className="text-xs">Email</p>
          </div>
          <div className="flex  flex-col items-center gap-2">
            <button className="bg-red-700 w-[4.5vw] h-[4.5vw] rounded-full"></button>
            <p className="text-xs">Biktos</p>
          </div>
          <div className="flex  flex-col items-center gap-2">
            {" "}
            <button className="bg-lime-400 w-[4.5vw] h-[4.5vw] rounded-full"></button>
            <p className="text-xs">Jimmy</p>
          </div>
          <div className="flex  flex-col items-center gap-2">
            {" "}
            <button className="bg-green-500 w-[4.5vw] h-[4.5vw] rounded-full"></button>
            <p className="text-xs">Twitter</p>
          </div>
          <div className="flex  flex-col items-center gap-2">
            {" "}
            <button className="bg-emerald-700 w-[4.5vw] h-[4.5vw] rounded-full"></button>
            <p className="text-xs">Vk</p>
          </div>
          <div className="flex  flex-col items-center gap-2">
            {" "}
            <button className="bg-sky-300 w-[4.5vw] h-[4.5vw] rounded-full"></button>
            <p className="text-xs">Snapchat</p>
          </div>
          <div className="flex  flex-col items-center gap-2">
            {" "}
            <button className="bg-sky-600 w-[4.5vw] h-[4.5vw] rounded-full"></button>
            <p className="text-xs">Pinterest</p>
          </div>
          <div className="flex  flex-col items-center gap-2">
            <button className="bg-purple-600 w-[5vw] h-[4.5vw] rounded-full"></button>
            <p className="text-xs">Goo</p>
          </div>
          <div className="flex  flex-col items-center gap-2">
            <button className="bg-indigo-700 w-[4.5vw] h-[4.5vw] rounded-full"></button>
            <p className="text-xs">Google</p>
          </div>
          <div>
            {" "}
            <button className="bg-pink-600 w-[4.5vw] h-[4.5vw] rounded-full"></button>
            <p className="text-xs">Instagram</p>
          </div>
          <div className="flex  flex-col items-center gap-2">
            {" "}
            <button className="bg-fuchsia-800 w-[4.5vw] h-[4.5vw] rounded-full"></button>
            <p className="text-xs">Yahoo</p>
          </div>
          <div className="flex  flex-col items-center gap-2">
            {" "}
            <button className="bg-rose-800 w-[4.5vw] h-[4.5vw] rounded-full"></button>
            <p className="text-xs">taypee</p>
          </div>
          <div className="flex  flex-col items-center gap-2">
            {" "}
            <button className="bg-lime-500 w-[4.5vw] h-[4.5vw] rounded-full"></button>
            <p className="text-xs">Baidu</p>
          </div>
          <div className="flex  flex-col items-center gap-2">
            {" "}
            <button className="bg-yellow-300 w-[4.5vw] h-[4.5vw] rounded-full"></button>
            <p className="text-xs">Uber</p>
          </div>
          <div className="flex  flex-col items-center gap-2">
            {" "}
            <button className="bg-gray-500 w-[4.5vw] h-[4.5vw] rounded-full"></button>
            <p className="text-xs">Haboon</p>
          </div>
          <div className="flex  flex-col items-center gap-2">
            {" "}
            <button className="bg-amber-700 w-[4.5vw] h-[4.5vw] rounded-full"></button>
            <p className="text-xs">Ikhwa</p>
          </div>
          <div className="flex  flex-col items-center gap-2">
            {" "}
            <button className="bg-lime-500 w-[4.5vw] h-[4.5vw] rounded-full"></button>
            <p className="text-xs">Bisto</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-8  h-[10vw]">
        <div>
          <div className="border border-gray-400 flex justify-between p-2 rounded-lg items-center">
            <input
              type="text"
              value=" https://youtu.be/7Llb h9ix3V0?si=Jyqu7U2wvBPFIYx2"
              readOnly
              className="focuse:border-2 focus:border-black text-xs w-[28vw] h-[1.5vw] rounded-sm flex items-center text-ellipsis"
            ></input>
            <button className="bg-blue-600 rounded-2xl py-2 px-3 text-sm text-white">
              Copy
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center">
            <input
              type="checkbox"
              className="w-[1.5vw] h-[1.5vw] border-black border-4"
            />
          </button>

          <p className="text-xs">
            Start at <span className="text-xs text-gray-500">0:20</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sharepopup;
