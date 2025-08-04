import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Button from "../Components/Button";

import { FaKey, FaApple, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Toggle state

  const handleEmailBlur = () => {
    if (!email) {
      setEmailError("Enter your email ID");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordBlur = () => {
    if (!password) {
      setPasswordError("Enter your password");
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEmailBlur();
    handlePasswordBlur();
    if (!email || !password) return;

    if (!isChecked) {
      alert("Agree to the documentation");
    } else {
      alert("Sign-in successful!");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div>
      <Navbar
        Changepage={
          <Link to="/Signup" className="font-semibold text-blue-700">
            Signup for free
          </Link>
        }
      />

      <div className="w-full flex flex-col items-center justify-center p-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 ">
          <img
            src="/assets/images/istockphoto-1308949444-612x612.jpg"
            alt="Signup Illustration"
            className="w-full md:w-2/5 h-auto object-cover rounded-lg"
          />

          <div className="w-full md:w-2/6 p-8 rounded-xl shadow-xl">
            <h1 className="text-4xl font-bold text-center mb-6">Sign In</h1>

            <form className="space-y-3" onSubmit={handleSubmit}>
              <div >
                <input
                  type="email"
                  value={email}
                  required
                  placeholder="Email Address"
                  className={`w-full h-12 text-xl p-2 border rounded-md focus:outline-none ${
                    emailError
                      ? "border-red-500"
                      : email
                      ? "border-gray-400"
                      : "border-gray-300"
                  }`}
                  onBlur={handleEmailBlur}
                  onChange={(e) => {
                    const value = e.target.value;
                    setEmail(value);

                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(value)) {
                      setEmailError("Please enter a valid email address.");
                    } else {
                      setEmailError("");
                    }
                  }}
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-1">{emailError}</p>
                )}
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  placeholder="Password"
                  className={`w-full h-12 text-xl p-2 pr-10 border rounded-md focus:outline-none ${
                    passwordError ? "border-red-500" : "border-gray-300"
                  }`}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={handlePasswordBlur}
                />
                <div
                  className="absolute right-4  top-5 text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
                {passwordError && (
                  <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                )}
              </div>

              {/* Links */}
              <div className="flex justify-between text-blue-700 text-sm">
                <Link to="/Forgot">Forgot Password?</Link>
                <Link to="/Help">Help</Link>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={!email || !password}
                className={`w-full text-white py-2 rounded-md ${
                  !email || !password
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
                text="Sign In"
              />
            </form>

            {/* Terms */}
            <p className="mt-5 text-sm text-gray-400">
              By signing in, I agree to the{" "}
              <span className="text-blue-700">terms of the service</span>
            </p>

            {/* Stay Signed In */}
            <div className="flex items-center mt-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="mr-2"
              />
              <label>Stay signed in</label>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center text-gray-500 mt-6 text-sm">
              <span className="mx-2">⸺⸺ Or Sign in with ⸺⸺</span>
            </div>

            {/* Social Sign-In */}
            <div className="flex items-center justify-evenly mt-4 gap-6">
              <div className="flex flex-col items-center text-sm">
                <FaKey className="text-xl" />
                <p>SSO</p>
              </div>
              <div className="flex flex-col items-center text-sm">
                <FaApple className="text-xl" />
                <p>Apple</p>
              </div>
              <div className="flex flex-col items-center text-sm">
                <FcGoogle className="text-xl" />
                <p>Google</p>
              </div>
              <div className="flex flex-col items-center text-sm">
                <FaFacebook className="text-xl text-blue-700" />
                <p>Facebook</p>
              </div>
            </div>

            {/* reCAPTCHA Notice */}
            <p className="text-xs text-center text-gray-400 mt-4">
              Zoom is protected by reCAPTCHA.{" "}
              <span className="text-blue-700 hover:underline cursor-pointer">
                Privacy Policy
              </span>{" "}
              and{" "}
              <span className="text-blue-700 hover:underline cursor-pointer">
                Terms of Service
              </span>{" "}
              apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
