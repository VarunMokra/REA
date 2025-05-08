import React from "react";

const CategoryCard = ({ title, tags, imageUrl, links, exploreLink }) => {
  return (
    <div className="group border-[0.25px] max-[330px]:w-[300px] w-[328px] sm:w-full hover:border-[#3D3D3D] lg:p-[24px] md:p-[20px] p-[16px] relative flex flex-row rounded-md overflow-hidden transition-all duration-200">
      {/* Left Section */}
      <div className="flex flex-col md:w-[232px] w-[226px]">
        {/* Title */}
        <div className="flex flex-row whitespace-nowrap lg:text-[24px] md:text-[20px] text-[18px] font-[700] md:leading-[30px] lg:leading-[32px] leading-[20px]">
          <div className="w-[220px] overflow-hidden">{title}</div>
        </div>

        {/* Tags */}
        <div className="flex flex-row items-start lg:pt-[16px] pt-[12px] flex-wrap md:w-[232px] w-[220px] overflow-y">
          {tags.map((tag, index) => (
            <a
              key={index}
              href={links[index]}
              className="md:text-[14px] cursor-pointer text-[12px] md:mr-[8px] mr-[5px] leading-[20px] my-[5px] lg:px-[20px] px-[12px] md:py-[10px] py-[7px] text-[#3D3D3D] text-center border border-1 border-[#D9DCE1] rounded-[28px]"
            >
              {tag}
            </a>
          ))}
        </div>

        {/* Explore Button */}
        <a
          href={exploreLink}
          className="lg:mt-[20px] md:mt-[16px] mt-[12px] flex flex-row items-center hover:text-[#5A4BDA] duration-200 text-[#1B2124]"
        >
          <div className="cursor-pointer pr-[12px] lg:text-[16px] text-[14px] md:leading-[24px] leading-[20px]">
            Explore Category
          </div>
          <div className="bg-[#F8F8F8] duration-200 md:px-[12px] px-[10px] md:py-[4px] py-[4px] rounded-[100px] flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.9697 3.96967C13.2626 3.67678 13.7374 3.67678 14.0303 3.96967L21.5303 11.4697C21.671 11.6103 21.75 11.8011 21.75 12C21.75 12.1989 21.671 12.3897 21.5303 12.5303L14.0303 20.0303C13.7374 20.3232 13.2626 20.3232 12.9697 20.0303C12.6768 19.7374 12.6768 19.2626 12.9697 18.9697L19.1893 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H19.1893L12.9697 5.03033C12.6768 4.73744 12.6768 4.26256 12.9697 3.96967Z"
                fill="#1B2124"
              />
            </svg>
          </div>
        </a>
      </div>

      {/* Right Section */}
      <div className="md:w-[106px] flex items-center w-[56px] relative">
        <div
          className="md:h-[135%] h-[165%] absolute aspect-square flex items-center rounded-full"
          style={{ backgroundColor: "rgb(255, 242, 242)" }}
        >
          <img
            alt="exam-category"
            loading="lazy"
            width="40"
            height="40"
            decoding="async"
            src={imageUrl}
            className="md:w-[46px] group-hover:scale-110 transition-all duration-300 w-10 md:h-[46px] h-10 xl:w-[72px] xl:h-[72px] md:ml-10 xl:ml-8 ml-6 bg-center bg-cover bg-no-repeat scale-100"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
