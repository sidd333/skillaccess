import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = ({ name }) => {
  const navigate = useNavigate();
  return (
    <div className="flex w-[97%] mx-auto justify-between mb-2">
      <button
        className="flex self-center ml-2 rounded-lg  gap-2"
        onClick={() => navigate(-1)}
      >
        <FaChevronLeft className=" p-3 rounded-lg h-10 w-10 self-center bg-gray-200" />
        <h2 className="sm:text-xl  font-bold self-center">{name}</h2>
      </button>
      <div className="bg-gray-100 rounded-xl mx-2   h-12 flex my-2 ">
        <FaSearch className="self-center w-1/4 sm:w-1/3 h-1/3 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="input border-none self-center bg-gray-100 focus:outline-none input-md sm:w-96  mx-auto  "
        />
      </div>

      <div className="flex gap-2"></div>
    </div>
  );
};

export default Header;
