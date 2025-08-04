// Navbar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ Changepage }) => {
  const location = useLocation();

  return (
    <div className="flex border border-gray-300 justify-between items-center w-full h-20 px-10">
      <Link to="/">
        <img
          style={{ width: "90px" }}
          src="/assets/images/download (1).png"
          alt="Zoom Logo"
        />
      </Link>
      <div className="flex items-center gap-4">
        <p>New to Zoom?</p>

        {Changepage}
        <span className="flex gap-10  font-semibold text-blue-700">
          {location.pathname !== "/SignIn" && (
            <Link to="/SignIn">
              <span className="ml-10!">SignIn</span>
            </Link>
          )}

          <Link to="/support">Support</Link>

          <select className="w-24 outline-none border rounded-md px-1">
            <option value="English">English</option>
            <option value="marathi">Marathi</option>
          </select>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
