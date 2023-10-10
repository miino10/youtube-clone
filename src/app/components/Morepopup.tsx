import React from "react";
import { LiaDownloadSolid } from "react-icons/lia";
import { BiCut } from "react-icons/bi";
import { CgTranscript } from "react-icons/cg";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { RiFlagLine } from "react-icons/ri";

function Morepopup() {
  return (
    <div className="absolute bg-green-200 w-[14vw] h-[15vw] bottom-12 right-[23rem] rounded-lg flex flex-col gap-4 pt-3 pl-5 z-50 ">
      <button className="flex gap-4 items-center">
        <LiaDownloadSolid className="text-xl" />
        <p className="text-sm">Download</p>
      </button>
      <button className="flex  gap-4 items-center">
        <BiCut className="text-xl" />
        <p className="text-sm">Clip</p>
      </button>
      <button className="flex  gap-4 items-center">
        <MdOutlinePlaylistAdd className="text-xl" />
        <p className="text-sm">Save</p>
      </button>
      <button className="flex  gap-4 items-center">
        <RiFlagLine className="text-xl" />
        <p className="text-sm">Report</p>
      </button>
      <button className="flex  gap-4 items-center">
        <CgTranscript className="text-xl" />
        <p className="text-sm">Show trascript</p>
      </button>
    </div>
  );
}

export default Morepopup;
