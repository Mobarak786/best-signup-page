import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Form from "./components/Form";
import GetOtp from "./components/GetOtp";
import Success from "./components/Success";
import logo from "./assets/Subtract.png";
import Carousal from "./components/Carousal";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({ duration: 1000 });

function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="relative h-[100vh] w-full p-[28px]  bg-white">
              <div className="flex justify-between">
                <img src={logo} alt="logo" width={30} height={30} />
                <div className="w-[222px] md:absolute bottom-0 left-10">
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

                <div
                  data-aos="fade-up"
                  className=" hidden md:block md:w-[50%]  "
                >
                  <Carousal />
                </div>
              </div>
            </div>
          }
        />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
