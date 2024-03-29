import React from "react";
import { TbFileDownload } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const List = () => {
  const Navigate = useNavigate();
  return (
    <div className="w-full bg-[#F8F8F9] p-5 rounded-lg">
      {/* legend */}
      <div className=" grid-cols-6   w-full mx-auto mt-4 font-dmSans font-semibold text-base hidden md:grid ">
        <div className="bg-[#0052CC] rounded-s-lg p-2 bg-opacity-5 ">
          <h2>Date</h2>
        </div>
        <div className="bg-[#0052CC] p-2 bg-opacity-5">
          <h2>Description</h2>
        </div>
        <div className="bg-[#0052CC] p-2 bg-opacity-5">
          <h2>Plan Duration</h2>{" "}
        </div>
        <div className="bg-[#0052CC] p-2 bg-opacity-5">
          <h2>Mode</h2>
        </div>
        <div className="bg-[#0052CC] p-2 bg-opacity-5">
          <h2>Status</h2>
        </div>

        <div className="bg-[#0052CC] p-2 rounded-e-lg bg-opacity-5">
          <h2>Amount</h2>
        </div>
      </div>

      {/* list to be iterated */}
      <div className=" grid-cols-6 rounded-lg my-2 py-2 pl-2 text-center w-full mx-auto  font-dmSans font-semibold text-base hidden md:grid bg-white">
        {" "}
        {/* row-2 */}
        <div className="flex pl-1 ">
          <div className="  h-fit">
            <span>
              <h2 className="font-dmSans font-medium text-sm sm:text-base">
                10 Oct 2022
              </h2>
            </span>
          </div>
        </div>
        <div className="flex pl-1 justify-start">
          <div className=" self-center h-fit">
            <span>
              <h2 className="font-dmSans font-medium text-sm sm:text-base line-clamp-3 text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, facilis aliquid, fugiat placeat culpa sapiente
                asperiores animi doloremque deleniti deserunt ducimus ipsum
                totam ex laudantium provident, soluta quia dolor commodi.
              </h2>
            </span>
          </div>
        </div>
        <div className="flex pl-1 ">
          <div className="  h-fit">
            <span>
              <h2 className="font-dmSans font-medium text-sm sm:text-base">
                3 Months
              </h2>
            </span>
          </div>
        </div>
        <div className="flex pl-1 ">
          <div className="  h-fit">
            <span>
              <h2 className="font-dmSans font-medium text-sm sm:text-base">
                Card
              </h2>
            </span>
          </div>
        </div>
        <div className="flex pl-1 ">
          <div className="  h-fit">
            <span>
              <h2 className="font-dmSans font-medium text-sm sm:text-base">
                Active
              </h2>
            </span>
          </div>
        </div>
        <div className="flex pl-1 ">
          <div className="  h-fit">
            <span>
              <h2 className="font-dmSans font-medium text-sm sm:text-base">
                5000
              </h2>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
