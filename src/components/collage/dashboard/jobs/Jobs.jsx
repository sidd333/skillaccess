import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import { PiSlidersHorizontalLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Jobs = () => {
  const [jobs, setJobs] = useState([1, 2, 3, 4, 5, 6, , 9, 6]);
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex w-[95%] mx-auto justify-between mb-2">
        <button className="bg-gray-200  self-center ml-2 rounded-lg h-10 w-10 sm:h-12 sm:w-16">
          <FaAngleLeft
            className="mx-auto sm:h-6 sm:w-6 h-4 w-4"
            onClick={() => navigate("/collage/dashboard")}
          />
        </button>
        <div className="bg-gray-100 rounded-xl mx-2  sm:h-12 h-10 flex my-2 ">
          <FaSearch className="self-center w-1/3 h-1/3 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="input border-none self-center bg-gray-100 focus:outline-none input-md w-full max-w-xs  mx-auto  "
          />
        </div>

        <button className="bg-gray-200  self-center mr-2 rounded-lg h-10 w-10 sm:h-12 sm:w-16">
          <PiSlidersHorizontalLight className="mx-auto sm:h-8 sm:w-8 h-6 w-6" />
        </button>
      </div>
      <div className="flex flex-col gap-4  items-center  ">
        {jobs?.map((item, index) => {
          return (
            <div className="flex justify-between w-[99%]" key={index}>
              <div className="sm:flex">
                <div className=" sm:h-10 sm:w-10  w-6 h-6 self-center bg-red-600 mr-2"></div>
                <span className="">
                  <h2 className="font-dmSans font-semibold text-sm sm:text-base">
                    Role
                  </h2>
                  <h2 className="font-dmSans font-medium text-[.6rem] sm:text-xs inline">
                    {" "}
                    CompanyName
                  </h2>
                  <h2 className="font-dmSans text-gray-400  font-medium text-xs sm:text-xs inline">
                    {" "}
                    date
                  </h2>
                </span>
              </div>
              <div className="flex sm:gap-6 gap-1">
                <CiLocationOn className="mx-auto sm:h-6 sm:w-6 h-4 w-4 self-center" />
                <h2 className="font-dmSans text-gray-400  font-medium text-xs self-center sm:text-xs inline">
                  {" "}
                  location
                </h2>
                <h2 className="font-dmSans text-green-500  font-medium text-xs self-center sm:text-xs inline">
                  {" "}
                  Remote
                </h2>
                <button className=" h-8 p-1 hover:bg-blue-900 bg-blued rounded-lg text-white text-[.5rem] sm:text-sm self-center ">
                  full time
                </button>
                <FaArrowRight className="text-gray-400 self-center" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
