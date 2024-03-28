import React, { useEffect, useState } from "react";
import Header from "./Header";

import { FaX } from "react-icons/fa6";
import { FaChevronLeft, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import ReactQuill from "react-quill"; // Import ReactQuill
import "react-quill/dist/quill.snow.css"; // Import Quill styles

import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import {
  addMcqToTopic,
  addQuestionToTopic,
  editQuestionById,
} from "../../../../redux/collage/test/testSlice";
import toast from "react-hot-toast";

const AddMcqToTopic = () => {
  const { currentTopic } = useSelector((state) => state.test);
  const [isPrev, setIsPrev] = useState(false);
  const [countDetail, setCountDetail] = useState(-1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type");
  const [question, setQuestion] = useState({
    Duration: 0,
    id: id + Date.now(),
    Title: "",
    Options: [],
    QuestionType: "",
    AnswerIndex: null,
  });

  // section Id
  const { sectionId } = useParams();
  
  const [step, setStep] = useState(1);

  const handlePrev = () => {
    setIsPrev(true);
    let current = currentTopic?.questions[countDetail];

    setQuestion({ ...current, Duration: parseInt(current.Duration) || 0 });

    setCountDetail((prev) => {
      if (prev - 1 >= 0) return prev - 1;
      return -1;
    });
  };

  const handleChanges = (e) => {
    // console.log(question);
    if (e.target.name === "Title") {
      setQuestion((prev) => {
        // console.log({ ...prev, Title: e.target.value });
        return { ...prev, Title: e.target.value };
      });
    } else if (e.target.name === "Duration") {
      setQuestion((prev) => {
        return { ...prev, Duration: e.target.value };
      });
    } else {
      switch (e.target.name) {
        case "Option1":
          setQuestion((prev) => {
            return {
              ...prev,
              "prev.Options": [
                ...prev.Options,
                (prev.Options[0] = e.target.value),
              ],
            };
          });
          break;

        case "Option2":
          setQuestion((prev) => {
            return {
              ...prev,
              "prev.Options": [
                ...prev.Options,
                (prev.Options[1] = e.target.value),
              ],
            };
          });
          break;
        case "Option3":
          setQuestion((prev) => {
            return {
              ...prev,
              "prev.Options": [
                ...prev.Options,
                (prev.Options[2] = e.target.value),
              ],
            };
          });
          break;

        case "Option4":
          setQuestion((prev) => {
            return {
              ...prev,
              "prev.Options": [
                ...prev.Options,
                (prev.Options[3] = e.target.value),
              ],
            };
          });
          break;

        default:
          setQuestion((prev) => {
            return {
              ...prev,
              AnswerIndex: e.target.value,
            };
          });
          break;
      }
    }
  };

  useEffect(() => {
    console.log(currentTopic);
    setCountDetail(currentTopic.questions.length - 1);
  }, [currentTopic]);
const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  }
  // console.log(question);
  return (
    <div>
      <Header
        question={question}
        setQuestion={setQuestion}
        id={id}
        type={type}
      />
      <div className="bg-white min-h-[90vh] w-[98%] mx-auto rounded-xl pt-4">
        <div className="flex flex-wrap gap-2 sm:w-[95.7%] mx-auto ">
          <span className="w-[49%] ">
            <h2 className="font-bold">Question</h2>
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

            <ReactQuill
              value={question.Title}
              onChange={(value) =>   setQuestion((prev) => {
                // console.log({ ...prev, Title: e.target.value });
                return { ...prev, Title:value };
              })}
              className="bg-gray-100 border-none focus:outline-none rounded-lg focus:ring-0 placeholder-gray-400"
              placeholder="Enter Question Here"
              name="Title"
            
            />
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
                      name="Answer"
                      id="option1"
                      value={0}
                      onChange={handleChanges}
                      className="w-3 h-3 p-[.4rem] checked:bg-none  checked:border checked:border-blue-700 border-blued checked:p-0 border-2  ring-transparent ring-2 checked:ring-blue-700 ring-offset-2   self-center "
                    />{" "}
                  </div>
                  {/* option input */}
                  <input
                    type="text"
                    placeholder="option 1"
                    name="Option1"
                    value={
                      question.Options && question.Options.length > 0
                        ? question.Options[0]
                        : ""
                    }
                    onChange={handleChanges}
                    className="w-11/12 rounded-lg border-none outline-none focus:outline-none bg-gray-100"
                  />

                  {/*  */}
                  <div
                    className="bg-gray-100 flex justify-center rounded-lg "
                    onClick={() =>
                      setQuestion({
                        ...question,
                        "question.Options": [
                          ...question.Options,
                          (question.Options[0] = ""),
                        ],
                      })
                    }
                  >
                    <FaX className="self-center mx-2" />
                  </div>
                </span>

                <span className="flex gap-2">
                  {/*  */}
                  {/* radio button */}
                  <div className="flex w-5 justify-center">
                    <input
                      type="radio"
                      name="Answer"
                      id="option3"
                      value={1}
                      onChange={handleChanges}
                      className="w-3 h-3 p-[.4rem] checked:bg-none  checked:border checked:border-blue-700 border-blued checked:p-0 border-2  ring-transparent ring-2 checked:ring-blue-700 ring-offset-2   self-center "
                    />{" "}
                  </div>
                  {/* option input 2*/}
                  <input
                    type="text"
                    placeholder="option 2"
                    name={`Option2`}
                    value={
                      question.Options && question.Options.length > 0
                        ? question.Options[1]
                        : ""
                    }
                    onChange={handleChanges}
                    className="w-11/12 rounded-lg border-none outline-none focus:outline-none bg-gray-100"
                  />

                  {/*  */}
                  <div
                    className="bg-gray-100 flex justify-center rounded-lg "
                    onClick={() =>
                      setQuestion({
                        ...question,
                        "question.Options": [
                          ...question.Options,
                          (question.Options[1] = ""),
                        ],
                      })
                    }
                  >
                    <FaX className="self-center mx-2" />
                  </div>
                </span>

                <span className="flex gap-2">
                  {/*  */}
                  {/* radio button */}
                  <div className="flex w-5 justify-center">
                    <input
                      type="radio"
                      name="Answer"
                      id="option3"
                      value={2}
                      onChange={handleChanges}
                      className="w-3 h-3 p-[.4rem] checked:bg-none  checked:border checked:border-blue-700 border-blued checked:p-0 border-2  ring-transparent ring-2 checked:ring-blue-700 ring-offset-2   self-center "
                    />{" "}
                  </div>
                  {/* option input 3*/}
                  <input
                    type="text"
                    placeholder="option 3"
                    name={`Option3`}
                    value={
                      question.Options && question.Options.length > 0
                        ? question.Options[2]
                        : ""
                    }
                    onChange={handleChanges}
                    className="w-11/12 rounded-lg border-none outline-none focus:outline-none bg-gray-100"
                  />

                  {/*  */}
                  <div
                    className="bg-gray-100 flex justify-center rounded-lg "
                    onClick={() =>
                      setQuestion({
                        ...question,
                        "question.Options": [
                          ...question.Options,
                          (question.Options[2] = ""),
                        ],
                      })
                    }
                  >
                    <FaX className="self-center mx-2" />
                  </div>
                </span>

                <span className="flex gap-2">
                  {/*  */}
                  {/* radio button */}
                  <div className="flex w-5 justify-center">
                    <input
                      type="radio"
                      name="Answer"
                      id="option3"
                      value={3}
                      onChange={handleChanges}
                      className="w-3 h-3 p-[.4rem] checked:bg-none  checked:border checked:border-blue-700 border-blued checked:p-0 border-2  ring-transparent ring-2 checked:ring-blue-700 ring-offset-2   self-center "
                    />{" "}
                  </div>
                  {/* option input 4*/}
                  <input
                    type="text"
                    placeholder="option 4"
                    name={`Option4`}
                    value={
                      question.Options && question.Options.length > 0
                        ? question.Options[3]
                        : ""
                    }
                    onChange={handleChanges}
                    className="w-11/12 rounded-lg border-none outline-none focus:outline-none bg-gray-100"
                  />

                  {/*  */}
                  <div
                    className="bg-gray-100 flex justify-center rounded-lg "
                    onClick={() =>
                      setQuestion({
                        ...question,
                        "question.Options": [
                          ...question.Options,
                          (question.Options[3] = ""),
                        ],
                      })
                    }
                  >
                    <FaX className="self-center mx-2" />
                  </div>
                </span>
                {/* add button and shuffle container */}
                <div className="flex justify-between">
                  {/* <button className="flex w-1/5 bg-gray-100 rounded-xl  font-boldgap-2 justify-center py-3">
                    <FaPlus className="self-center" /> Add
                  </button>
                  <span className="self-center">
                    <input type="checkbox" className="mr-2" />{" "}
                    <label className="">Shuffle Answers</label>
                  </span> */}
                </div>
              </div>
            </div>
          </span>
        </div>
        <div className="absolute bottom-10 flex right-8 gap-2">
          {" "}
          <div className=" flex gap-2">
            {
              <button
                className={`self-center justify-center flex bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-bold gap-2 ${
                  countDetail >= 0 ? "" : "hidden"
                }`}
                onClick={handlePrev}
              >
                <FaChevronLeft className="self-center" /> Prev
              </button>
            }
          </div>
          <div className=" flex">
            <button
              className="self-center justify-center flex bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-bold gap-2 "
              // onClick={addQuestion}
              onClick={() => {
                // dispatch(
                //   addQuestionToTopic({ data: question, id: id, type: type })
                // );
                // setQuestion({ Title: "", Options: [], id: "aaa" , Duration: 0 });

                if (question.Title === "") {
                  toast.error("Please enter question");
                  return;
                } else if (question.Options && question.Options.length < 4) {
                  toast.error("Please enter atleast 4 options");
                  return;
                } 
                else if (question.AnswerIndex === null) {
                  toast.error("Please select correct answer");
                  return;
                }
                
                else if (
                  question.Options.some((option) => option.trim() === "")
                ) {
                  toast.error("Please enter all options");
                  return;
                } else if (question.Duration == 0) {
                  toast.error("Please enter required time");
                  return;
                } else {
                  if (isPrev) {
                    //api call
                    setIsPrev(false);
                    setCountDetail(currentTopic.questions.length - 1);
                    dispatch(
                      editQuestionById({
                        index: countDetail + 1,
                        type: "mcq",
                        id: question._id,
                        question: question,
                      })
                    );
                    setQuestion({
                      Title: "",
                      Options: [],
                      id: id + Date.now(),
                      Duration: 0,
                    });
                  } else {
                    setIsPrev(false);
                    setCountDetail(currentTopic.questions.length - 1);
                    dispatch(
                      addQuestionToTopic({ data: question, id: id, type: type })
                    );
                    setQuestion({
                      Title: "",
                      Options: [],
                      id: id + Date.now(),
                      Duration: 0,
                    });
                  }
                }
              }}
            >
              <FaPlus className="self-center" /> Add Next Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMcqToTopic;
