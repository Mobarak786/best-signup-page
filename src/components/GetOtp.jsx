import React, { useEffect, useState } from "react";
import OTPInput from "otp-input-react";
import { useNavigate } from "react-router-dom";

// for example we are taking this value for verifying .
const OTPVALUE = "123456";
const GetOtp = ({ setIsClicked }) => {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(60);
  const [alert, setAlert] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (time === 0) return;
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  // taking another useeffect to validate otp value
  useEffect(() => {
    if (otp === OTPVALUE) {
      navigate("/success");
    }
    if (otp.length === 6 && otp != OTPVALUE) {
      setAlert("Oops! Please give correct otp...");
    }
  }, [otp]);
  return (
    <div className="w-full md:w-[50%] flex flex-col items-center my-auto">
      <h1 className="font-[700] mt-10 text-[30px] text-black">
        Enter the verification <br />
        code to continue
      </h1>
      <p className="text-gray-500 mt-5 font-[500] ">
        We sent to
        <span className="text-blue-500 font-[500] ml-1">
          hellouser@heads.design.
        </span>
        If you <br />
        don’t see it, check your spam.
      </p>
      <div className="mt-10">
        <OTPInput
          autoFocus
          OTPLength={6}
          otpType="number"
          disabled={false}
          value={otp}
          onChange={setOtp}
          inputClassName="border ring-1 
          shadow-md text-xl rounded-md focus:outline-none focus:ring-2 text-semibold"
        />
        <div className="flex justify-between mt-5 w-[290px]">
          <button
            onClick={(prev) => setIsClicked(!prev)}
            className="font-semibold text-sm text-blue-500 cursor-pointer"
          >
            Back
          </button>
          <div>
            <button
              onClick={() => setTime(60)}
              className="font-semibold text-sm text-gray-500"
            >
              Resend:
            </button>

            <span className="font-semibold text-sm ml-1 text-gray-500">
              00:{time}
            </span>
          </div>
        </div>
        <p className="mt-3 font-semibold text-red-400 text-sm text-center">
          {alert}
        </p>
      </div>
    </div>
  );
};

export default GetOtp;
