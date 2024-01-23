import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import BackIcon from "../../../buttons/BackIcon";
import { PiSlidersHorizontalLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Companies = () => {
  const [companies, setcompanies] = useState([1, 2, 3, 4, 5, 6, , 9, 6]);
  const navigate = useNavigate();
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex w-full mx-auto justify-between mb-2">
        <button
          className="  self-center  rounded-lg h-10 w-10 "
          onClick={() => navigate(-1)}
        >
          <BackIcon />
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

        <button className="bg-gray-100  self-center  rounded-lg h-10 w-10 sm:h-12 sm:w-16">
          <PiSlidersHorizontalLight className="mx-auto  h-6 w-6" />
        </button>
      </div>
      <div className="flex flex-wrap mx-1 w-fit justify-between">
        {companies?.map((item, index) => {
          return (
            <div
              className="card card-compact w-[17rem] mb-4 bg-gray-100 rounded-none"
              key={index}
            >
              <figure>
                <img src="../../images/CompanyBg.png" alt="Shoes" />
              </figure>
              <div className="card-body">
                <div className="w-14 h-14  -mt-10">
                  <img
                    src="../../images/companyLogo.png"
                    alt=""
                    className="object-scale-down rounded-2xl"
                  />
                </div>
                <h2 className="card-title text-lg font-dmSans font-bold">
                  Google Inc.
                </h2>
                <p className="line-clamp-5 text-sm opacity-[0.6024]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type…{" "}
                </p>
                <div className="card-actions justify-end">
                  <button
                    className="px-4 py-2 hover:bg-blue-900 bg-[#0052CC] text-xs font-dmSans font-bold rounded-xl text-white"
                    onClick={() => navigate("/collage/companies/profile")}
                  >
                    View Details
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
