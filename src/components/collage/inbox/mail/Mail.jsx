import React, { useEffect } from "react";
import Header from "./Header";
import Left from "./Left";
import View from "./View";
import { useParams } from "react-router-dom";
import Compose from "./Compose";
import { PiArrowCounterClockwiseBold } from "react-icons/pi";
import { FaSortDown } from "react-icons/fa";

const Mail = () => {
  let { type } = useParams();

  return (
    <div className="w-11/12 mx-auto ">
      <Header />

      <div className="bg-lGray bg-opacity-5  p-4 rounded-lg ">
        <div className="w-full bg-white flex mb-2 rounded-xl">
          <div className="w-1/4 h-[4.5rem] flex justify-between px-2">
            <select
              name=""
              id=""
              className="w-1/2 self-center select text-sm font-bold"
            >
              <option value="Primary">Primary</option>
            </select>
            <PiArrowCounterClockwiseBold className="self-center text-sm  text-gray-400 ml-4" />
          </div>
          <div className="w-1 bg-opacity-10 bg-blued rounded  h-14 my-auto"></div>

          <div className="w-3/4 h-[4.5rem] flex px-3">
            {type === ":view" ? (
              <>
                <div className="w-full flex justify-between self-center">
                  <div className="flex gap-2">
                    {/* photo */}
                    <div className="h-10 w-10 rounded-lg bg-blued"></div>
                    {/*  */}

                    <div className="flex gap-1 self-center flex-col">
                      <p className="text-sm font-bold self-center">Reply</p>
                      <span className="flex gap-2">
                        <p className="text-sm font-bold  text-gray-400">to</p>
                        <FaSortDown className="text-gray-400" />
                      </span>
                    </div>
                  </div>

                  {/* icons */}
                  <div className="flex gap-3"></div>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="h-[70vh] w-full flex gap-4">
          <div className="w-1/4 bg-white p-2 overflow-y-scroll rounded-lg">
            <Left />
            <Left />
            <Left />
          </div>
          <div className="w-3/4 bg-white rounded-lg">
            {type === ":view" ? <View /> : <Compose />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
