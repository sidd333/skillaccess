import React, { useEffect, useState } from "react";
import Header from "./Header";

import { FaX } from "react-icons/fa6";
import { FaChevronLeft, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setTest } from "../../../../redux/features/test/testSlice";


const AddMcq = () => {
const dispatch = useDispatch();
const [step , setStep] = useState(1);
const [questions ,setQuestions ] = useState([]);
const [question, setQuestion] = useState({
  Duration : 0,
  QuestionType : "mcq",
  Title: "",
  Options: [],
  AnswerIndex: 0,
})

useEffect(() => {
if (step === 1) {
  console.log("no previous question");
} else {
  console.log("previous question");
  setQuestion(questions[questions.length - step]);
}
}, [step]);





const addQuestion = (question) => {


  if (question.Title === "" || question.Options.length < 4) {
    console.log("empty");
    return;
  }
  if(questions.Option1 === "" || questions.Option2 === "" || questions.Option3 === "" || questions.Option4 === "") {
    console.log("empty");
    return;
  }
  if (question.Duration === 0) {
    console.log("empty");
    return;
  }


 setQuestions([...questions, question]);
  dispatch(setTest({questions}));
  setQuestion({
    Duration : 0,
    QuestionType : "mcq",
    Title: "",
    Options: [{
      Option1: "",
      Option2: "",
      Option3: "",
      Option4: "",
      
    }],
    AnswerIndex: 0,
  });
  console.log(questions);
  setStep(prev => prev + 1);

}

const handleChanges = (e) => {
  const { name, value } = e.target;
  setQuestion({
    ...question,
    [name]: value,
  });

console.log(question);

}



const handlePrev = () => {
 if(step === 1) {
    return;
  }
  else {
    setStep(prev => prev - 1);
  }
}






  return (
    <div>
      <Header questions={questions} />
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
              <option value="D">Time to answer the question</option>

              <option value="1">1 minute</option>
              <option value="2">2 minutes</option>
              <option value="3">3 minutes</option>
              <option value="4">4 minutes</option>
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
                      name="AnswerIndex"
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
                    name={`Options[${0}]`}
                    value={question.Options[0]}
                    onChange={handleChanges}
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
                      name={`AnswerIndex`}
                      id="option3"
                      value={1}
                      onChange={handleChanges}
                      className="w-3 h-3 p-[.4rem] checked:bg-none  checked:border checked:border-blue-700 border-blued checked:p-0 border-2  ring-transparent ring-2 checked:ring-blue-700 ring-offset-2   self-center "
                    />{" "}
                  </div>
                  {/* option input */}
                  <input
                    type="text"
                    placeholder="option 2"
                    name={`Options[${1}]`}
                    value={question.Options[1]}
                    onChange={handleChanges}
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
                      name="AnswerIndex"
                      id="option3"
                      value={2}
                      onChange={handleChanges}
                      className="w-3 h-3 p-[.4rem] checked:bg-none  checked:border checked:border-blue-700 border-blued checked:p-0 border-2  ring-transparent ring-2 checked:ring-blue-700 ring-offset-2   self-center "
                    />{" "}
                  </div>
                  {/* option input */}
                  <input
                    type="text"
                    placeholder="option 3"
                    name={`Options[${2}]`}
                    value={question.Options[2]}
                    onChange={handleChanges}
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
                      name="AnswerIndex"
                      id="option3"
                      value={3}
                      onChange={handleChanges}
                      className="w-3 h-3 p-[.4rem] checked:bg-none  checked:border checked:border-blue-700 border-blued checked:p-0 border-2  ring-transparent ring-2 checked:ring-blue-700 ring-offset-2   self-center "
                    />{" "}
                  </div>
                  {/* option input */}
                  <input
                    type="text"
                    placeholder="option 4"
                    name={`Options[${3}]`}
                    value={question.Options[3]}
                    onChange={handleChanges}
                    className="w-11/12 rounded-lg border-none outline-none focus:outline-none bg-gray-100"
                  />

                  {/*  */}
                  <div className="bg-gray-100 flex justify-center rounded-lg "
       
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
            <button className="self-center justify-center flex bg-gray-200 p-2 rounded-lg text-sm font-bold gap-2 w-32"
            onClick={handlePrev}>
            
              <FaChevronLeft className="self-center" /> Prev
            </button>
          </div>
          <div className=" flex">
            <button className="self-center justify-center flex bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-bold gap-2 "
            onClick={() => addQuestion(question)}>
            
              <FaPlus className="self-center" /> Add Next Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMcq;
