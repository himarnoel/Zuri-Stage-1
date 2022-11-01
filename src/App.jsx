import { useState } from "react";
import btn from "./assets/btn.png";
import avatar from "./assets/avatar.png";
import slack from "./assets/slack.png";
import github from "./assets/Icon.png";
import zuri from "./assets/Vector.png";
import I4g from "./assets/I4G.png";
import "./App.css";

function App() {
  return (
    <div>
      <div className=" m-3 lg:m-0 max-w-[1240px] lg:mx-auto   lg:mt-0 ">
        <a href="/">
          <img
            src={btn}
            alt=""
            className="object-contain lg:w-12 w-8 float-right mr-8  mt-5 lg:mr-20 lg:mt-10 "
          />
        </a>

        <div className="lg:w-44 lg:h-44 h-32 w-32 mx-auto lg:pt-20 pt-10 ">
          <img
            src={avatar}
            alt=""
            className="object-contain rounded-full"
            id="profile__img"
          />

          <p className="text-center font-bold lg:text-xl text-lg ">
            Wizdam Kinm
          </p>
        </div>
        <div className="lg:mt-44 mt-24 flex flex-col justify-evenly  h-[600px]">
          <a
            href="https://twitter.com/ImarWeb"
            className="bg-[#EAECF0] py-5  w-full font-semibold text-center"
            id="twitter"
          >
            ImarWeb
          </a>
          <a
            href="https://app.slack.com/client/T042F7V19Q8/C041V6WKAUS/rimeto_profile/U0487R8FC4X"
            className="bg-[#EAECF0] py-5  w-full font-semibold text-center hidden"
            id="slack"
          >
            Emmanuel Olaniy 1
          </a>
          <a
            href="https://training.zuri.team/"
            id="btn__zuri"
            className="bg-[#EAECF0]  py-5  w-full font-semibold text-center"
          >
            Zuri Team
          </a>
          <a
            className="bg-[#EAECF0]  py-5  w-full font-semibold text-center"
            id="books"
            href="http://books.zuri.team/"
          >
            Zuri Books
          </a>
          <a
            id="book__python"
            className="bg-[#EAECF0]  py-5  w-full font-semibold text-center"
            href="https://books.zuri.team/python-for-beginners?ref_id=EmmanuelOlaniy1"
          >
            Python Books
          </a>
          <a
            className="bg-[#EAECF0]  py-5  w-full font-semibold text-center"
            id="pitch"
            href="https://background.zuri.team"
          >
            Background Check for Coders
          </a>
          <a className="bg-[#EAECF0]  py-5  w-full font-semibold text-center" >
            Design
          </a>
        </div>
        <div className="flex w-full justify-center lg:mb-20  mt-5">
          <img src={slack} alt="" className="w-5 object-contain mr-3" />
          <img src={github} alt="w-2 object-contain" />
        </div>
      </div>
      <footer className=" w-full py-10 ">
        <div className="h-[1px] mx-auto bg-[#EAECF0] lg:w-[78%] w-[90%]"></div>
        <div className="grid lg:grid-cols-3  mt-5 lg:justify-items-center gap-4 lg:gap-0 ml-2 ">
          <img src={zuri} alt="" className="object-contain" />
          <p className="text-[#667085]">HNG Internship 9 Frontend Task</p>
          <img src={I4g} alt="" className="object-contain" />
        </div>
      </footer>
    </div>
  );
}

export default App;
