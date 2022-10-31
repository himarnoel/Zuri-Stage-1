import { useState } from "react";
import btn from "./assets/btn.png";
import "./App.css";

function App() {
  return (
    <div>
      <div className=" bg-green-500 h-screen max-w-[1240px] mx-auto">
        <img
          src={btn}
          alt=""
          className="object-contain lg:w-12 w-8 float-right mr-10 lg:mr-20 mt-10 "
        />
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default App;
