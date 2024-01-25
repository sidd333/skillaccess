import React, { useState } from "react";

import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Companies = () => {
  const [companies, setcompanies] = useState([1, 2, 3, 4, 5, 6, , 9, 6]);
  const navigate = useNavigate();
  return (
    <div className="w-11/12 mx-auto">
      <Header />
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
