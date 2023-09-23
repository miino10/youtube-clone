import React from "react";
import Sidebar from "./Sidebar";
import Smnavbar from "./Smnavbar";
import Maincards from "./Maincards";

const Main = () => {
  return (
    <div className="h-full w-full flex">
      <div className="min-w-[1vw]    ">
        <Sidebar />
      </div>
      <div className="flex flex-col gap-5 min-w-[30vw]  ">
        <div className=" ">
          <Smnavbar />
        </div>
        <div className=" flex-1 ">
          <Maincards />
        </div>
      </div>
    </div>
  );
};

export default Main;
