import React from "react";
import { CgStopwatch } from "react-icons/cg";

const Description = () => {
  return (
    <div className="bg-[#8F92A1] font-dmSans rounded-lg bg-opacity-5 p-5 my-3">
      <h2 className="font-bold mb-3">Test Description</h2>

      {/* card */}
      <div className="flex-wrap gap-8">
        <div className="w-64 h-40 bg-white rounded-2xl p-4">
          <h2 className="font-bold mb-3">UX Basic Laws</h2>
          <p className="text-xs text-gray-400 line-clamp-4 mb-4">
            Your platform is made up of 4 main elements, and the importance of
            your platform is unparalleled because Lorem ipsum dolor sit amet,
            consectetur adipiscing
          </p>
          <span className="flex justify-between">
            <div className="text-gray-400 flex gap-1">
              <CgStopwatch className="text-xl" />{" "}
              <p className="text-xs self-center"> 10 mins</p>
            </div>

            <p className="text-xs self-center text-blue-500 tracking-[-0.4px]">
              Multiple Choice Questions
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Description;
