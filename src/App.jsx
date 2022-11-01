import { useState } from "react";
import btn from "./assets/btn.png";
import avatar from "./assets/avatar.png";
import slack from "./assets/slack.png";
import github from "./assets/Icon.png";
import "./App.css";

function App() {
  return (
    <div>
      <div className=" m-2 lg:m-0 max-w-[1240px] lg:mx-auto   lg:mt-0 ">
        <a href="/">
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
            Python Books
          </a>
          <a className="bg-[#EAECF0]  py-5  w-full font-semibold text-center">
            Background Check for Coders
          </a>
          <a className="bg-[#EAECF0]  py-5  w-full font-semibold text-center">
            Design
          </a>
        </div>
        <div className="flex w-full justify-center mb-10">
          <img src={slack} alt="" className="w-5 object-contain mr-3" />
          <img src={github} alt="w-2 object-contain" />
        </div>
      </div>
      <footer className="bg-red-400 w-full py-32 ">
        <div className="h-[1px] mx-auto bg-[#EAECF0] w-[80%] "></div>
        <img src="" alt="" />
      </footer>
    </div>
  );
}

export default App;
