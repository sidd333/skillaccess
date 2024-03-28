import React, { useState } from "react";
import Header from "./Header";
import { Progress } from "./Progress";
import List from "./List";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  createTest,
  getResponseByTestandStudent,
  getStudentResponse,
  setTestBasicDetails,
  setTestSelectedTopics,
} from "../../../../redux/collage/test/testSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Code from "./Code";
import Video from "./Video";
import Essay from "./Essay";
import HeaderMarks from "./HeaderMarks";

const AssessmentReview = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const testId = searchParams.get("assessmentId");
const studentId = searchParams.get("studentId");
const responseId = searchParams.get("responseId");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {response ,} = useSelector((state) => state.test);

  // const {
  //   level,
  //   name,
  //   description,
  //   topics,
  //   totalAttempts,
  //   totalQuestions,
  //   totalDuration,
  // } = useSelector((state) => state.test);



useEffect(() => {
// dispatch(getResponseByTestandStudent({
//   testId,
//   studentId
// }));

dispatch(getStudentResponse(responseId))


}, [testId, studentId]);

console.log("testId",testId,studentId, response);

const [questions, setQuestions] = useState();
let section1 = [];
let section2 = [];
let section3 = [];
let section4 = [];
let section5 = [];

let topics = response?.topics;
useEffect(() => {
  if (response?.topics && response?.topics.length > 0) {
   if(response?.topics[0]){
    console.log(response)
    console.log("response?.topics[0].",response?.topics[0].Type);
    console.log("response?.topics[1]",response?.topics[1].Type);
    switch (response?.topics[0].Type) {

      case "essay":
        section1 = response?.topics[0].essay;
        break;
      case "video":
        section1 = response?.topics[0].video;
        break;
      case "compiler":
        section1 = response?.topics[0].compiler;
        break;
      case "findAnswer":
        section1 = response?.topics[0].findAnswers;
        break;
      default:
        section1 =response?.topics[0].questions;
        break;
    }
   }
  

     if (response?.topics[1]){
      switch (response?.topics[1].Type) {
        case "essay":
          section2 = response?.topics[1].essay;
          break;
        case "video":
          section2 = response?.topics[1].video;
          break;
        case "compiler":
          section2 = response?.topics[1].compiler;
          break;
        case "findAnswer":
          section2 = response?.topics[1].findAnswers;
          break;
        default:
          section2 = response?.topics[1].questions;
          break;
      }

     }
       
      if (response?.topics[2])
        switch (response?.topics[2].Type) {
          case "essay":
            section3 = response?.topics[2].essay;
            break;
          case "video":
            section3 = response?.topics[2].video;
            break;
          case "compiler":
            section3 = response?.topics[2].compiler;
            break;
          case "findAnswer":
            section3 = response?.topics[2].findAnswers;
            break;
          default:
            section3 = response?.topics[2].questions;
            break;
        }

      if (response?.topics[3])
        switch (response?.topics[3].Type) {
          case "essay":
            section4 = response?.topics[3].essay;
            break;
          case "video":
            section4 = response?.topics[3].video;
            break;
          case "compiler":
            section4 = response?.topics[3].compiler;
            break;
          case "findAnswer":
            section4 = response?.topics[3].findAnswers;
            break;
          default:
            section4 = response?.topics[3].questions;
            break;
        }

      if (response?.topics[4])
        switch (response?.topics[4].Type) {
          case "essay":
            section5 = response?.topics[4].essay;
            break;
          case "video":
            section5 = response?.topics[4].video;
            break;
          case "compiler":
            section5 = response?.topics[4].compiler;
            break;
          case "findAnswer":
            section5 = response?.topics[4].findAnswers;
            break;
          default:
            section5 = response?.topics[4].questions;
            break;
        }

        console.log(section1, section2, section3, section4, section5);

        setQuestions([
          ...section1,
          ...section2,
          ...section3,
          ...section4,
          ...section5,
        ]);

      }




 
}, [response, ""]);



  //   useEffect(() => {
  //     if (topics[0])
  //       switch (topics[0].Type) {
  //         case "essay":
  //           section1 = topics[0].essay;
  //           break;
  //         case "video":
  //           section1 = topics[0].video;
  //           break;
  //         case "compiler":
  //           section1 = topics[0].compiler;
  //           break;
  //         case "findAnswer":
  //           section1 = topics[0].findAnswers;
  //           break;
  //         default:
  //           section1 = topics[0].questions;
  //           break;
  //       }

  //     if (response?.topics[1])
  //       switch (response?.topics[1].Type) {
  //         case "essay":
  //           section2 = response?.topics[1].essay;
  //           break;
  //         case "video":
  //           section2 = response?.topics[1].video;
  //           break;
  //         case "compiler":
  //           section2 = response?.topics[1].compiler;
  //           break;
  //         case "findAnswer":
  //           section2 = response?.topics[1].findAnswers;
  //           break;
  //         default:
  //           section2 = response?.topics[1].questions;
  //           break;
  //       }

  //     if (response?.topics[2])
  //       switch (response?.topics[2].Type) {
  //         case "essay":
  //           section3 = response?.topics[2].essay;
  //           break;
  //         case "video":
  //           section3 = response?.topics[2].video;
  //           break;
  //         case "compiler":
  //           section3 = response?.topics[2].compiler;
  //           break;
  //         case "findAnswer":
  //           section3 = response?.topics[2].findAnswers;
  //           break;
  //         default:
  //           section3 = response?.topics[2].questions;
  //           break;
  //       }

  //     if (response?.topics[3])
  //       switch (response?.topics[3].Type) {
  //         case "essay":
  //           section4 = response?.topics[3].essay;
  //           break;
  //         case "video":
  //           section4 = response?.topics[3].video;
  //           break;
  //         case "compiler":
  //           section4 = response?.topics[3].compiler;
  //           break;
  //         case "findAnswer":
  //           section4 = response?.topics[3].findAnswers;
  //           break;
  //         default:
  //           section4 = response?.topics[3].questions;
  //           break;
  //       }

  //     if (response?.topics[4])
  //       switch (response?.topics[4].Type) {
  //         case "essay":
  //           section5 = response?.topics[4].essay;
  //           break;
  //         case "video":
  //           section5 = response?.topics[4].video;
  //           break;
  //         case "compiler":
  //           section5 = response?.topics[4].compiler;
  //           break;
  //         case "findAnswer":
  //           section5 = response?.topics[4].findAnswers;
  //           break;
  //         default:
  //           section5 = response?.topics[4].questions;
  //           break;
  //       }

  //     console.log(section1, section2, section3, section4, section5);

  //     setQuestions([
  //       ...section1,
  //       ...section2,
  //       ...section3,
  //       ...section4,
  //       ...section5,
  //     ]);
  //   }, [topics, ""]);

  const handleSubmit = () => {};

  const max = questions?.length / 10;
  const [selected, setSelected] = useState(1);

  const [sections, setSections] = useState(response?.topics);


  return (
    <div className="w-11/12 mx-auto relative    min-h-[90vh] pb-20">
      {/* <Header page={"final"} handleSubmit={handleSubmit} /> */}

      <HeaderMarks response={response}  totalQuestions={questions?.length}/>


      <div className="mt-16">
        {questions
          ?.slice((selected - 1) * 10, selected * 10)
          .map((question, i) => {
            return (
              <div className="my-2">
                {question.codeQuestion && (
                  <Code
                    question={question}
                    Title={question.codeQuestion}
                    code={question.code}
                    number={(selected - 1) * 10 + 1 + i}
                  />
                )}
                  {question.videoFile && (
                  <Video
                    Number={(selected - 1) * 10 + 1 + i}
                    video={question}
                  />
                )}
                {( question.questions) || (question.Options) && (!question.codeQuestion) && (!question.videoFile) 
                //  &&
                //   (question.AnswerIndex !== undefined 
                    
                    ? (   !question.videoFile &&
                    <List
                      question={question}
                      number={(selected - 1) * 10 + 1 + i}
                    />
                  ) : (
                  
                    !question.codeQuestion && !question.videoFile && !question.questions && !question.Options && (
                      <Essay
                        question={question}
                        number={(selected - 1) * 10 + 1 + i}
                      />
                    )

                  
                  // )
                  )}
              
              </div>
            );
          })}

        {/* iterate this list */}
      </div>

      <div className="absolute bottom-2 mt-20 flex gap-2 w-full justify-center">
        <div className="rounded-lg bg-gray-100 h-10 w-10 flex justify-center">
          <FaChevronLeft
            className={`rotate-45 text-lg self-center ${
              selected === max && "disabled"
            }`}
            onClick={() => selected !== 1 && setSelected(selected - 1)}
          />
        </div>

        <div
          className={`rounded-lg h-10 w-10 flex justify-center ${
            selected === 1 ? "bg-blue-700 text-white" : "bg-gray-100 "
          }`}
          onClick={() => setSelected(1)}
        >
          <p className="self-center">1</p>
        </div>
        <div
          className={`rounded-lg h-10 w-10 flex justify-center ${
            selected === 2 ? "bg-blue-700 text-white" : "bg-gray-100 "
          }`}
          onClick={() => setSelected(2)}
        >
          <p className="self-center">2</p>
        </div>
        <div
          className={`rounded-lg h-10 w-10 flex justify-center ${
            selected > 2 && selected < max
              ? "bg-blue-700 text-white"
              : "bg-gray-100 "
          }`}
          onClick={() => {
            selected !== 3 && setSelected(3);
          }}
        >
          <p className="self-center">
            {selected >= 3 && selected < max ? selected : 3}
          </p>
        </div>
        <div className="rounded-lg bg-gray-100 h-10 w-10 flex justify-center">
          <p className="self-center">...</p>
        </div>

        {max > 3 && (
          <div
            className={`rounded-lg h-10 w-10 flex justify-center ${
              selected === max ? "bg-blue-700 text-white" : "bg-gray-100 "
            }`}
            onClick={() => setSelected(max)}
          >
            <p className="self-center">{max}</p>
          </div>
        )}

        <div className="rounded-lg bg-gray-100 h-10 w-10 flex justify-center">
          <FaChevronRight
            className={`rotate-45 text-lg self-center ${
              selected === max && "disabled"
            }`}
            onClick={() => selected !== max && setSelected(selected + 1)}
          />
        </div>
      </div>
    </div>
  );
};

export default AssessmentReview;
