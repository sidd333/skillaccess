import React from "react";
import {
  FaAngleLeft,
  FaChevronDown,
  FaChevronLeft,
  FaPlus,
  FaSearch,
} from "react-icons/fa";
import { FaSortDown } from "react-icons/fa6";
import { PiSlidersHorizontalLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full mx-auto justify-between mb-2 font-dmSans">
      <span className="flex gap-4">
        <button
          className=" self-center ml-2 rounded-lg "
          onClick={() => navigate(-1)}
        >
          <img
            src="../../images/icons/inbox.png"
            className="mx-auto sm:h-6 sm:w-6 h-4 w-4"
          />
        </button>
        <h2 className="text-xl font-bold self-center">Inbox</h2>

        <div className="bg-gray-100 rounded-xl mx-2  sm:h-12 h-10 flex my-2 px-4 w-fit">
          <FaSearch className="self-center w-5 h-5 ml-1 text-gray-400" />
          <input
            type="text"
            placeholder="Search in mail"
            className="input border-none self-center bg-gray-100 focus:outline-none input-md sm:w-96 max-w-md mx-auto  "
          />
          <FaSortDown className="text-gray-400 self-center" />
        </div>
      </span>
    </div>
  );
};

export default Header;
