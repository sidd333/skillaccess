import React from "react";

import { FaChevronLeft } from "react-icons/fa";

import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate, useParams } from "react-router-dom";
import {
  addQuestionToTopic,
  clearTopicToBeAdded,
} from "../../../../../redux/collage/test/testSlice";

const Header = ({ selectQuestionType }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const topicToBeAdded = useSelector((state) => state.test.TopicToBeAdded);
  const submit = () => {
    const updatedTopicToBeAdded = {
      ...topicToBeAdded,

      video: {
        videoFile: "", // Set video link to an empty string

        questions: [], // Set questions to an empty array

        long: [],

        short: [],

        // Add other properties if needed
      },
    };
    let mcq = topicToBeAdded.video.questions.reduce((acc, question) => {
      return acc + parseInt(question.Duration);
    }, 0);
    let long = topicToBeAdded.video.long.reduce((acc, question) => {
      return acc + parseInt(question.Duration);
    }, 0);

    let short = topicToBeAdded.video.short.reduce((acc, question) => {
      return acc + parseInt(question.Duration);
    }, 0);
    console.log(mcq);
    let Duration = mcq + long + short;
    dispatch(
      addQuestionToTopic({
        data: { ...topicToBeAdded.video, Duration: Duration },
        id: id,
        type: "video",
      })
    ).then(() => {
      localStorage.setItem(
        "TopicToBeAdded",
        JSON.stringify(updatedTopicToBeAdded)
      );
      navigate("/collage/test/select");
    });
    dispatch(clearTopicToBeAdded);
  };

  const navigate = useNavigate();

  //   const NavHandler = () => {
  //     switch (selectQuestionType) {
  //       case "mcq":
  //         navigate(`/collage/test/video/${id}/addmcq`);

  //         break;

  //       case "short":
  //         navigate(`/collage/test/video/shortlong/${id}?length=short`);

  //         break;

  //       case "long":
  //         navigate(`/collage/test/video/shortlong/${id}?length=long`);

  //         break;

  //       default:
  //         window.alert("please select field");

  //         break;
  //     }
  //   };

  return (
    <div className="flex w-11/12 mx-auto justify-between mb-2 mt-5">
      <div>
        <button className="flex self-center ml-2 rounded-lg  gap-2">
          <button onClick={() => navigate(-1)} className="mt-2 mr-3">
            <FaChevronLeft className=" p-3 rounded-lg h-10 w-10 self-center bg-gray-200" />
          </button>

          <div className="">
            <h2 className="sm:text-xl  text-left font-bold self-center text-3xl font-dmSans ">
              Create Assessment
            </h2>

            <div className="flex gap-2 text-[#567BF9] text-xs font-medium mt-3">
              <h3 className="mr-2">Untitiled Assessments</h3>
              <span>
                <img
                  src="../../../../images/icons/test.png"
                  alt="test"
                  className="w-4 h-4"
                />
              </span>
              <h3 className="mr-2">0 Tests</h3>{" "}
              <span className="w-2 h-2">
                <img
                  src="../../../../images/icons/hourglass.png"
                  alt="test"
                  className=" object-scale-down"
                />
              </span>
              <h3>Add Questions</h3>
            </div>
          </div>
        </button>
      </div>

      <div className="bg-gray-100 rounded-xl mx-2   h-12 flex my-2 ">
        <div className=" flex">
          <button
            className="self-center justify-center flex bg-blue-800 py-3 px-4 rounded-lg text-xs gap-2 text-white"
            onClick={submit}
          >
            Next Step{" "}
            <FaArrowRightLong className="self-center text-lg text-white ml-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
