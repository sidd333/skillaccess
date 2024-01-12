import React from "react";
import SlideNextButton from "../../dashboard/buttons";
import { FaPlus } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { PiPencilSimpleLine } from "react-icons/pi";

// Import Swiper styles
import "swiper/css";
import { Bin } from "../../../icons";

const Intermediate = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="flex bg-[#F8F8F9] w-full gap-2">
      <div className=" min-w-max h-64 bg-[rgba(143,146,161,0.1)] my-3 ml-4 rounded-lg flex justify-center">
        <div className=" self-center w-fit h-fit ">
          <div className="bg-white sm:w-20 sm:h-20 w-10 h-10 rounded-lg mx-auto flex justify-center">
            <FaPlus className="self-center w-4 h-4 sm:h-8 sm:w-8 text-blue-500" />
          </div>
          <h2 className="text-center text-black text-xs sm:text-medium font-bold my-2 w-20  md:w-60">
            Add New Assessment
          </h2>
          <h2 className="text-center text-xs my-2 w-20 md:w-60">
            Create New Assessment
          </h2>
        </div>
      </div>
      <Swiper
        className="relative sm:!max-w-md md:!max-w-lg"
        loop={true}
        spaceBetween={"1px"}
        slidesPerView={2}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 1.3,
          },
          550: {
            slidesPerView: 1.6,
          },
          600: {
            slidesPerView: 1.6,
          },
          640: {
            slidesPerView: 1.1,
          },
          865: {
            slidesPerView: 1.3,
          },
          1000: { slidesPerView: 1.3 },
          1280: {
            slidesPerView: 2,
          },
        }}
      >
        {arr.map((item, i) => (
          <SwiperSlide className="w-full">
            <div className="w-60 h-64 bg-white my-3 text-start font-bold text-black rounded sm:p-2 p-1 font-dmSans">
              <h2 className="mb-2 line-clamp-2 ">
                Create the first things for your platform
              </h2>
              <p className="font-normal text-gray-400  line-clamp-4 sm:mb-2 mb-1">
                Your platform is made up of 4 main elements, and the importance
                of your platform is unparalleled becau…
              </p>
              <h2 className="text-gray-400 font-medium text-base font-dmSans sm:mb-2">
                ATTEMPTS
              </h2>
              <div className="grid grid-cols-4 w-full px-2 gap-2 mb-4">
                <div className="bg-gray-100 w-full h-1 rounded"></div>
                <div className="bg-gray-100 w-full h-1 rounded"></div>
                <div className="bg-gray-100 w-full h-1 rounded"></div>
                <div className="bg-gray-100 w-full h-1  rounded"></div>
              </div>

              <div className="flex justify-between">
                <div className="flex ">
                  <div className="w-8 h-8 bg-blue-500  rounded"></div>
                  <div className="w-8 h-8 bg-blue-900 rounded -ml-3"></div>
                  <div className="w-8 h-8 bg-blue-100 rounded -ml-3"></div>
                  <div className="w-8  rounded  font-dmSans text-gray-400 font-normal self-center ">
                    +18
                  </div>
                </div>

                <div className="flex justify-between px-2">
                  <Bin />
                  <PiPencilSimpleLine className="w-6 h-5 text-blued" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <span className="absolute top-1/2 right-0 z-20 h-fit w-fit">
          <SlideNextButton />
        </span>
      </Swiper>
    </div>
  );
};

export default Intermediate;
