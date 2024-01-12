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
      <div className="  w-[95.6%] mx-auto min-h-[90vh] my-2 rounded-lg tracking-wide justify-between  ">
        <div>
          <h2 className="w-11/12  text-gray-400 sm:h-10 p-2 sm:mt-12  mt-4 rounded-lg pl-7 mb-10 sm:mb-1 ">
            Your Assessment can include upto 5 tests, Browse the test library
            and add the most relevant tests.{" "}
          </h2>
        </div>

        <div className="w-[95.6%] mx-auto  my-2 rounded-lg grid sm:grid-cols-5 grid-cols-2 gap-6">
          <div className="w-full h-28 border border-dashed rounded-lg border-blued col-span-1 flex justify-center ">
            <span className="self-center">
              <FiPlusCircle className="mx-auto sm:w-8 sm:h-8 text-gray-200" />
              <h2 className="font-semibold mt-1">Add section 1 </h2>
            </span>
          </div>
          <div className="w-full h-28 border border-dashed rounded-lg border-blued col-span-1 flex justify-center ">
            <span className="self-center">
              <FiPlusCircle className="mx-auto sm:w-8 sm:h-8 text-gray-200" />
              <h2 className="font-semibold mt-1">Add section 2 </h2>
            </span>
          </div>
          <div className="w-full h-28 border border-dashed rounded-lg border-blued col-span-1 flex justify-center ">
            <span className="self-center">
              <FiPlusCircle className="mx-auto sm:w-8 sm:h-8 text-gray-200" />
              <h2 className="font-semibold mt-1">Add section 3 </h2>
            </span>
          </div>
          <div className="w-full h-28 border border-dashed rounded-lg border-blued col-span-1 flex justify-center ">
            <span className="self-center">
              <FiPlusCircle className="mx-auto sm:w-8 sm:h-8 text-gray-200" />
              <h2 className="font-semibold mt-1">Add section 4 </h2>
            </span>
          </div>
          <div className="w-full h-28 border border-dashed rounded-lg border-blued col-span-1 flex justify-center ">
            <span className="self-center">
              <FiPlusCircle className="mx-auto sm:w-8 sm:h-8 text-gray-200" />
              <h2 className="font-semibold mt-1">Add section 5 </h2>
            </span>
          </div>
        </div>

        <Inputs />
        <div className="flex flex-wrap gap-2 justify-center">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectTests;
