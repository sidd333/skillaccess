import React, { useRef, useState, Component } from "react";
import { CgClipboard, CgAwards, CgTrending } from "react-icons/cg";
import { TbBriefcase2 } from "react-icons/tb";
import { MdOutlinedFlag } from "react-icons/md";
import { FaArrowRight, FaStar } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";

// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import SlideNextButton from "../buttons";
import SwiperSlideLeft from "./SwiperSlideLeft";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperSlideRight from "./SwiperSlideRight";
import ChartComp from "./Chart";

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

  const navigate = useNavigate();
  return (
    <>
      <div className=" w-11/12 mx-auto font-dmSans">
        {/* top dashboard */}
        <div className="bg-gray-100 mt-3 sm:mt-8 rounded-lg ">
          <h1 className="text-lg font-extrabold pt-3 px-6 md:px-8 basis-full">
            Overview
          </h1>
          <div className="flex flex-wrap  gap-6  justify-center mb-12  px-4 mt-2 pb-6">
            {/* 1st card */}
            <div className="card w-[13%] md:w-[16%] lg:w-[18%] bg-base-100 shadow-xl">
              <div className="rounded-lg bg-gray-100 w-10 h-10 flex justify-center mx-auto mt-4">
                <CgClipboard className="text-[#5243AA] self-center w-6 h-6 " />
              </div>
              <h2 className="text-2xl text-center font-bold mt-2">1.2K</h2>
              <h2 className="text-gray-400 text-center font-semibold text-xs mt-2 ">
                Students
              </h2>
              <h2 className="text-green-400 text-center font-medium text-base my-4 ">
                105.34%
              </h2>
            </div>

            <div className="card w-[13%] md:w-[16%] lg:w-[18%] bg-base-100 shadow-xl">
              <div className="rounded-lg bg-gray-100 w-10 h-10 flex justify-center mx-auto mt-4">
                <CgAwards className="text-green-600 self-center w-6 h-6 " />
              </div>
              <h2 className="text-2xl text-center font-bold mt-2">55</h2>
              <h2 className="text-gray-400 text-center font-semibold text-xs mt-2 ">
                Companies
              </h2>
              <h2 className="text-red-500 text-center font-medium text-base my-4 ">
                25.34%
              </h2>
            </div>

            <div className="card w-[13%] md:w-[16%] lg:w-[18%] bg-base-100 shadow-xl">
              <div className="rounded-lg bg-gray-100 w-10 h-10 flex justify-center mx-auto mt-4">
                <CgTrending className="text-[#FF991F] self-center w-6 h-6 " />
              </div>
              <h2 className="text-2xl text-center font-bold mt-2">10</h2>
              <h2 className="text-gray-400 text-center font-semibold text-xs mt-2 ">
                Students Placed
              </h2>
              <h2 className="text-green-600 text-center font-medium text-base my-4 ">
                14.34%
              </h2>
            </div>

            <div className="card w-[13%] md:w-[16%] lg:w-[18%] bg-base-100 shadow-xl">
              <div className="rounded-lg bg-gray-100 w-10 h-10 flex justify-center mx-auto mt-4">
                <TbBriefcase2 className="text-blued self-center w-6 h-6 " />
              </div>
              <h2 className="text-2xl text-center font-bold mt-2">120</h2>
              <h2 className="text-gray-400 text-center font-semibold text-xs mt-2 ">
                Total Jobs
              </h2>
              <h2
                className="text-green-600 text-center  text-base my-4 font-medium hover:cursor-pointer"
                onClick={() => navigate("/collage/dashboard/jobs")}
              >
                35.34%
              </h2>
            </div>

            <div className="card w-[13%] md:w-[16%] lg:w-[18%] bg-base-100 shadow-xl">
              <div className="rounded-lg bg-gray-100 w-10 h-10 flex justify-center mx-auto mt-4">
                <MdOutlinedFlag className="text-blue-700 self-center w-6 h-6 " />
              </div>
              <h2 className="text-2xl text-center font-bold mt-2">10</h2>
              <h2 className="text-gray-400 text-center font-semibold text-xs mt-2 ">
                Available Assessment
              </h2>
              <span
                className="flex my-4 gap-2 justify-center hover:cursor-pointer"
                onClick={() => navigate("/collage/test/assessment")}
              >
                <h2 className="text-blue-700 font-medium text-center  text-base  ">
                  Create New
                </h2>
                <FaArrowRight className="text-blue-700 self-center" />
              </span>
            </div>
          </div>
        </div>

        <div className=" gap-2  mx-auto  overflow-x-clip">
          {/* 1st block */}
          <div className="bg-gray-100 mt-3 sm:mt-8 rounded-lg  w-1/2  pb-4 mr-1 inline-block p-4">
            <span className="flex justify-between">
              <div className="w-1/2">
                <h1 className="text-base font-bold  basis-full py-2 ">
                  New Companies Onboarded
                </h1>{" "}
              </div>

              <button
                className="text-blue-500"
                onClick={() => navigate("/collage/dashboard/companies")}
              >
                See all
              </button>
            </span>

            <SwiperSlideLeft />
          </div>
          {/* 2nd block */}
          <div className="bg-gray-100 mt-3 sm:mt-8 rounded-lg  w-[48%]  pb-4 mr-1 inline-block p-4">
            <span className="flex justify-between">
              <div className="w-1/2">
                <h1 className="text-base font-bold  basis-full py-2 ">
                  New Jobs Posted
                </h1>{" "}
              </div>

              <button
                className="text-blue-500"
                onClick={() => navigate("/collage/dashboard/jobs")}
              >
                See all
              </button>
            </span>
            <SwiperSlideRight />
          </div>
        </div>

        {/* chart */}
        <ChartComp />
      </div>
    </>
  );
}

//w-56  2xs:w-72 xs:w-80
