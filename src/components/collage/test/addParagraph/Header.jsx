import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import {
  addFindAns,
  addFindAnsToTopic,
  addQuestionToTopic,
} from "../../../../redux/collage/test/testSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = ({ question, setQuestion, id, type, addType, section }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSave = () => {
    if (addType === "topic") {
      if (question.Title == "") {
        window.alert("Please enter the question");
      } else if (question.Duration === 0) {
        window.alert("Please enter required time");
        return;
      } else if (question.questions.some((q) => q.question === "")) {
        window.alert("Please enter all questions");
        return;
      } else {
        dispatch(addFindAnsToTopic({ data: question, id: id, type: type }));
        dispatch(addQuestionToTopic({ data: question, id: id, type: type }));
        setQuestion({
          Title: "",
          questions: [],
          Duration: 0,
          section: section,
        });
        navigate(-1);
      }
    } else {
      if (question.Title == "") {
        window.alert("Please enter paragraph");
      } else if (question.questions.some((q) => q.question === "")) {
        window.alert("Please enter all questions");
        return;
      } else {
        dispatch(
          addFindAns({
            data: question,
            id: id,
            type: "findAnswer",
            section: section,
          })
        );
        // dispatch(addQuestionToTopic({ data: question, id: id, type: type }));
        setQuestion({ Title: "", questions: [], Duration: 0 });
        navigate(-1);
      }
    }
  };

  return (
    <div className="flex w-[98%] mx-auto justify-between mb-2 mt-5">
      <div className="h-fit self-center">
        <button className="flex self-center ml-2 rounded-lg  gap-2">
          <button
            onClick={() => navigate(-1)}
            className=" mr-3 self-center bg-white rounded-lg "
          >
            <FaChevronLeft className=" p-3  h-10 w-10 self-center " />
          </button>

          <div className="self-center">
            <h2 className="sm:text-xl  text-left font-bold self-center text-3xl font-dmSans  text-white ">
              Create Assessment
            </h2>
          </div>
        </button>
      </div>

      <div className=" rounded-xl mx-2   h-12 flex my-2 font-dmSans ">
        <div className=" flex gap-2">
          <button className="self-center w-24  justify-center flex text-blue-800 py-2 px-4 rounded-xl font-bold gap-2 bg-white">
            Cancel
          </button>
          <button
            className="self-center w-32 justify-center flex bg-blue-700 py-2 font-bold px-4 rounded-xl gap-2 text-white"
            onClick={handleSave}
            // onClick={() => navigate("/collage/test/preview")}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
