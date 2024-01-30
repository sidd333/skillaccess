import React from "react";

const Info = () => {
  return (
    <div className="flex justify-between bg-[#8F92A1]   bg-opacity-5 p-5">
      <div className="flex  gap-7">
        <div className="w-14  flex object-cover rounded-xl  self-center  p-2 h-16 bg-white">
          <img
            src="../../images/companyLogo.png"
            alt=""
            className="self-center"
          />
        </div>

        <div className="font-dmSans">
          <h2 className="text-lg font-bold mb-1">Google inc.</h2>
          <h2 className="text-xs mb-2">Bangalore Branch Office </h2>
          <h2 className="text-[#7D7D7D] text-xs">Available Jobs</h2>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-14 text-center font-dmSans">
        <div className="self-center">
          <h2 className="text-xs font-bold text-gray-400 mb-2">TIME PERIOD</h2>
          <h2 className="text-sm font-bold ">100 mins</h2>
        </div>

        <div className="self-center">
          <h2 className="text-xs font-bold text-gray-400 mb-2">TIMELINE</h2>
          <h2 className="text-sm font-bold ">16 sep - 20 sep</h2>
        </div>

        <div className="self-center">
          <h2 className="text-xs font-bold text-gray-400 mb-2">
            STUDENTS APPEARED
          </h2>
          <h2 className="text-sm font-bold ">296</h2>
        </div>

        <div className="self-center">
          <h2 className="text-xs font-bold text-gray-400 mb-2">ATTEMPTS</h2>
          <h2 className="text-sm font-bold ">4</h2>
        </div>
      </div>
    </div>
  );
};

export default Info;
