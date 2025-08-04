import React from "react";
import Navbar from "../Components/Navbar";
import Button from "../Components/Button";
import NewPassword from "./NewPassword";
import { Link } from "react-router-dom";

const Forgot = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full flex h-155">
        <div
          style={{ backgroundColor: "#F7F9FA" }}
          className="h-155 w-[40%] flex justify-center items-center">
          <img
            src="/assets/images/2.png"
            alt="Zoom Icon"
            style={{ height: "60%" }}
          />
        </div>

        <div className="h-155 w-[60%] flex">
          <div className="w-[60%] m-auto rounded flex flex-col items-center justify-center shadow-xl bg-white h-140 p-6">
            <p className="text-4xl font-semibold">Forgot Password</p>

            <div className="w-90 mt-4 space-y-4">
              <label className="block text-black  text-xl text-center">
                Email or Mobile Number
                <input
                  className="p-3 border w-full mt-4 rounded-xl text-center"
                  type="text"
                  placeholder="eg. 8208815791"
                />
              </label>
              <p className="text-xl text-center mt-4">
                Enter your verification code
              </p>
              <div className="flex gap-3 m-auto mt-2 w-75">
                {[...Array(6)].map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    className="w-10 h-13 border rounded-xl text-center"
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                  />
                ))}
              </div>
            </div>

            <p className="mt-2 text-sm text-gray-500">
              Didn’t get the code?{" "}
              <span className="text-blue-600 cursor-pointer">Resend Code</span>
            </p>

            <Link to="/NewPassword">
              <Button className="w-80! mt-5" text="varify" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
