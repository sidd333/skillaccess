import React from "react";
import Header from "./Header";

import { FaArrowLeftLong, FaArrowRightLong, FaX } from "react-icons/fa6";
import { FaArrowLeft, FaChevronLeft, FaPlus } from "react-icons/fa";

const AddMcq = () => {
  return (
    <div>
      <Header />
      <div className="bg-white min-h-[90vh] w-[98%] mx-auto rounded-xl pt-4">
        <div className="flex flex-wrap gap-2 sm:w-[95.7%] mx-auto ">
          <span className="w-[49%] ">
            <h2 className="font-bold">Question</h2>
            <select
              name=""
              id=""
              className="w-full rounded-lg bg-gray-100 focus:outline-none border-none mb-4  select text-gray-400"
            >
              <option value="">option</option>
            </select>

            <textarea
              className="resize-none w-full h-full bg-gray-100 border-none focus:outline-none rounded-lg focus:ring-0 placeholder-gray-400"
              placeholder="Enter Question Here"
            ></textarea>
          </span>
          <span className="w-[49%]">
            <h2 className="font-bold">Test Description</h2>
            <div className="w-11/12 flex flex-col gap-2">
              <div className="px-5 pb-4 flex flex-col gap-4">
                {/* mcq option wrapper */}
                <span className="flex gap-2">
                  {/*  */}
                  {/* radio button */}
                  <div className="flex w-5 justify-center">
                    <input
                      type="radio"
                      name="answer"
                      id="answer"
                      className="w-3 h-3 p-[.4rem] checked:bg-none  checked:border checked:border-blue-700 border-blued checked:p-0 border-2  ring-transparent ring-2 checked:ring-blue-700 ring-offset-2   self-center "
                    />{" "}
                  </div>
                  {/* option input */}
                  <input
                    type="text"
                    placeholder="option"
                    className="w-11/12 rounded-lg border-none outline-none focus:outline-none bg-gray-100"
                  />

                  {/*  */}
                  <div className="bg-gray-100 flex justify-center rounded-lg ">
                    <FaX className="self-center mx-2" />
                  </div>
                </span>

                <span className="flex gap-2">
                  {/*  */}
                  {/* radio button */}
                  <div className="flex w-5 justify-center">
                    <input
                      type="radio"
                      name="answer"
                      id="answer"
                      className="w-3 h-3 p-[.4rem] checked:bg-none  checked:border checked:border-blue-700 border-blued checked:p-0 border-2  ring-transparent ring-2 checked:ring-blue-700 ring-offset-2   self-center "
                    />{" "}
                  </div>
                  {/* option input */}
                  <input
                    type="text"
                    placeholder="option"
                    className="w-11/12 rounded-lg border-none outline-none focus:outline-none bg-gray-100"
                  />

                  {/*  */}
                  <div className="bg-gray-100 flex justify-center rounded-lg ">
                    <FaX className="self-center mx-2" />
                  </div>
                </span>

                <span className="flex gap-2">
                  {/*  */}
                  {/* radio button */}
                  <div className="flex w-5 justify-center">
                    <input
                      type="radio"
                      name="answer"
                      id="answer"
                      className="w-3 h-3 p-[.4rem] checked:bg-none  checked:border checked:border-blue-700 border-blued checked:p-0 border-2  ring-transparent ring-2 checked:ring-blue-700 ring-offset-2   self-center "
                    />{" "}
                  </div>
                  {/* option input */}
                  <input
                    type="text"
                    placeholder="option"
                    className="w-11/12 rounded-lg border-none outline-none focus:outline-none bg-gray-100"
                  />

                  {/*  */}
                  <div className="bg-gray-100 flex justify-center rounded-lg ">
                    <FaX className="self-center mx-2" />
                  </div>
                </span>

                <span className="flex gap-2">
                  {/*  */}
                  {/* radio button */}
                  <div className="flex w-5 justify-center">
                    <input
                      type="radio"
                      name="answer"
                      id="answer"
                      className="w-3 h-3 p-[.4rem] checked:bg-none  checked:border checked:border-blue-700 border-blued checked:p-0 border-2  ring-transparent ring-2 checked:ring-blue-700 ring-offset-2   self-center "
                    />{" "}
                  </div>
                  {/* option input */}
                  <input
                    type="text"
                    placeholder="option"
                    className="w-11/12 rounded-lg border-none outline-none focus:outline-none bg-gray-100"
                  />

                  {/*  */}
                  <div className="bg-gray-100 flex justify-center rounded-lg ">
                    <FaX className="self-center mx-2" />
                  </div>
                </span>
                {/* add button and shuffle container */}
                <div className="flex justify-between">
                  <button className="flex w-1/5 bg-gray-100 rounded-xl  font-boldgap-2 justify-center py-3">
                    <FaPlus className="self-center" /> Add
                  </button>
                  <span className="self-center">
                    <input type="checkbox" className="mr-2" />{" "}
                    <label className="">Shuffle Answers</label>
                  </span>
                </div>
              </div>
            </div>
          </span>
        </div>
        <div className="absolute bottom-10 flex right-8 gap-2">
          {" "}
          <div className=" flex gap-2">
            <button className="self-center justify-center flex bg-gray-200 p-2 rounded-lg text-sm font-bold gap-2 w-32">
              <FaChevronLeft className="self-center" /> Prev
            </button>
          </div>
          <div className=" flex">
            <button className="self-center justify-center flex bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-bold gap-2 ">
              <FaPlus className="self-center" /> Add Next Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMcq;
