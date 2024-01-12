import React, { useState } from "react";
import Header from "./Header";
import { Progress } from "./Progress";
import { LiaStopwatchSolid } from "react-icons/lia";
import { RxCross1 } from "react-icons/rx";
import { PiPencilSimpleLine } from "react-icons/pi";
import { ImFileText } from "react-icons/im";

const AddQuestions = () => {
  return (
    <div className="font-dmSans text-sm font-bold">
      <Header />
      <Progress />

      {/* larger screens */}
      <div className="  w-[95.6%] mx-auto  my-2 rounded-lg tracking-wide justify-between  ">
        <h2 className="font-normal text-xs sm:text-sm text-gray-400  mt-8 tracking-wide sm:pl-10">
          Add up to 10 custom questions to your assessment (optional). You can
          use five question types: multiple-choice, essay, video and code.
        </h2>
      </div>
      <div className="  w-[95.6%] mx-auto  sm:mt-5 rounded-lg tracking-wide justify-between  ">
        <div className="w-full grid grid-cols-6 row-span-2 gap-x-10 gap-y-3 p-3 bg-gray-100 rounded-lg border border-blued h-28">
          {" "}
          <div className="col-span-2 ">
            <h2 className="self-center text-xs sm:text-sm">UX-Test Basics</h2>
          </div>
          <div className="col-span-2 ">
            <span className="flex gap-1">
              <ImFileText className="text-blued self-center " />
              <p className="self-center text-xs text-gray-500   sm:text-sm">
                Multiple Choice Questions
              </p>
            </span>
          </div>
          <div className="col-span-1 ">
            <div className="flex gap-1 ">
              <LiaStopwatchSolid className="self-center text-gray-500 w-5 h-5" />
              <p className="text-gray-400 text-xs self-center">10 mins</p>
            </div>
          </div>
          <div className="col-span-1  flex justify-center">
            <RxCross1 className="self-center text-red-600 w-5 h-5" />
          </div>
          <div className="col-span-4 line-clamp-2 text-xs font-normal text-gray-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            rerum praesentium sapiente consectetur deserunt qui non eius, nam,
            quia, odit facere? Quia, iste! Totam sunt, nulla nostrum fuga enim
            repudiandae.
          </div>
          <div className="col-span-1  flex">
            <button className="self-center justify-center bg-gray-200 p-2 rounded-lg text-xs">
              Details
            </button>
          </div>
          <div className="col-span-1  flex justify-center">
            <PiPencilSimpleLine className="self-center text-blued w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuestions;
