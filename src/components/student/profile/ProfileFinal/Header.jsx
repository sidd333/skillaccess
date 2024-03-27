import React from "react";
import { IoIosSearch } from "react-icons/io";
import BackIcon from "../../../buttons/BackIcon";
import { PiSlidersHorizontalLight } from "react-icons/pi";
import { FiPlus, FiUpload } from "react-icons/fi";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full mx-auto justify-between mb-6">
      {/* comp */}
      <span className="flex gap-2">
        <button
          className="self-center justify-center flex bg-gray-100 py-3  rounded-xl  w-32  gap-2 "
          // onClick={() => navigate("/collage/test/addMcq")}
        >
          <FiPlus className="self-center text-lg " /> Add
        </button>
      </span>

      <span className="flex gap-2">
        <button
          className="self-center justify-center flex bg-[#0052CC] bg-opacity-80 py-3  rounded-xl  w-32  gap-2 "
          // onClick={() => navigate("/collage/test/addMcq")}
        >
          <FiPlus className="self-center text-lg " /> Add
        </button>
        <button
          className="self-center justify-center flex bg-gray-100 py-3  rounded-xl  w-32  gap-2 "
          // onClick={() => navigate("/collage/test/addMcq")}
        >
          <FiPlus className="self-center text-lg " /> Add
        </button>
        <button
          className="self-center justify-center flex bg-gray-100 py-3  rounded-xl  w-32  gap-2 "
          // onClick={() => navigate("/collage/test/addMcq")}
        >
          <FiPlus className="self-center text-lg " /> Add
        </button>
        <button
          className="self-center justify-center flex bg-gray-100 py-3  rounded-xl  w-32  gap-2 "
          // onClick={() => navigate("/collage/test/addMcq")}
        >
          <FiPlus className="self-center text-lg " /> Add
        </button>
      </span>
    </div>
  );
};

export default Header;
