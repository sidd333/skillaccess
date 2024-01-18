import React from "react";
import SlideNextButton from "../../dashboard/buttons";
import { FaPlus } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { PiPencilSimpleLine } from "react-icons/pi";

// Import Swiper styles
import "swiper/css";

import Card from "./common/Card";

const Intermediate = () => {
  const arr = [
    { attempts: 10, progress: 1 },
    { attempts: 12, progress: 2 },
    { attempts: 18, progress: 3 },
    { attempts: 20, progress: 4 },
    { attempts: 28, progress: 4 },
  ];
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
            <Card
              heading={"Create the first Things for Your Platform"}
              desc={
                "Your platform is made up of 4 main elements, and the importance of your platform is unparalleled because"
              }
              attempts={18}
              progress={item.progress}
            />
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
