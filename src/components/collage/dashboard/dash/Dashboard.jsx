import React, { useRef, useState, Component } from "react";
import { HiArrowRight } from "react-icons/hi2";
import Chart from "react-apexcharts";

// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import SlideNextButton from "../buttons";

export default function Dashboard() {
  const [companies, setcompanies] = useState([
    {
      image:
        "https://images.pexels.com/photos/1337384/pexels-photo-1337384.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "sample",
    },
    {
      image:
        "https://images.pexels.com/photos/1337384/pexels-photo-1337384.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "sample",
    },
    {
      image:
        "https://images.pexels.com/photos/1337388/pexels-photo-1337388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "sample",
    },
    {
      image:
        "https://images.pexels.com/photos/1337388/pexels-photo-1337388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "sample",
    },
  ]);

  const [settings, setSettings] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 19, 100],
      },
      {
        name: "series-2",
        data: [5, 15, 55, 50, 69, 70, 74, 96, 100, 55],
      },
    ],
  });

  const [placements, setPlacements] = useState([1, 2, 3, 4, 5, , 9, 9, 6]);

  return (
    <>
      <div className=" w-11/12 mx-auto ">
        {/* top dashboard */}
        <div className="bg-gray-100 mt-3 sm:mt-8 rounded-lg ">
          <h1 className="text-lg font-medium px-6 md:px-8 basis-full">
            Overview
          </h1>
          <div className="flex flex-wrap  gap-6  justify-center mb-12  px-4 mt-2 pb-6">
            {/* 1st card */}
            <div className="card w-[13%] md:w-[16%] lg:w-[18%] bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
            </div>

            <div className="card w-[13%] md:w-[16%] lg:w-[18%] bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
            </div>

            <div className="card w-[13%] md:w-[16%] lg:w-[18%] bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
            </div>

            <div className="card w-[13%] md:w-[16%] lg:w-[18%] bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://images.pexels.com/photos/1337384/pexels-photo-1337384.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
            </div>

            <div className="card w-[13%] md:w-[16%] lg:w-[18%] bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
            </div>
          </div>
        </div>

        <div className=" gap-2  mx-auto  overflow-x-clip">
          {/* 1st block */}
          <div className="bg-gray-100 mt-3 sm:mt-8 rounded-lg  w-[48%]  pb-4 mr-1 inline-block">
            <h1 className="text-lg font-medium px-2 basis-full pb-2">
              New Companies Onboarded
            </h1>
            <Swiper
              className="relative"
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
                  slidesPerView: 4,
                },
              }}
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <span className="absolute top-0 right-0 z-20 h-fit w-fit">
                <SlideNextButton />
              </span>
            </Swiper>
          </div>
          {/* 2nd block */}
          <div className="bg-gray-100 mt-3 sm:mt-8 rounded-lg  w-1/2  pb-4  inline-block">
            <h1 className="text-lg font-medium px-2 basis-full pb-2">
              New Companies Onboarded
            </h1>
            <Swiper
              className="relative"
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
                  slidesPerView: 4,
                },
              }}
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <span className="absolute top-0 right-0 z-20 h-fit w-fit">
                <SlideNextButton />
              </span>
            </Swiper>
          </div>
        </div>

        {/* chart */}
        <div className="flex mt-2 bg-gray-100 w-[98.3%] rounded-lg  flex-wrap justify-center relative">
          <div className=" w-3/4  rounded-s">
            <div className="">
              <Chart
                options={settings.options}
                series={settings.series}
                type="line"
                height={400}
                width={"100%"}
                responsive={[
                  {
                    breakpoint: 500,

                    options: {},
                  },
                ]}
              />
            </div>
          </div>
          {/* larger screens */}
          <div className=" w-[23%]  bg-gray-100 rounded-e   h-0 sm:h-80 basis-full sm:block sm:basis-auto hidden ">
            <span className="flex justify-between px-2 mb-4">
              <h1>Recent Placements</h1>
              <h1 className="text-blue-500">See all</h1>
            </span>

            <div className="bg-white  overflow-y-scroll h-full rounded-lg ">
              {placements?.map((placement) => {
                return (
                  <div className="card card-side shadow-sm mb-1 h-20 p-2 ">
                    <figure className="w-1/3 rounded">
                      <img
                        src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                        alt="Movie"
                      />
                    </figure>
                    <div className="ml-2">
                      <h2 className=""></h2>
                      <p className="text-base">name</p>
                      <p className="text-xs text-gray-400">company</p>
                      <p>date</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* small screens */}
        <div className="block md:hidden w-[98.3%]">
          <h1></h1>
          <Swiper
            className="relative"
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
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <span className="absolute top-0 right-0 z-20 h-fit w-fit">
              <SlideNextButton />
            </span>
          </Swiper>
        </div>
      </div>
    </>
  );
}

//w-56  2xs:w-72 xs:w-80
