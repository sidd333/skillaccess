import React from "react";
import { FaSearch } from "react-icons/fa";

const Inputs = () => {
  return (
    <div className="w-[95.6%] mx-auto  my-2 rounded-lg sm:flex justify-between">
      {" "}
      <div className="bg-gray-100 rounded-xl mx-2 w-full   h-12 flex my-2 ">
        <FaSearch className="self-center w-1/3 h-1/3 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="input border-none self-center bg-gray-100 focus:outline-none input-md w-full  mx-auto  "
        />
      </div>
      <div className="flex gap-1 w-full justify-end">
        <select
          name=""
          id=""
          className="focus:outline-none focus:ring-1 focus:ring-blued bg-gray-100 sm:w-1/3 w-1/2 h-12 p-4 rounded-lg self-center"
        >
          <option value="">Topic</option>
        </select>
        <select
          name=""
          id=""
          className="focus:outline-none focus:ring-1 focus:ring-blued bg-gray-100 sm:w-1/3 h-12 p-4 w-1/2 rounded-lg self-center"
        >
          <option value="">Question Type</option>
        </select>
      </div>
    </div>
  );
};

export default Inputs;
