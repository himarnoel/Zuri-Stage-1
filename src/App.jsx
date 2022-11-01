import { useState } from "react";
import btn from "./assets/btn.png";
import avatar from "./assets/avatar.png";
import "./App.css";

function App() {
  return (
    <div>
      <div className="   max-w-[1240px] lg:mx-auto  bg-green-500 lg:mt-0 ">
        <a href="/">
          {" "}
          <img
            src={btn}
            alt=""
            className="object-contain lg:w-12 w-8 float-right mr-8  mt-5 lg:mr-20 lg:mt-10 "
          />
        </a>

        <div className="lg:w-44 lg:h-44 h-32 w-32 mx-auto lg:pt-20 pt-10 ">
          <img src={avatar} alt="" className="object-contain rounded-full" />

          <p className="text-center font-bold lg:text-xl text-lg ">
            Wizdam Kinm
          </p>
        </div>
        <div className="lg:mt-44 mt-24 flex flex-col justify-evenly  h-[600px]">
          <a className="bg-[#EAECF0] py-5  w-full font-semibold text-center">
            Twitter Link
          </a>
          <a className="bg-[#EAECF0]  py-5  w-full font-semibold text-center">
            Zuri Team
          </a>
          <a className="bg-[#EAECF0]  py-5  w-full font-semibold text-center">
            Zuri Books
          </a>
          <a className="bg-[#EAECF0]  py-5  w-full font-semibold text-center">
            Python Book
          </a>
          <a className="bg-[#EAECF0]  py-5  w-full font-semibold text-center">
            Background Check for Coders
          </a>
          <a className="bg-[#EAECF0]  py-5  w-full font-semibold text-center">
            Design
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
