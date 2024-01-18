import React from "react";
import { FiPieChart } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="flex w-[97%] mx-auto justify-between mb-2 ">
      <button className="flex self-center ml-2 rounded-lg h-10 w-10 sm:h-20 sm:w-20 gap-2">
        <FiPieChart className=" sm:h-16 sm:w-16 h-10 w-10 self-center" />
        <h2 className="text-xl font-bold self-center">Test</h2>
      </button>
      <div className="bg-gray-100 rounded-xl mx-2   h-12 flex my-12">
        <FaSearch className="self-center ml-2  text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="input border-none self-center bg-gray-100 focus:outline-none input-md sm:w-96  "
        />
      </div>

      <div className="flex gap-2">
        <div className="rounded-full bg-blue-500 w-8 h-8 self-end"></div>
        <div className="rounded-full bg-blue-500 w-8 h-8 self-end"></div>
        <div className="rounded-full bg-blue-500 w-8 h-8 self-end"></div>
        <div className="rounded-full bg-blue-500 w-8 h-8 self-end"></div>
        <div className="w-8 h-8"></div>
        <div className="rounded-full bg-blue-500 w-8 h-8 self-end"></div>
      </div>
    </div>
  );
};

export default Search;
