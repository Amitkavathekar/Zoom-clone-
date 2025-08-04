import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Forgot from "./pages/Forgot";
import Help from "./pages/Help";
import Signup from "./pages/Signup";
import NewPassword from "./pages/NewPassword";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Forgot" element={<Forgot />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/NewPassword" element={<NewPassword />} />
      </Routes>
    </>
  );
};

export default App;
