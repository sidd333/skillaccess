import React, { useState } from "react";

import Header from "./Header";

import { useDispatch } from "react-redux";

import { addVideo } from "../../../../../redux/collage/test/testSlice";

import { FaX } from "react-icons/fa6";

import { FaChevronLeft, FaPlus } from "react-icons/fa";

import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const LongShortAnswer = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const { id } = useParams();

  const type = searchParams.get("type");

  const addType = searchParams.get("addType");

  const LongShort = searchParams.get("length");

  const [question, setQuestion] = useState({
    id: "aaa",

    Title: "",

    Duration: "",
  });

  const handleChanges = (e) => {
    setQuestion({ ...question, [e.target.name]: e.target.value });
    if (e.target.name === "Duration") {
      setQuestion((prev) => {
        return { ...prev, Duration: e.target.value };
      });
    }
  };

  const handleSave = () => {
    console.log(question);

    if (addType === "topic") {
      // dispatch(addEssayToTopic({ data: question, id: id, type: type }));

      // dispatch(addQuestionToTopic({ data: question, id: id, type: type }));

      setQuestion({ Title: "" });
    } else {
      if (LongShort === "short") {
        dispatch(addVideo({ short: question }));

        // dispatch(addQuestionToTopic({ data: question, id: id, type: type }));

        setQuestion({ Title: "" });
      } else {
        dispatch(addVideo({ long: question }));

        // dispatch(addQuestionToTopic({ data: question, id: id, type: type }));

        setQuestion({ Title: "" });
      }
    }
  };

  return (
    <div>
      <Header
        question={question}
        setQuestion={setQuestion}
        id={id}
        type={type}
        addType={addType}
        LongShort={LongShort}
      />

      <div className="bg-white min-h-[90vh] w-[98%] mx-auto rounded-xl pt-4">
        <div className=" sm:w-[95.7%] mx-auto ">
          <div className="w-[49%]">
            <h2 className="font-bold mb-2">Question</h2>

            <select
              name="Duration"
              onChange={handleChanges}
              value={question.Duration}
              id=""
              className="w-full rounded-lg bg-gray-100 focus:outline-none border-none mb-4  select text-gray-400"
            >
              <option value={0}>Time to answer the question</option>

              <option value={1}>1 minute</option>
              <option value={2}>2 minutes</option>
              <option value={3}>3 minutes</option>
              <option value={4}>4 minutes</option>
            </select>
          </div>

          <textarea
            className="resize-none w-full h-full text-lg bg-gray-100 border-none focus:outline-none rounded-lg focus:ring-0placeholder-gray-400"
            placeholder="Enter Question Here"
            name="Title"
            value={question.Title}
            onChange={handleChanges}
          ></textarea>
        </div>

        <div className="absolute bottom-10 flex right-8 gap-2">
          {" "}
          <div className=" flex gap-2">
            <button className="self-center justify-center flex bg-gray-200 p-2 rounded-lg text-sm font-bold gap-2 w-32">
              <FaChevronLeft className="self-center" /> Prev
            </button>
          </div>
          <div className=" flex">
            <button
              className="self-center justify-center flex bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-bold gap-2 "
              onClick={handleSave}
            >
              <FaPlus className="self-center" /> Add Next Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LongShortAnswer;