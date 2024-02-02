import React, { useState } from "react";

import Footer from "./Footer";

const Finalize = () => {
  return (
    <div>
      <div className="bg-white min-h-[90vh] w-[98%] mx-auto rounded-xl pt-4 font-dmSans">
        <div className=" sm:w-[95.7%] mx-auto ">
          <div className="w-full">
            <div
              name=""
              id=""
              className="w-full rounded-lg bg-gray-100 focus:outline-none border-none mb-4 py-3 px-7 font-bold text-2xl"
            >
              CISCO Entrance Assessment
            </div>
          </div>

          <p className="resize-none w-full h-full text-lg bg-gray-100 border-none focus:outline-none rounded-lg  px-7 pt-3 pb-8 focus:ring-0placeholder-gray-400 mb-6">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.””Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.”Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum."
          </p>

          <div className=" w-full h-full text-lg bg-gray-100   mb-3 rounded-lg flex justify-between px-7 py-4">
            <p>Total time to complete</p>
            <p className="text-[#0052CC]  font-bold">180 min</p>
          </div>

          <div className=" w-full h-full text-lg bg-gray-100   mb-3 rounded-lg flex justify-between px-7 py-4">
            <p>Total number of questions</p>
            <p className="text-[#0052CC]  font-bold">60</p>
          </div>

          <div className=" w-full h-full text-lg bg-gray-100   mb-3 rounded-lg flex justify-between px-7 py-4">
            <p>Total attempts allowed</p>
            <p className="text-[#0052CC]  font-bold">3</p>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Finalize;
