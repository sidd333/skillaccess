import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { createTest } from "../../../../redux/collage/test/testSlice";
import Footer from "./Footer";




const Finalize = () => {
  const navigate = useNavigate();


  const {name,description,topics,totalAttempts} = useSelector((state) => state.test);

  useEffect(() => {
//  console.log(test);
  }, []);
  const dispatch = useDispatch();

  const totalTime =topics?.reduce((acc,topic) => acc + topic.Time,0);
  const totalQuestions = topics?.reduce((acc,topic) => acc + topic.Questions.length,0);


const handleSubmit = () => {
  // dispatch(setTest({
  //   totalTime,
  //   totalQuestions,
  //   totalAttempts
  // }

  dispatch(createTest({
    name,
    description,
    totalAttempts,
    topics,
 }))
 navigate("/collage/test/invite");
  
  
}



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
            {name}
            </div>
          </div>

          <p className="resize-none w-full h-full text-lg bg-gray-100 border-none focus:outline-none rounded-lg  px-7 pt-3 pb-8 focus:ring-0placeholder-gray-400 mb-6">
          {description}
          </p>
{/* Need to all these details below from sections */}
          <div className=" w-full h-full text-lg bg-gray-100   mb-3 rounded-lg flex justify-between px-7 py-4">
            <p>Total time to complete</p>
            <p className="text-[#0052CC]  font-bold">
              {totalTime} mins
            </p>
          </div>

          <div className=" w-full h-full text-lg bg-gray-100   mb-3 rounded-lg flex justify-between px-7 py-4">
            <p>Total number of questions</p>
            <p className="text-[#0052CC]  font-bold">
              {totalQuestions}
            </p>
          </div>

          <div className=" w-full h-full text-lg bg-gray-100   mb-3 rounded-lg flex justify-between px-7 py-4">
            <p>Total attempts allowed</p>
            <p className="text-[#0052CC]  font-bold">
              {totalAttempts}
            </p>
          </div>
        </div>

        <Footer handleNext={handleSubmit} />
      </div>
    </div>
  );
};

export default Finalize;
