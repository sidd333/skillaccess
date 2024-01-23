import React from "react";
import SlideNextButton from "../buttons";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperSlideRight = () => {
  return (
    <Swiper
      className="relative max-w-[800px]"
      loop={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        400: {
          slidesPerView: 2,
        },
        639: {
          slidesPerView: 2,
        },
        865: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 2.2,
        },
      }}
    >
      <SwiperSlide>
        <div className=" bg-white  w-44 h-36 rounded-lg p-2">
          <figure className="bg-white-500 w-28 h-24 mx-auto rounded-lg flex justify-center">
            <img
              src="../intel.png"
              alt="img not loaded"
              className="w-1/2 h-1/2 self-center rounded-lg"
            />
          </figure>
          <span className="">
            <h3 className="text-xs  font-semibold text-center break-words">
              Midweight UI/UX Designer
            </h3>
            <p className="text-xs  font-semibold text-center break-words  ">
              Mailchimp{" "}
              <em className="not-italic text-gray-400">in, London, UK</em>
            </p>
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" bg-white  w-44 h-36 rounded-lg p-2">
          <figure className="bg-white-500 w-28 h-24 mx-auto rounded-lg flex justify-center">
            <img
              src="../intel.png"
              alt="img not loaded"
              className="w-1/2 h-1/2 self-center rounded-lg"
            />
          </figure>
          <span className="">
            <h3 className="text-xs  font-semibold text-center break-words">
              Midweight UI/UX Designer
            </h3>
            <p className="text-xs  font-semibold text-center break-words  ">
              Mailchimp{" "}
              <em className="not-italic text-gray-400">in, London, UK</em>
            </p>
          </span>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className=" bg-white  w-44 h-36 rounded-lg p-2">
          <figure className="bg-white-500 w-28 h-24 mx-auto rounded-lg flex justify-center">
            <img
              src="../intel.png"
              alt="img not loaded"
              className="w-1/2 h-1/2 self-center rounded-lg"
            />
          </figure>
          <span className="">
            <h3 className="text-xs  font-semibold text-center break-words">
              Midweight UI/UX Designer
            </h3>
            <p className="text-xs  font-semibold text-center break-words  ">
              Mailchimp{" "}
              <em className="not-italic text-gray-400">in, London, UK</em>
            </p>
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" bg-white  w-44 h-36 rounded-lg p-2">
          <figure className="bg-white-500 w-28 h-24 mx-auto rounded-lg flex justify-center">
            <img
              src="../intel.png"
              alt="img not loaded"
              className="w-1/2 h-1/2 self-center rounded-lg"
            />
          </figure>
          <span className="">
            <h3 className="text-xs  font-semibold text-center break-words">
              Midweight UI/UX Designer
            </h3>
            <p className="text-xs  font-semibold text-center break-words  ">
              Mailchimp{" "}
              <em className="not-italic text-gray-400">in, London, UK</em>
            </p>
          </span>
        </div>
      </SwiperSlide>

      <span className="absolute top-1/3 right-5 z-20 h-fit w-fit">
        <SlideNextButton />
      </span>
    </Swiper>
  );
};

export default SwiperSlideRight;
