import React from "react";
import Navbar from "../Components/Navbar";
import Button from "../Components/Button";
import SignIn from "./SignIn";
import { Link } from "react-router-dom";



const NewPassword = () => {
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
            <p className="text-4xl font-semibold"> Create new Password</p>

            <div className="w-90 mt-4 space-y-4">
              <label className="block text-black">
                Create New Password
                <input
                  className="p-3 border w-full mt-1 rounded-xl text-center"
                  type="password"
                />
              </label>

              <label className="block text-black">
                Confirm Password
                <input
                  className="p-3 border w-full mt-1 rounded-xl text-center"
                  type="password"
                />
              </label>
            </div>
            <Link to="/SignIn">
              <Button className="w-90! mt-6" text="Submit" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
