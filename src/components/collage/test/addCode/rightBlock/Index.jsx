import React, { useState } from "react";
import Signature from "./Signature";
import Initial from "./Initial";
import TestCases from "./TestCases";
import Verification from "./Verification";

const Code = () => {
  const [toggle, setToggle] = useState(1);
  return (
    <div className="font-dmSans">
      <h2 className="font-bold mb-3 text-xl">Coding Language: Java</h2>

      {/* toggler */}
      <div className="p-2 mt-4 rounded-lg">
        <span className="grid grid-cols-4 text-lg mb-4">
          <div>
            <h2
              className={` w-fit text-center pb-2 hover:cursor-pointer mx-auto `}
              onClick={() => setToggle(1)}
            >
              Function signature
            </h2>
            <div
              className={`w-full h-1 rounded-lg ${
                toggle === 1 ? "bg-[#0052CC]" : ""
              } `}
            ></div>
          </div>

          <div>
            <h2
              className={` w-fit text-center pb-2 hover:cursor-pointer mx-auto `}
              onClick={() => setToggle(2)}
            >
              Initial Code
            </h2>
            <div
              className={`w-full h-1 rounded-lg ${
                toggle === 2 ? "bg-[#0052CC]" : ""
              } `}
            ></div>
          </div>

          <div>
            <h2
              className={` w-fit text-center pb-2 hover:cursor-pointer mx-auto `}
              onClick={() => setToggle(3)}
            >
              Test Cases
            </h2>
            <div
              className={`w-full h-1 rounded-lg ${
                toggle === 3 ? "bg-[#0052CC]" : ""
              } `}
            ></div>
          </div>

          <div>
            <h2
              className={` w-fit text-center pb-2 hover:cursor-pointer mx-auto `}
              onClick={() => setToggle(4)}
            >
              Verification Code
            </h2>
            <div
              className={`w-full h-1 rounded-lg ${
                toggle === 4 ? "bg-[#0052CC]" : ""
              } `}
            ></div>
          </div>
        </span>

        {toggle === 1 ? (
          <Signature />
        ) : toggle === 2 ? (
          <Initial />
        ) : toggle === 3 ? (
          <TestCases />
        ) : (
          <Verification />
        )}
      </div>
    </div>
  );
};

export default Code;
