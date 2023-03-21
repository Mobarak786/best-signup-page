import React from "react";
import logo from "../assets/Subtract.png";

const Success = () => {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <div className="flex flex-col items-center">
        <img className="w-10 h-10 " src={logo} alt="logo" />
        <h1 className="font-bold text-blue-500 mt-5">Success</h1>
      </div>
    </div>
  );
};

export default Success;
