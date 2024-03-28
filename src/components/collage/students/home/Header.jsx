import React, { useState } from "react";
import { FaAngleLeft, FaChevronLeft, FaPlus, FaSearch } from "react-icons/fa";
import { FiPlus, FiUpload } from "react-icons/fi";
import { PiSlidersHorizontalLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import StudentPoP from "../../../PopUps/StudentPoP";

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddTeamClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const navigate = useNavigate();
  return (
    <div className="flex w-[95%] mx-auto justify-between mb-2 font-dmSans">
      <span className="flex gap-4">
        <button
          className=" self-center ml-2 rounded-lg h-10 w-10 sm:h-12 sm:w-16"
          onClick={() => navigate(-1)}
        >
          <img src="../../images/icons/reports.png" alt="" />
        </button>
      </span>
      <div className="bg-gray-100 rounded-xl mx-2  sm:h-12 h-10 flex my-2 px-4 w-fit">
        <FaSearch className="self-center w-5 h-5 ml-1 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="input border-none self-center bg-gray-100 focus:outline-none input-md sm:w-96 max-w-md mx-auto  "
        />
      </div>

      <span className="flex gap-2">
        <button
          className="self-center justify-center flex bg-[#F8F8F9] py-3  rounded-xl w-32  gap-2 "
          onClick={handleAddTeamClick}
        >
          <FiPlus className="self-center text-lg " /> Add
        </button>
        {showPopup && <StudentPoP onClose={handleClosePopup} />}
        <button className="self-center justify-center flex bg-blue-700 py-3  rounded-xl w-48 text-white  gap-2 ">
          <FiUpload className="self-center text-lg " /> Upload New
        </button>
        <button className="bg-gray-100  self-center  rounded-lg h-10 w-10 sm:h-12 sm:w-16">
          <PiSlidersHorizontalLight className="mx-auto  h-6 w-6" />
        </button>
      </span>
    </div>
  );
};

export default Header;
