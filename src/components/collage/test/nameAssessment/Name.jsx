import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { Progress } from "./Progress";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllTests,
  setTest,
  setTestBasicDetails,
} from "../../../../redux/collage/test/testSlice";

const Name = () => {
  const dispatch = useDispatch();

  const { name, description, totalAttempts, assessments } = useSelector(
    (state) => state.test
  );
  // const {} = useSelector((state) =>console.log(state.test));
  const navigate = useNavigate();
  const [testDetails, setTestDetails] = useState({
    name: name || "",
    description: description || "",
    totalAttempts: totalAttempts || "",
  });

  useEffect(() => {
    setTestDetails({
      name: name || "",
      description: description || "",
      totalAttempts: totalAttempts || "",
    });
    // why getting 0 here
    console.log(name, description, totalAttempts);
  }, [dispatch]);

  // const getTests = () => {
  //   dispatch(getAllTests());
  //   console.log("hello tests");
  // };

  const handleChange = (e) => {
    setTestDetails({
      ...testDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    let flag = "false";
    if (testDetails.name === "") window.alert("Please enter Name");
    if (assessments.beginner.length > 0) {
      assessments.beginner.forEach((assessment) => {
        if (assessment.name === testDetails.name) {
          flag = "true";
        }
      });

      // console.log(testDetails, name, description, totalAttempts);
    }
    if (flag === "false") {
      dispatch(setTestBasicDetails(testDetails));

      navigate("/collage/test/select");
    } else {
      window.alert("duplicate name");
    }
  };
  return (
    <div className="font-dmSans text-sm font-bold">
      <Header handleNext={handleSubmit} />
      <div className="w-4/5 mx-auto">
        <Progress />
      </div>

      {/* larger screens */}
      <div className="  w-11/12 mx-auto h-[90vh] my-2 rounded-lg  justify-between  ">
        <h2 className="w-full font-medium  text-gray-400 sm:h-10 py-2 sm:mt-12  mt-4 rounded-lg mb-10 sm:mb-1 text-lg">
          Add up to 10 custom questions to your assessment (optional). You can
          use five question types: multiple-choice, essay, video and code.
        </h2>

        <input
          type="text"
          className="w-full bg-gray-100 h-16 px-6 text-lg font-bold py-2 mt-12 rounded-lg focus:outline-0 focus:ring-blued focus:ring-1 border-none placeholder-gray-400"
          placeholder="Name of the Assessment"
          name="name"
          value={testDetails.name}
          onChange={handleChange}
        />
        {/* Will be calculated in backend */}
        {/* <input
          type="text"
          className="w-full bg-gray-100 h-16 px-6 text-lg font-bold py-8 mt-4 rounded-lg focus:outline-0 focus:ring-blued focus:ring-1 border-none placeholder-gray-400"
          placeholder="Set Duration"
        /> */}
        {/* <input
          type="text"
          className="w-full bg-gray-100 h-16 px-6 text-lg font-bold py-8 mt-4 rounded-lg focus:outline-0 focus:ring-blued focus:ring-1 border-none placeholder-gray-400"
          placeholder="No. of Questions"
        /> */}
        <input
          type="text"
          name="totalAttempts"
          className="w-full bg-gray-100 h-16 px-6 text-lg font-bold py-8 mt-4 rounded-lg focus:outline-0 focus:ring-blued focus:ring-1 border-none placeholder-gray-400"
          placeholder="No. of Attempts"
          value={testDetails.totalAttempts}
          onChange={handleChange}
        />

        <textarea
          className="w-full bg-gray-100 h-48 px-6 text-lg font-bold py-8 mt-4 rounded-lg focus:outline-0 focus:ring-blued focus:ring-1 resize-none border-none placeholder-gray-400"
          placeholder="Add Description"
          name="description"
          value={testDetails.description}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Name;
