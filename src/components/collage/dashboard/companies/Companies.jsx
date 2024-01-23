import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa6";
import { PiSlidersHorizontalLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Companies = () => {
  const [companies, setcompanies] = useState([1, 2, 3, 4, 5, 6, , 9, 6]);
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex w-[85%] mx-auto justify-between mb-2">
        <button
          className="bg-gray-200  self-center ml-2 rounded-lg h-10 w-10 sm:h-12 sm:w-16"
          onClick={() => navigate("/collage/dashboard")}
        >
          <FaAngleLeft className="mx-auto sm:h-6 sm:w-6 h-4 w-4" />
        </button>
        <div className=" rounded-xl mx-2 w-full sm:h-12 h-10 flex my-2 ">
          <span className="w-fit mx-auto flex self-center">
            <IoIosSearch className="self-center w-10 h-10 bg-gray-100 rounded-s-lg text-gray-400 py-2 " />
            <input
              type="text"
              placeholder="Search"
              className="placeholder pl-0 border-none self-center bg-gray-100 focus:outline-none focus:ring-0 rounded-e-lg sm:w-80 w-fit"
            />
          </span>
        </div>

        <button className="bg-gray-200  self-center mr-2 rounded-lg h-10 w-10 sm:h-12 sm:w-16">
          <PiSlidersHorizontalLight className="mx-auto sm:h-8 sm:w-8 h-6 w-6" />
        </button>
      </div>
      <div className="flex flex-wrap gap-4 w-fit justify-center">
        {companies?.map((item, index) => {
          return (
            <div
              className="card card-compact w-64 bg-base-100 shadow-xl"
              key={index}
            >
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <div className="w-14 h-14 bg-red-600 -mt-10"></div>
                <h2 className="card-title">Nike</h2>
                <p>If a dog chews asdh sakjd iosadh shad siaodh saodi h </p>
                <div className="card-actions justify-end">
                  <button
                    className="btn hover:bg-blue-900 bg-blue-800 rounded-2xl text-white"
                    onClick={() => navigate("/collage/companies/profile")}
                  >
                    View details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Companies;
