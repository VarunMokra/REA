import React from "react";

const StatCard = ({ title, value, bgColor }) => {
  return (
    <div
      className={`aspect-square min-w-[140px] min-h-[140px] md:min-w-[200px] md:min-h-[200px] rounded-2xl shadow-md flex flex-col items-center justify-center 
      transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
      style={{ backgroundColor: bgColor }}
    >
      <h3 className="text-[16px] md:text-[20px] font-semibold text-black mb-2 text-center">
        {title}
      </h3>
      <p className="text-[22px] md:text-[32px] font-bold text-black text-center">
        {value}
      </p>
    </div>
  );
};

export default StatCard;
