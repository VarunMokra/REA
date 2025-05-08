import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BasicButton from "./BasicButton";

const Carousel = ({ slides }) => {
  const swiperRef = useRef(null);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="relative w-full bg-gradient-to-r from-blue-700 to-blue-500 text-white overflow-hidden rounded-lg">
        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="h-auto"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Text Section */}
                <div className="flex-1">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-lg sm:text-xl mb-6 max-w-xl">
                    {slide.description}
                  </p>
                  {slide.buttonText && (
                    <BasicButton
                      text={slide.buttonText}
                      className="bg-white text-blue-700 hover:bg-gray-100"
                    />
                  )}
                </div>

                {/* Image Section */}
                <div className="flex-1 flex justify-center w-full max-w-md">
                  {/* Replace this with real image */}
                  {/* <img src={slide.image} alt={`Slide ${idx + 1}`} className="w-full max-w-md" /> */}
                  Hello
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Prev Button */}
        <div
          className="absolute top-1/2 left-4 sm:left-6 transform -translate-y-1/2 z-20"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <div className="bg-white text-blue-700 p-2 sm:p-3 rounded-full shadow-md cursor-pointer hover:bg-gray-100 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
        </div>

        {/* Custom Next Button */}
        <div
          className="absolute top-1/2 right-4 sm:right-6 transform -translate-y-1/2 z-20"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <div className="bg-white text-blue-700 p-2 sm:p-3 rounded-full shadow-md cursor-pointer hover:bg-gray-100 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
