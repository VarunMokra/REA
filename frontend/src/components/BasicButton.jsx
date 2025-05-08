import React from "react";

const BasicButton = ({ text, className = "" }) => {
  return (
    <button
      className={`px-[15px] py-[5px] sm:px-[24px] sm:py-[12px] text-sm sm:text-lg   rounded-md hover:bg-[#23388b] transition-all duration-200 bg-[#3352cc] items-center text-white font-semibold leading-[27px] text-[17px] ${className}`}
    >
      {text}
    </button>
  );
};

export default BasicButton;
