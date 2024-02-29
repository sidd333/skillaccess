import React, { useEffect, useState } from "react";
import Header from "./Header";
import { LiaStopwatchSolid } from "react-icons/lia";
import Mcq from "./Mcq";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import FindAnswer from "./FindAnswer";
import Essay from "./Essay";
import Code from "./Code";
const { getTopicById } = require("../../../../redux/collage/test/testSlice");

const Review = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [questions, setQuestions] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type");
  const questionType = searchParams.get("question");
  // console.log(questionType);
  useEffect(() => {
    if (type === "section") {
      const topics = JSON.parse(localStorage.getItem("topics"));
      // const { currentTopic } = useSelector((state) => state.test);
      questionType === "mcq" && setQuestions(topics[id].questions);
      questionType === "findAnswer" && setQuestions(topics[id].findAnswers);
      questionType === "essay" && setQuestions(topics[id].essay);
      questionType === "video" && setQuestions(topics[id].video);
      questionType === "compiler" && setQuestions(topics[id].compiler);
    } else {
      questionType === "mcq" &&
        setQuestions(JSON.parse(localStorage.getItem("Details")).questions);
      questionType === "findAnswer" &&
        setQuestions(JSON.parse(localStorage.getItem("Details")).findAnswers);
      questionType === "essay" &&
        setQuestions(JSON.parse(localStorage.getItem("Details")).essay);
      questionType === "video" &&
        setQuestions(JSON.parse(localStorage.getItem("Details")).video);
      questionType === "compiler" &&
        setQuestions(JSON.parse(localStorage.getItem("Details")).compiler);
    }
  }, []);

  // useEffect(
  //   () => {
  //     dispatch(getTopicById(id)).then(() =>
  //       setQuestions(currentTopic.questions)
  //     );
  //     console.log(currentTopic, "currentTopic", id);
  //   },
  //   [dispatch],
  //   []
  // );
  // update the topic from topics array where the id matches the id in the url
  // for (let i = 0; i < topics.length; i++) {
  //   if (topics[i]._id === id) {
  //   topics[i].questions = newQuestions;
  //   }
  // }

  return (
    <div className="font-dmSans text-sm font-bold">
      <Header
        qt={questionType}
        id={
          localStorage.getItem("Topics")
            ? JSON.parse(localStorage.getItem("Topics"))._id
            : ""
        }
        type={type}
        sectionId={
          localStorage.getItem("Details")
            ? JSON.parse(localStorage.getItem("Details"))._id
            : ""
        }
      />

      <div className="  w-11/12 mx-auto min-h-[90vh] my-2 rounded-lg   bg-gray-100 ">
        <div className="flex justify-between p-4">
          <span className="flex gap-2 pl-2">
            <h2>{questionType}</h2>
            <div className="flex gap-1 ">
              <LiaStopwatchSolid className="self-center text-gray-500 w-5 h-5" />
              <p className="text-gray-400 text-xs self-center">10 mins</p>
            </div>
          </span>
          {/* <span className="flex">
            <input
              type="checkbox"
              name="delete"
              className="self-center bg-[#DEEBFF] border-none rounded-md"
            />
            <label for="delete" className="pl-2">
              Delete Selected
            </label>
          </span> */}
        </div>

        {questionType === "mcq" ? (
          questions?.length > 0 ? (
            questions.map((question, i) => {
              // console.log(question);
              return (
                <Mcq
                  Number={i}
                  Title={question.Title}
                  Options={question.Options}
                  AnswerIndex={question.AnswerIndex}
                />
              );
            })
          ) : (
            <></>
          )
        ) : questionType === "findAnswer" ? (
          questions?.length > 0 ? (
            questions.map((question, i) => {
              console.log(question);
              return (
                <FindAnswer
                  Number={i}
                  Title={question?.Title || ""}
                  Options={question?.questions || []}
                />
              );
            })
          ) : (
            <></>
          )
        ) : questionType === "essay" ? (
          questions?.length > 0 ? (
            questions.map((question, i) => {
              // console.log(question);
              return <Essay Number={i} Title={question?.Title || ""} />;
            })
          ) : (
            <></>
          )
        ) : questionType === "compiler" ? (
          questions?.length > 0 ? (
            questions.map((question, i) => {
              // console.log(question);
              return (
                <Code
                  Number={i}
                  Title={question?.codeQuestion || ""}
                  code={question?.code}
                />
              );
            })
          ) : (
            <></>
          )
        ) : (
          <>video</>
        )}
      </div>
    </div>
  );
};

export default Review;
