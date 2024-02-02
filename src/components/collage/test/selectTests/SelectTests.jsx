import React, { useState } from "react";
import Header from "./Header";
import { Progress } from "./Progress";
import { FiPlusCircle } from "react-icons/fi";

import Inputs from "./Inputs";

const SelectTests = () => {
  return (
    <div className="font-dmSans text-sm font-bold">
      <Header />
      <Progress />

      {/* larger screens */}
      <div className="  w-11/12 mx-auto min-h-[90vh] my-2 rounded-lg tracking-wide justify-between  ">
        <div>
          <h2 className="w-11/12  text-gray-400 sm:h-10 py-2 sm:mt-12  mt-4 rounded-lg mb-10 sm:mb-1 ">
            Your Assessment can include upto 5 tests, Browse the test library
            and add the most relevant tests.{" "}
          </h2>
        </div>

        <div className=" mx-auto  my-2 rounded-lg grid sm:grid-cols-5 grid-cols-2 gap-6">
          <div className="w-full h-32 border border-dashed rounded-lg border-blued col-span-1 flex justify-center ">
            <span className="self-center">
              <h2 className="text-xl font-bold mb-4">UX Test - Basics</h2>
              <div className="flex gap-2">
                <img
                  src="../../images/icons/menu-boxed.png"
                  alt=""
                  className="self-center"
                />
                <h2 className="font-bold text-xs text-gray-400 self-center">
                  Multiple Choice Questions
                </h2>
              </div>
              <div className="flex justify-between mt-1">
                {" "}
                <div className="flex gap-2 w-full">
                  <img
                    src="../../images/icons/stopwatch.png"
                    alt=""
                    className="w-6 h-6 self-center"
                  />
                  <h2 className="font-bold text-xs text-gray-400 self-center">
                    10 mins
                  </h2>
                </div>
                <img src="../../images/icons/cross.png" alt="" />
              </div>
            </span>
          </div>
          <div className="w-full h-32 border border-dashed rounded-lg border-blued col-span-1 flex justify-center ">
            <span className="self-center">
              <FiPlusCircle className="mx-auto sm:w-8 sm:h-8 text-gray-200" />
              <h2 className="font-semibold mt-1">Add section 2 </h2>
            </span>
          </div>
          <div className="w-full h-32 border border-dashed rounded-lg border-blued col-span-1 flex justify-center ">
            <span className="self-center">
              <FiPlusCircle className="mx-auto sm:w-8 sm:h-8 text-gray-200" />
              <h2 className="font-semibold mt-1">Add section 3 </h2>
            </span>
          </div>
          <div className="w-full h-32 border border-dashed rounded-lg border-blued col-span-1 flex justify-center ">
            <span className="self-center">
              <FiPlusCircle className="mx-auto sm:w-8 sm:h-8 text-gray-200" />
              <h2 className="font-semibold mt-1">Add section 4 </h2>
            </span>
          </div>
          <div className="w-full h-32 border border-dashed rounded-lg border-blued col-span-1 flex justify-center ">
            <span className="self-center">
              <FiPlusCircle className="mx-auto sm:w-8 sm:h-8 text-gray-200" />
              <h2 className="font-semibold mt-1">Add section 5 </h2>
            </span>
          </div>
        </div>

        <Inputs />
        <div className="flex flex-wrap gap-4 font-dmSans">
          {/* card */}
          <div className="card w-[310px] h-[378px] bg-gray-100 ">
            <div className="card-body">
              <h2 className="text-xl font-bold mb-4">UX Test - Basics</h2>
              <p className="text-sm leading-[26px] text-[#8F92A1]">
                This UX/UI design test evaluates candidates' knowledge of the
                overall UX/UI design process and their ability to turn feature
                requirements into useful and intuitive designs for digital
                products that provide a great experience to your users.
              </p>
              <div className="flex justify-between">
                <button className="w-[90px] h-[40px] bg-[#8F92A120] rounded-xl">
                  Details
                </button>
                <button className=" bg-[#00875A85] h-[40px] w-[72px] rounded-xl text-white">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectTests;
