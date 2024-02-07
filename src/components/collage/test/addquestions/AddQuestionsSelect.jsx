import React, { useState } from "react";
import HeaderSelect from "./HeaderSelect";
import { Progress } from "./Progress";

const AddQuestionsSelect = () => {
  const [Q, setQ] = useState("mcq");
  return (
    <div className="font-dmSans text-sm font-bold">
      <HeaderSelect Q={Q} />

      <div className="w-4/5 mx-auto">
        <Progress />
      </div>

      <div className="w-11/12 mx-auto mt-20">
        {/* larger screens */}
        <div className="   my-2 rounded-lg tracking-wide justify-between  ">
          <h2 className="font-normal text-xs sm:text-sm text-gray-400  mt-8 tracking-wide ">
            Add up to 10 custom questions to your assessment (optional). You can
            use five question types: multiple-choice, essay, video and code.
          </h2>
        </div>

        <div className="  sm:mt-5 rounded-lg tracking-wide  w-full ">
          {/* mcq */}
          <div
            className={` ${
              Q === "mcq" && "border-blued "
            } w-full flex justify-between bg-gray-100 rounded-lg border  h-20 p-4 my-2`}
          >
            {" "}
            <div className="flex gap-5 font-dmSans w-1/3">
              <div className="w-5 h-5 self-center">
                <input
                  type="radio"
                  name="ques"
                  checked
                  className="w-3 h-3 p-[.4rem] checked:bg-none  checked:border checked:border-blue-700 border-blue-700 checked:p-0 border-2  ring-transparent ring-2 checked:ring-blue-700 ring-offset-2   self-center "
                  onClick={() => setQ("mcq")}
                />
              </div>

              <img
                src="../../images/icons/exam.png"
                alt=""
                className="w-6 h-8 self-center"
              />
              <h2 className="text-xl font-normal self-center">
                Multiple Questions
              </h2>
            </div>
            {/*  */}
            <h2 className="text-xl font-normal self-center">
              One Correct Answer
            </h2>
            <img
              src="../../images/icons/dot.png"
              alt=""
              className="self-center w-5"
            />
          </div>

          {/* code */}
          <div
            className={`w-full flex justify-between bg-gray-100 rounded-lg border  h-20 p-4 my-2 ${
              Q === "code" && "border-blued "
            }`}
          >
            {" "}
            <div className="flex gap-5 font-dmSans w-1/3">
              <div className="w-5 h-5 self-center">
                {" "}
                <input
                  type="radio"
                  name="ques"
                  className="w-3 h-3 p-[.4rem] checked:bg-none  checked:border checked:border-blue-700 border-blue-700 checked:p-0 border-2  ring-transparent ring-2 checked:ring-blue-700 ring-offset-2   self-center "
                  onClick={() => setQ("code")}
                />
              </div>

              <img
                src="../../images/icons/exam.png"
                alt=""
                className="w-6 h-8 self-center"
              />
              <h2 className="text-xl font-normal self-center">Code</h2>
            </div>
            {/*  */}
            <h2 className="text-xl font-normal self-center">
              Programming Questions
            </h2>
            <img
              src="../../images/icons/dot.png"
              alt=""
              className="self-center w-5"
            />
          </div>

          {/* Essay */}
          <div
            className={`w-full flex justify-between bg-gray-100 rounded-lg border  h-20 p-4 my-2 ${
              Q === "essay" && "border-blued "
            }`}
          >
            {" "}
            <div className="flex gap-5 font-dmSans w-1/3">
              <div className="w-5 h-5 self-center">
                <input
                  type="radio"
                  name="ques"
                  className="w-3 h-3 p-[.4rem] checked:bg-none  checked:border checked:border-blue-700 border-blue-700 checked:p-0 border-2  ring-transparent ring-2 checked:ring-blue-700 ring-offset-2   self-center "
                  onClick={() => setQ("essay")}
                />
              </div>
              <img
                src="../../images/icons/exam.png"
                alt=""
                className="w-6 h-8 self-center"
              />
              <h2 className="text-xl font-normal self-center">Essay</h2>
            </div>
            {/*  */}
            <h2 className="text-xl font-normal self-center">
              Open Text Answer
            </h2>
            <img
              src="../../images/icons/dot.png"
              alt=""
              className="self-center w-5"
            />
          </div>
          {/*  */}

          {/* Video*/}
          <div
            className={`w-full flex justify-between bg-gray-100 rounded-lg border  h-20 p-4 my-2 ${
              Q === "video" && "border-blued "
            }`}
          >
            {" "}
            <div className="flex gap-5 font-dmSans w-1/3">
              <div className="w-5 h-5 self-center">
                <input
                  type="radio"
                  name="ques"
                  className="w-3 h-3 p-[.4rem] checked:bg-none  checked:border checked:border-blue-700 border-blue-700 checked:p-0 border-2  ring-transparent ring-2 checked:ring-blue-700 ring-offset-2   self-center "
                  onClick={() => setQ("video")}
                />
              </div>
              <img
                src="../../images/icons/exam.png"
                alt=""
                className="w-6 h-8 self-center"
              />
              <h2 className="text-xl font-normal self-center">Video</h2>
            </div>
            {/*  */}
            <h2 className="text-xl font-normal self-center">
              Record video to answer questions
            </h2>
            <img
              src="../../images/icons/dot.png"
              alt=""
              className="self-center w-5"
            />
          </div>
          {/*  */}

          {/* Find Answer*/}
          <div
            className={`w-full flex justify-between bg-gray-100 rounded-lg border  h-20 p-4 my-2 ${
              Q === "comp" && "border-blued "
            }`}
          >
            {" "}
            <div className="flex gap-5 font-dmSans w-1/3">
              <div className="w-5 h-5 self-center">
                <input
                  type="radio"
                  name="ques"
                  className="w-3 h-3 p-[.4rem] checked:bg-none  checked:border checked:border-blue-700 border-blue-700 checked:p-0 border-2  ring-transparent ring-2 checked:ring-blue-700 ring-offset-2   self-center "
                  onClick={() => setQ("comp")}
                />
              </div>
              <img
                src="../../images/icons/exam.png"
                alt=""
                className="w-6 h-8 self-center"
              />
              <h2 className="text-xl font-normal self-center">Find Answer</h2>
            </div>
            {/*  */}
            <h2 className="text-xl font-normal self-center">
              Read Phrase and Answer them
            </h2>
            <img
              src="../../images/icons/dot.png"
              alt=""
              className="self-center w-5"
            />
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default AddQuestionsSelect;
