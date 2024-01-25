import React from "react";

const List = () => {
  const arr = [2, 1, 1, 1, 1];
  return (
    <div className="w-full mx-auto">
      {/* legend */}
      <div className=" grid-cols-5  text-center  mx-auto  font-dmSans font-bold text-base hidden md:grid">
        <div className="bg-[#0052CC] bg-opacity-5 rounded-s-lg p-2 ">
          <h2>Test Name</h2>
        </div>
        <div className="bg-[#0052CC] bg-opacity-5 p-2">
          <h2>Total Students Appeared</h2>
        </div>
        <div className="bg-[#0052CC] bg-opacity-5 p-2">
          <h2>Total Students Selected</h2>{" "}
        </div>
        <div className="bg-[#0052CC]  bg-opacity-5 p-2">
          <h2>Overall Performance</h2>
        </div>
        <div className="bg-[#0052CC] bg-opacity-5 p-2 rounded-e-lg">
          <h2>Details</h2>
        </div>
      </div>

      {/* list to be iterated */}
      {arr.map(() => (
        <div className=" grid-cols-5 rounded-lg my-4 py-2 pl-2 text-center  mx-auto  font-dmSans  text-sm hidden md:grid w-11/12">
          {" "}
          {/* row-2 */}
          <div className={` flex `}>
            <div className="flex self-center">
              <span>
                <h2 className="font-dmSans  sm:text-sm">Google Analytics</h2>
              </span>
            </div>
          </div>
          {/*  */}
          <div className="flex justify-center ">
            <div className=" self-center h-fit">
              <span>
                <h2 className="font-dmSans  sm:text-sm">356</h2>
              </span>
            </div>
          </div>
          {/*  */}
          <div className="flex justify-center">
            <div className=" self-center h-fit">
              <span>
                <h2 className="font-dmSans  sm:text-sm">256</h2>
              </span>
            </div>
          </div>
          {/*  */}
          <div className="flex justify-center">
            <div className=" self-center">
              <span className="flex gap-2">
                <div className="min-w-[6rem] bg-opacity-5 rounded-lg h-3 mx-auto bg-green-600">
                  <div className={`w-3/5 bg-green-700 h-full rounded-lg`}></div>
                </div>
                <h2 className="font-dmSans font-bold text-xs sm:text-xs ">
                  {" "}
                  70%
                </h2>
              </span>
            </div>
          </div>
          {/*  */}
          <div className="flex justify-end mr-3">
            <span className="self-center ">
              <h2 className="font-dmSans font-semibold text-sm sm:text-base text-blue-500   ">
                View Details
              </h2>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
