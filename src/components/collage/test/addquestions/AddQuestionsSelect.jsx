import React, { useEffect, useState } from "react";
import HeaderSelect from "./HeaderSelect";
import { Progress } from "./Progress";
import { LiaStopwatchSolid } from "react-icons/lia";
import { RxCross1 } from "react-icons/rx";
import { PiPencilSimpleLine } from "react-icons/pi";
import { ImFileText } from "react-icons/im";
import { setTest } from "../../../../redux/features/test/testSlice";
import { useDispatch } from "react-redux";

const AddQuestionsSelect = () => {

const dispatch = useDispatch();
const [selectQuestionType, setSelectQuestionType] = useState("");

useEffect(() => {
  dispatch(setTest({ questionType: selectQuestionType }));
}, [selectQuestionType]);





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
          <div className="w-full flex justify-between bg-gray-100 rounded-lg border border-blued h-20 p-4 my-2"
          onClick={() => setSelectQuestionType("mcq")}>
          
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
          <div className="w-full flex justify-between bg-gray-100 rounded-lg border  h-20 p-4 my-2"
          onClick={() => setSelectQuestionType("code")}>
          
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
              questionType === "essay" && "border-blued "
            }`}
            onClick={() => setSelectQuestionType("essay")}
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

            
         
          <div
            className={`w-full flex justify-between bg-gray-100 rounded-lg border  h-20 p-4 my-2 ${
              questionType === "video" && "border-blued "
            }`}
            onClick={() => setSelectQuestionType("video")}
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
              questionType === "comp" && "border-blued "
            }`}
            onClick={() => setSelectQuestionType("findAnswer")}
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
