import { useState } from "react";
import btn from "./assets/btn.png";
import avatar from "./assets/avatar.png";
import "./App.css";

function App() {
  return (
    <div>
      <div className="   max-w-[1240px] lg:mx-auto m-2  lg:mt-0 ">
        <img
          src={btn}
          alt=""
          className="object-contain lg:w-12 w-8 float-right mr-8  mt-5 lg:mr-20 lg:mt-10 "
        />
        <div className="lg:w-44 lg:h-44 h-32 w-32 mx-auto lg:pt-20 pt-10 ">
          <img src={avatar} alt="" className="object-contain rounded-full" />
          <p className="text-center font-bold lg:text-xl text-lg ">
            Wizdam Kinm
          </p>
        </div>
        <div className="lg:mt-44 mt-40 flex flex-col justify-evenly  h-[600px]">
          <button className="bg-[#EAECF0] py-5  w-full font-semibold">
            Twitter Link
          </button>
          <button className="bg-[#EAECF0]  py-5  w-full font-semibold">
            Zuri Team
          </button>
          <button className="bg-[#EAECF0]  py-5  w-full font-semibold">
            Zuri Books
          </button>
          <button className="bg-[#EAECF0]  py-5  w-full font-semibold">
            Python Books
          </button>
          <button className="bg-[#EAECF0]  py-5  w-full font-semibold">
            Background Check for Coders
          </button>
          <button className="bg-[#EAECF0]  py-5  w-full font-semibold">
            Design
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
