import Form from "./components/Form";
import GetOtp from "./components/GetOtp";
import logo from "./assets/Subtract.png";
import Carousal from "./components/Carousal";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
Aos.init({ duration: 1000 });

function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="relative h-[100vh] w-full p-[28px]  bg-white">
      <div className="flex justify-between">
        <img src={logo} alt="logo" width={30} height={30} />
        <div className="w-[222px] md:absolute -bottom-[7.5rem] left-10">
          <span className="text-black text-md mr-2 font-[500]">
            Not member?
          </span>
          <span className="text-blue-600  text-md font-[500]">
            Create account
          </span>
        </div>
      </div>
      <div className="flex justify-between">
        {isClicked ? (
          <GetOtp setIsClicked={setIsClicked} />
        ) : (
          <Form setIsClicked={setIsClicked} />
        )}

        <div data-aos="fade-up" className=" hidden md:block md:w-[50%] mb-10 ">
          <Carousal />
        </div>
      </div>
    </div>
  );
}

export default App;
