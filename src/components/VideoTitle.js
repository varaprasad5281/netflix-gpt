import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { MdOutlineInfo } from "react-icons/md";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className=" text-lg py-6 w-1/4">{overview}</p>
      <div className="flex gap-4">
        <button className="bg-white flex gap-1 items-center justify-center text-black text-lg p-4 w-36 rounded-md font-bold hover:opacity-80">
          <BsFillPlayFill /> Play
        </button>
        <button className="gap-1 flex items-center justify-center bg-gray-500 text-white opacity-100 p-4 w-36 text-lg rounded-md hover:opacity-80">
          <MdOutlineInfo /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
