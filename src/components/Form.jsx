import React from "react";
import { useState } from "react";
import icon from "../assets/icon.png";

const Form = ({ setIsClicked }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [option, setOption] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClicked((prev) => !prev);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex justify-center md:w-[50%]"
    >
      <div>
        <div>
          <h1 className="font-[700] mt-10 text-[30px] text-black">
            Welcome to <br />
            Systempackage
          </h1>
          <div
            data-aos="slide-left"
            className=" flex p-1 mt-10 bg-gray-200 w-[344px] rounded-md "
          >
            <input
              className="w-[50%] px-5 border-none bg-transparent focus:outline-none font-[500]"
              type={"text"}
              placeholder="Username"
              required
              name="username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <select
              className="select-style"
              name="field"
              value={option}
              onChange={(e) => setOption(e.target.value)}
            >
              <option value={"@heads.design"}>@heads.design</option>
              <option value={"@heads.design"}>@heads.design</option>
              <option value={"@heads.demo"}>@heads.demo</option>
            </select>
          </div>
          <div
            data-aos="slide-right"
            className=" relative p-5 mt-10 bg-gray-200 w-[344px] rounded-md "
          >
            <input
              className="border-none bg-transparent focus:outline-none font-[500]"
              type={visible ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name="password"
              required
            />

            <img
              onClick={() => setVisible(!visible)}
              className="absolute top-6 right-5 w-5 h-4 hover:w-6 hover:h-5 cursor-pointer"
              src={icon}
              alt="passicon"
            />
          </div>
          <button
            data-aos="slide-up"
            className="bg-blue-600 w-[344px] font-[700] rounded-lg flex
         justify-center items-center text-sm text-white p-5 mt-10 cursor-pointer
         hover:bg-transparent hover:ring-1 hover:text-blue-500"
          >
            Next
          </button>
          <h2 className="text-center mt-5 font-bold text-blue-500">
            Forgot your password?
          </h2>
        </div>
      </div>
    </form>
  );
};

export default Form;
