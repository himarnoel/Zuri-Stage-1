import React from "react";
import I4g from "../assets/I4G.png";
import zuri from "../assets/Vector.png";
const Bottom = () => {
  return (
    <footer className=" w-full py-6 ">
      <div className="h-[1px] mx-auto bg-[#EAECF0] lg:w-[78%] w-[90%]"></div>
      <div className="grid lg:grid-cols-3  mt-5 lg:justify-items-center gap-4 lg:gap-0 ml-2 ">
        <img src={zuri} alt="" className="object-contain" />
        <p className="text-[#667085]">HNG Internship 9 Frontend Task</p>
        <img src={I4g} alt="" className="object-contain" />
      </div>
    </footer>
  );
};

export default Bottom;
