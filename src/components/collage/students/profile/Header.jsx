import React from "react";
import { FaAngleLeft, FaChevronLeft, FaPlus, FaSearch } from "react-icons/fa";
import { PiSlidersHorizontalLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-[98%] mx-auto justify-between mt-2 font-dmSans">
      <span className="flex gap-4">
        <button
          className="bg-[#D9E1E7]  self-center ml-2 rounded-lg h-10 w-10 sm:h-12 sm:w-16"
          onClick={() => navigate(-1)}
        >
          <FaAngleLeft className="mx-auto  h-4 w-4" />
        </button>
      </span>
    </div>
  );
};

export default Header;
