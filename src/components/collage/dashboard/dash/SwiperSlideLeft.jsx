import React from "react";
import SlideNextButton from "../buttons";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperSlideLeft = () => {
  return (
    <Swiper
      className="relative "
      spaceBetween={50}
      loop={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        400: {
          slidesPerView: 2,
        },
        639: {
          slidesPerView: 3,
        },
        865: {
          slidesPerView: 4,
        },
        1000: {
          slidesPerView: 3.5,
        },
      }}
    >
      <SwiperSlide>
        <div className=" bg-white  w-32 h-36 rounded-lg p-2">
          <figure className="bg-green-500 w-28 h-24 mx-auto rounded-lg">
            <img
              src="../intel.png"
              alt="img not loaded"
              className="w-full h-full"
            />
          </figure>
          <h3 className="text-sm text-gray-400 font-semibold text-center break-words h-full">
            company name
          </h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" bg-white  w-32 h-36 rounded-lg p-2">
          <figure className="bg-green-500 w-28 h-24 mx-auto rounded-lg">
            <img
              src="../company2.png"
              alt="img not loaded"
              className="w-full h-full"
            />
          </figure>
          <h3 className="text-sm text-gray-400 font-semibold text-center break-words h-full">
            company name
          </h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" bg-white  w-32 h-36 rounded-lg p-2">
          <figure className="bg-green-500 w-28 h-24 mx-auto rounded-lg">
            <img
              src="../intel.png"
              alt="img not loaded"
              className="w-full h-full"
            />
          </figure>
          <h3 className="text-sm text-gray-400 font-semibold text-center break-words h-full">
            company name
          </h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" bg-white  w-32  h-36 rounded-lg p-2">
          <figure className="bg-green-500 w-28 h-24 mx-auto rounded-lg">
            <img
              src="../intel.png"
              alt="img not loaded"
              className="w-full h-full"
            />
          </figure>
          <h3 className="text-sm text-gray-400 font-semibold text-center break-words h-full">
            company name
          </h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" bg-white  w-32 h-36 rounded-lg p-2">
          <figure className="bg-green-500 w-28 h-24 mx-auto rounded-lg">
            <img
              src="../intel.png"
              alt="img not loaded"
              className="w-full h-full"
            />
          </figure>
          <h3 className="text-sm text-gray-400 font-semibold text-center break-words h-full">
            company name
          </h3>
        </div>
      </SwiperSlide>
      <span className="absolute top-1/3 right-5 z-20 h-fit w-fit">
        <SlideNextButton />
      </span>
    </Swiper>
  );
};

export default SwiperSlideLeft;
