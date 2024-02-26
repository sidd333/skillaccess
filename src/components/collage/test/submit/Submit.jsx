import React, { useState } from "react";
import Header from "./Header";
import { Progress } from "./Progress";
import List from "./List";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { createTest } from "../../../../redux/collage/test/testSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Submit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { name, description, topics, totalAttempts } = useSelector(
    (state) => state.test
  );

  const [questions, setQuestions] = useState();
  useEffect(() => {
    let section1 = topics[0]?.questions || [];
    let section2 = topics[1]?.questions || [];
    let section3 = topics[2]?.questions || [];
    let section4 = topics[3]?.questions || [];
    let section5 = topics[4]?.questions || [];

    console.log(section1, section2, section3, section4, section5);

    setQuestions([
      ...section1,
      ...section2,
      ...section3,
      ...section4,
      ...section5,
    ]);

    console.log(questions);
  }, []);

  const handleSubmit = () => {
    // dispatch(setTest({
    //   totalTime,
    //   totalQuestions,
    //   totalAttempts
    // }

    dispatch(
      createTest({
        name,
        description,
        totalAttempts,
        topics,
      })
    ).then(() => navigate("/collage/test/final"));
  };

  const max = Math.ceil(questions?.length / 10);
  const [selected, setSelected] = useState(1);

  return (
    <div className="w-11/12 mx-auto relative    min-h-[90vh] pb-20">
      <Header page={"final"} handleSubmit={handleSubmit} />
      <div className="w-4/5 mx-auto">
        <Progress />
      </div>
      <div className="mt-16">
        {questions
          ?.slice((selected - 1) * 10 + (selected > 1 ? 1 : 0), selected * 10)
          .map((question, i) => {
            return (
              <div className="my-2">
                <List
                  question={question}
                  number={(selected - 1) * 10 + 1 + i}
                />{" "}
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

export default Submit;
