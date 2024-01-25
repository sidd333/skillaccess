import React from "react";

const Results = () => {
  return (
    <div className="px-4  ">
      <div className=" grid grid-cols-5 text-center mt-3 bg-[#8F92A1] bg-opacity-10 rounded-lg ">
        <span className="w-full   p-2 font-bold font-dmSans">Name of test</span>
        <span className="w-full   p-2 font-bold font-dmSans">Date</span>
        <span className="w-full   p-2 font-bold font-dmSans">Topics</span>
        <span className="w-full   p-2 font-bold font-dmSans">Score</span>
        <span className="w-full  p-2 font-bold font-dmSans">Status</span>
      </div>

      {/* iterable  */}
      <div className=" grid grid-cols-5 text-center mt-3 bg-white rounded-lg ">
        <span className="w-full   py-2 text-sm font-dmSans">
          Wipro web -Fresher -aug2021{" "}
        </span>
        <span className="w-full   p-2 text-sm font-dmSans">12 Aug -21</span>
        <span className="w-full   p-2 text-sm font-dmSans">
          Php, Laravel, Java Scripts{" "}
        </span>
        <span className="w-full   p-2 text-sm font-dmSans">80%</span>
        <select className="w-fit mx-auto select focus:!outline-none  focus:border-0 text-sm font-dmSans">
          <option value="">Waiting</option>
          <option value="">Reject</option>
          <option value="">Selected</option>
        </select>
      </div>
    </div>
  );
};

export default Results;
