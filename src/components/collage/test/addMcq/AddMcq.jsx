import React, { useEffect, useState } from "react";
import Header from "./Header";

import { FaX } from "react-icons/fa6";
import { FaChevronLeft, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  setTest,
  setMcq,
  addMcq,
} from "../../../../redux/collage/test/testSlice";
import { useNavigate, useParams } from "react-router-dom";

const AddMcq = () => {
  const { currentTopic, topics } = useSelector((state) => state.test);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // section Id
  const { id } = useParams();

  const [step, setStep] = useState(1);
  const [click, setClick] = useState(false);

  const { test } = useSelector((state) => state.test);
  let index = null;
  const [question, setQuestion] = useState({
    Duration : 0,
    Title: "",
    Options: [],
    QuestionType: "",
    AnswerIndex: null,
  });

  // const [questions, setQuestions] = useState(
  //   test.questions || [
  //     {
  //       Duration: 0,
  //       QuestionType: "mcq",
  //       Title: "",
  //       Options: {},
  //       AnswerIndex: 0,
  //     },
  //   ]
  // );

  // useEffect(() => {
  //   setQuestion({
  //     Duration: 0,
  //     QuestionType: "mcq",
  //     Title: "",
  //     Options: {},
  //     AnswerIndex: 0,
  //   });

  //   setClick(false);
  // }, [click]);

  // useEffect(() => {
  //   if (step === 1) {
  //     console.log("no previous question");
  //   } else {
  //     console.log("previous question");
  //     setQuestion(questions[questions.length - step]);
  //   }
  // }, [step]);

  // const addQuestion = () => {
  //   // Ensure question title is not empty
  //   if (!question.Title.trim()) {
  //     alert("Please enter a question title.");
  //     return;
  //   }

  //   // Ensure at least two options are provided
  //   if (
  //     Object.keys(question.Options).filter(
  //       (key) => question.Options[key].trim() !== ""
  //     ).length < 2
  //   ) {
  //     alert("Please provide at least two options.");
  //     return;
  //   }

  //   // Ensure the correct answer index is within the range of options
  //   if (
  //     question.AnswerIndex < 0 ||
  //     question.AnswerIndex >= Object.keys(question.Options).length
  //   ) {
  //     alert("Invalid answer index.");
  //     return;
  //   }

  //   // Create a new question object with the current state
  //   const newQuestion = { ...question };

  //   // Update the questions state by adding the new question
  //   setQuestions([...questions, newQuestion]);

  //   console.log("id", sectionId);

  //   dispatch(setMcq({ sectionId, questions: questions }));

  //   // Dispatch the updated questions to the Redux store
  //   // dispatch(setTest({ questions: [...questions, newQuestion] }));
  //   // dispatch(setTest({sections : test.sections[id]}))

  //   // Clear the question state for the next question
  //   const clearedOptions = {
  //     Options0: "",
  //     Options1: "",
  //     Options2: "",
  //     Options3: "",
  //   };

  //   setQuestion({
  //     Duration: 0,
  //     QuestionType: "mcq",
  //     Title: "",
  //     Options: clearedOptions,
  //     AnswerIndex: 0,
  //   });
  //   setClick(true);

  //   // Increment the step counter
  //   setStep((prevStep) => prevStep + 1);
  // };

  // const handleChanges = (e) => {
  //   const { name, value } = e.target;

  //   if (name.includes("Options")) {
  //     setQuestion({
  //       ...question,
  //       Options: {
  //         ...question.Options,
  //         [name]: value, // Update the specific option based on the input name
  //       },
  //     });
  //   } else {
  //     setQuestion({
  //       ...question,
  //       [name]: value,
  //     });
  //   }

  //   console.log(questions, "questions");
  // };

  const handlePrev = () => {
    if (step === 1) {
      return;
    } else {
      setStep((prev) => prev - 1);
    }
  };

  const handleChanges = (e) => {
    // console.log(question);
    if (e.target.name === "Title") {
      setQuestion((prev) => {
        // console.log({ ...prev, Title: e.target.value });
        return { ...prev, Title: e.target.value };
      });
    } else if(e.target.name === "Duration") {
      setQuestion((prev) => {
        return { ...prev, Duration: e.target.value };
      });
    }
    else {
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

  return (
    <div>
      <Header question={question} setQuestion={setQuestion} />
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

            <textarea
              className="resize-none w-full h-full bg-gray-100 border-none focus:outline-none rounded-lg focus:ring-0 placeholder-gray-400"
              placeholder="Enter Question Here"
              name="Title"
              onChange={handleChanges}
              value={question.Title}
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
            <button
              className={`self-center justify-center flex ${
                step === 1 ? " bg-gray-200" : " bg-blue-200"
              } p-2 rounded-lg text-sm font-bold gap-2 w-32`}
              // onClick={handlePrev}
              onClick={() => navigate(-1)}
            >
              <FaChevronLeft className="self-center" /> Prev
            </button>
          </div>
          <div className=" flex">
            <button
              className="self-center justify-center flex bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-bold gap-2 "
              // onClick={addQuestion}
              onClick={() => {
                if (question.Title === "" ) {
                  window.alert("Please enter question");
                  return;
                }
                if (question.Options &&  question.Options.length < 4) {
            
                  window.alert("Please enter atleast 4 options");
                  return;
                }
                if(question.Duration===0){
                  window.alert("Please enter required time");
                  return;
                }
                else{
                  dispatch(addMcq({ question: question, id: id }));
                  setQuestion({ Title: "", Options: [] , Duration : 0 });
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

export default AddMcq;
