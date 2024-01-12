import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex w-[97%] mx-auto justify-between mb-2">
      <div>
        <button className="flex self-center ml-2 rounded-lg  gap-2">
          <FaChevronLeft className=" p-3 rounded-lg h-10 w-10 self-center bg-gray-200" />
          <div>
            <h2 className="sm:text-xl  font-bold self-center">
              Create Assessment
            </h2>
            <div className="flex gap-2">
              <h3>1</h3>
              <h3>2</h3>
              <h3>3</h3>
            </div>
          </div>
        </button>
      </div>

      <div className="bg-gray-100 rounded-xl mx-2   h-12 flex my-2 ">
        <div className=" flex">
          <button className="self-center justify-center flex bg-blue-400 p-2 rounded-lg text-xs gap-2">
            Details <FaArrowRightLong className="self-center" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
