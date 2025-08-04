import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Button from "../Components/Button";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [EmailError, setEmailError] = useState("");

  const Submit = (e) => {
    e.preventDefault();

    if (!firstName) {
      return alert("Enter the first name");
    }
    if (!lastName) {
      return alert("Enter the last name");
    }
    if (!email) {
      return alert("Enter your email");
    }
    if (!password) {
      return alert("Enter your password");
    }
    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }

    alert("Signup successful!");
  };

  return (
    <div>
      <Navbar />
      <div className="h-155 w-full gap-20 flex justify-center items-center">
        <div className="shadow-2xl p-7 rounded h-[95%] w-95">
          <h1 className="text-4xl font-bold text-center mb-6">Sign up</h1>
          <form className="space-y-4" onSubmit={Submit}>
            <input
              type="text"
              required
              placeholder="First Name"
              className="w-full h-12 text-xl p-2 border rounded-md"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              required
              placeholder="Last Name"
              className="w-full h-12 text-xl p-2 border rounded-md"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="date"
              className="w-full h-12 text-xl p-2 border rounded-md"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full h-12 text-xl p-2 border rounded-md"
              value={email}
              required
              onChange={(e) => {
                const value = e.target.value;
                setEmail(value);
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                  setEmailError("plase enter valid email");
                } else {
                  setEmailError("");
                }
              }}
            />
            {/* {EmailError && (alert({EmailError})} */}

            <input
              type="password"
              placeholder="Password"
              className="w-full h-12 text-xl p-2 border rounded-md"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full h-12 text-xl p-2 border rounded-md"
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <Button type="submit" className="w-full" text="Sign Up" />

            <p className="text-sm text-center">
              Already have an account?{" "}
              <Link to="/SignIn" className="text-blue-700 hover:underline">
                Log in
              </Link>
            </p>
          </form>
        </div>
        <img
          style={{ height: "50%", width: "30%" }}
          src="/assets/images/1.jpg"
          alt="Signup illustration"
        />
      </div>
    </div>
  );
};

export default Signup;
