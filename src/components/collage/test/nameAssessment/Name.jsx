import React, { useState } from "react";
import Header from "./Header";
import { Progress } from "./Progress";

const Name = () => {
  return (
    <div className="font-dmSans text-sm font-bold">
      <Header />
      <Progress />

      {/* larger screens */}
      <div className="  w-[95.6%] mx-auto h-[90vh] my-2 rounded-lg tracking-wide justify-between  ">
        <input
          type="text"
          className="w-11/12 bg-gray-100 h-10 p-2 mt-12 rounded-lg focus:outline-0 focus:ring-blued focus:ring-1"
          placeholder="Name your assessment.........."
        />

        <hr className="w-11/12 my-5" />

        <label for="type" className="font-normal text-blue-500 ">
          Select the assessment type
        </label>
        <select
          name="type"
          id=""
          className="w-11/12 bg-gray-100 h-10 p-2 mt-4 focus:outline-none text-gray-400 rounded-lg focus:ring-blued focus:ring-1"
        >
          <option value="" className="text-gray-400">
            Select assessment type
          </option>
          <option value="" className="text-gray-400">
            Select assessment type
          </option>
          <option value="" className="text-gray-400">
            Select assessment type
          </option>
        </select>
      </div>
    </div>
  );
};

export default Name;
