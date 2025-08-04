// Button.jsx
import React from "react";

const Button = ({ onClick, text, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition ${className}`}>
      {text}
    </button>
  );
};

export default Button;
