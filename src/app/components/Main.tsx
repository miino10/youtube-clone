import React from "react";
import Sidebar from "./Sidebar";
import Smnavbar from "./Smnavbar";
import Maincards from "./Maincards";
import { Shorts } from "./Shorts";

const Main = () => {
  return (
    <div className="h-full w-full flex gap-5">
      <div className="min-w-[1vw]    ">
        <Sidebar />
      </div>
      <div className="flex flex-col gap-3 min-w-[30vw]   ">
        <div className="">
          <Smnavbar />
        </div>
        <div className=" flex-1  ">
          <Maincards />
        </div>
        <div className="">
          <Shorts />
        </div>
      </div>
    </div>
  );
};

export default Main;
