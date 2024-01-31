import React, { useState,useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import { PiSlidersHorizontalLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { getCompany } from "../../../../redux/features/dashboard/dashboardSlice";

const Companies = () => {
  // const [companies, setcompanies] = useState([1, 2, 3, 4, 5, 6, , 9, 6]);
  const dispatch = useDispatch();
  const {companies} = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(getCompany());
  }, [dispatch])






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
        <div className="bg-gray-100 rounded-xl mx-2  sm:h-12 h-10 flex my-2 ">
          <FaSearch className="self-center w-1/3 h-1/3 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="input border-none self-center bg-gray-100 focus:outline-none input-md w-full max-w-xs  mx-auto  "
          />
        </div>

        <button className="bg-gray-200  self-center mr-2 rounded-lg h-10 w-10 sm:h-12 sm:w-16">
          <PiSlidersHorizontalLight className="mx-auto sm:h-8 sm:w-8 h-6 w-6" />
        </button>
      </div>
      <div className="flex flex-wrap gap-4 w-fit justify-center">
        {companies && companies?.map((company, index) => {
          return (
            <div
              className="card card-compact w-64 bg-base-100 shadow-xl"
              key={index}
            >
              <figure>
                <img
                  src={company.basic.coverPhoto}
                  alt="cover photo"
                />
              </figure>
              <div className="card-body">
                <div className="w-14 h-14 bg-red-600 -mt-10">
                  <img
                    src={company.basic.logo}
                    alt="logo"
                    className="w-full h-full"
                  />
                </div>
                <h2 className="card-title">{company.basic.companyName}</h2>
                <p>{
                  company.about.companyDescription
                  } </p>
                <div className="card-actions justify-end">
                  <button className="btn hover:bg-blue-900 bg-blue-800 rounded-2xl text-white">
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
