import React from "react";
import { RxCross1 } from "react-icons/rx";
import { PiFileTextBold } from "react-icons/pi";
import { IoSwapVerticalSharp } from "react-icons/io5";
import { PiPencilSimpleLineBold } from "react-icons/pi";
import { CiBookmarkMinus } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { removeQuestion } from "../../../../redux/collage/test/testSlice";
const FindAnswer = ({ Title, Options, Number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(
      removeQuestion({
        selfIndex: Number,
        topicIndex: id,
        questionType: "findAnswer",
      })
    );
  };
  return (
    <div className="mx-6 flex bg-white rounded-lg justify-between">
      <div className="w-11/12 flex flex-col gap-2">
        <h2 className="px-4 font-semibold pt-3 text-base">
          {Number + 1} &nbsp; {Title}
        </h2>
        <div className="px-5 pb-4 flex flex-col gap-4">
          {Options.map((ques) => (
            <span className="flex gap-2">
              <div className="flex w-5 justify-center">
                <input
                  type="radio"
                  name="answer"
                  id="answer"
                  className="w-3 h-3 p-[.4rem] checked:bg-none  checked:border checked:border-blue-700 border-blued checked:p-0 border-2  ring-transparent ring-2 checked:ring-blue-700 ring-offset-2   self-center "
                />{" "}
              </div>
              <label for="answer" className="self-center">
                {" "}
                {ques.question}
              </label>
            </span>
          ))}
        </div>
      </div>
      <div className="w-[5%] flex flex-col gap-4 text-blued justify-center border-s-2 py-1">
        <RxCross1
          className="text-red-500 w-6 h-6 p-1 rounded-lg self-center bg-gray-100"
          onClick={handleDelete}
        />
        <PiFileTextBold className=" w-6 h-6 p-1 rounded-lg bg-gray-100 self-center" />
        <IoSwapVerticalSharp className=" w-6 h-6 p-1 rounded-lg bg-gray-100 self-center" />
        <CiBookmarkMinus className=" w-6 h-6 p-1 rounded-lg bg-gray-100 self-center" />
        <PiPencilSimpleLineBold className=" w-6 h-6 p-1 rounded-lg bg-gray-100 self-center" />
      </div>
    </div>
  );
};

export default FindAnswer;
