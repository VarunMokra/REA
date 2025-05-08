import React from "react";

const FeatureCard = ({ title, description, imageUrl }) => (
  <div className="md:columns-3 columns-6 w-[154px] sm:w-[330px] lg:w-[240px] flex flex-col text-center">
    <div className="self-center mb-2.5 md:mb-3.5">
      <div
        className="sm:w-12 sm:h-12 w-8 h-8 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
    </div>
    <div className="text-sm md:text-lg font-semibold text-[#1B2124]">
      {title}
    </div>
    <div className="md:text-base text-xs font-medium text-[#1B2124]">
      {description}
    </div>
  </div>
);

export default FeatureCard;
