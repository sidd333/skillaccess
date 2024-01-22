import React from "react";
import { CgUnavailable } from "react-icons/cg";

const AssessmentList = () => {
  const asses = [1, 2, 3, 4];
  return (
    <div className="w-11/12 mt-2 rounded-lg bg-white min-h-[99%] mx-auto">
      <h2 className="text-base  font-bold text-center py-3 ">
        Recent Assessments Completed
      </h2>
      {asses.map(() => {
        return (
          <>
            <div className="flex gap-2 px-3 py-1 mt-2">
              <div className="min-w-[2.5rem] h-10 bg-amber-500 self-center rounded-lg"></div>
              <div className="ml-1 mt-1">
                <h2 className="text-sm  font-bold  py-1 ">Software Engineer</h2>
                <h2 className="text-sm  font-normal  pb-2">
                  Google <p className="text-gray-400 inline">in Pune,India</p>
                </h2>
              </div>
            </div>
            <div className="flex px-3 pb-3 mt-2 justify-between">
              <div className="flex gap-6">
                <button className="rounded-lg bg-gray-100 p-1 text-base font-dmSans font-base">
                  View
                </button>
                <button className="rounded-lg p-1  bg-gray-100 self-center">
                  <CgUnavailable className="text-gray-400 text-lg" />
                </button>
              </div>

              <p className="text-sm  font-normal text-gray-400">1 week ago</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default AssessmentList;
