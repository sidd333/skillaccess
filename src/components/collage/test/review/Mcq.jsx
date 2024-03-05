import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { PiFileTextBold } from "react-icons/pi";
import { IoSwapVerticalSharp } from "react-icons/io5";
import { PiPencilSimpleLineBold } from "react-icons/pi";
import { CiBookmarkMinus } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { removeQuestion } from "../../../../redux/collage/test/testSlice";
import { useSearchParams } from "react-router-dom";

const Mcq = ({ Title, Options, Number, id }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "Title") {
      console.log("name");
      setMcq((prev) => {
        return { ...prev, [name]: [value] };
      });
    } else {
    }
  };
  const [search, setSearch] = useSearchParams();

  const [mcq, setMcq] = useState({ Title: Title, Options: Options });
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(
      removeQuestion({ selfIndex: Number, topicIndex: id, questionType: "mcq" })
    );
  };
  return (
    <div className="mx-6 flex bg-white rounded-lg justify-between my-4">
      <div className="w-11/12 flex flex-col gap-2">
        {search.get("editable") !== "true" ? (
          <h2 className="px-4 font-semibold pt-3 text-base">
            {Number + 1} &nbsp; {Title}
          </h2>
        ) : (
          <input
            onChange={handleChange}
            placeholder="enter new question"
            name="Title"
            value={mcq.Title}
          />
        )}
        <div className="px-5 pb-4 flex flex-col gap-4">
          <span className="flex gap-2">
            <div className="flex w-5 justify-center">
              <input
                type="radio"
                name="answer"
                id="answer"
                className="w-3 h-3 p-[.4rem] checked:bg-none  checked:border checked:border-blue-700 border-blued checked:p-0 border-2  ring-transparent ring-2 checked:ring-blue-700 ring-offset-2   self-center "
              />{" "}
            </div>
            {search.get("editable") !== "true" ? (
              <label for="answer" className="self-center">
                {" "}
                {console.log("options : ", Options)}
                {Options[0]}
              </label>
            ) : (
              <input
                onChange={handleChange}
                placeholder="enter new option"
                name="option0"
                value={Options[0]}
              />
            )}
          </span>
          <span className="flex gap-2">
            <div className="flex w-5 justify-center">
              <input
                type="radio"
                name="answer"
                id="answer"
                className="w-3 h-3 p-[.4rem] checked:bg-none  checked:border checked:border-blue-700 border-blued checked:p-0 border-2  ring-transparent ring-2 checked:ring-blue-700 ring-offset-2   self-center "
              />{" "}
            </div>
            {search.get("editable") !== "true" ? (
              <label for="answer" className="self-center">
                {" "}
                {Options[1]}
              </label>
            ) : (
              <input
                onChange={handleChange}
                placeholder="enter new option"
                name="option1"
                value={Options[1]}
              />
            )}
          </span>
          <span className="flex gap-2">
            <div className="flex w-5 justify-center">
              <input
                onChange={handleChange}
                type="radio"
                name="answer"
                id="answer"
                className="w-3 h-3 p-[.4rem] checked:bg-none  checked:border checked:border-blue-700 border-blued checked:p-0 border-2  ring-transparent ring-2 checked:ring-blue-700 ring-offset-2   self-center "
              />{" "}
            </div>
            {search.get("editable") !== "true" ? (
              <label for="answer" className="self-center">
                {" "}
                {Options[2]}
              </label>
            ) : (
              <input
                placeholder="enter new option"
                name="option2"
                value={Options[2]}
              />
            )}
          </span>
          <span className="flex gap-2">
            <div className="flex w-5 justify-center">
              <input
                type="radio"
                name="answer"
                id="answer"
                className="w-3 h-3 p-[.4rem] checked:bg-none  checked:border checked:border-blue-700 border-blued checked:p-0 border-2  ring-transparent ring-2 checked:ring-blue-700 ring-offset-2   self-center "
              />{" "}
            </div>
            {search.get("editable") !== "true" ? (
              <label for="answer" className="self-center">
                {" "}
                {Options[3]}
              </label>
            ) : (
              <input
                onChange={handleChange}
                placeholder="enter new option"
                name="option3"
                value={Options[3]}
              />
            )}
          </span>
        </div>
      </div>
      <div className="w-[5%] flex flex-col gap-4 text-blued border-s-2 py-1">
        <RxCross1
          className="text-red-500 w-6 h-6 p-1 rounded-lg self-center bg-gray-100"
          onClick={handleDelete}
        />
        {/* <PiFileTextBold className=" w-6 h-6 p-1 rounded-lg bg-gray-100 self-center" /> */}
        {/* <IoSwapVerticalSharp className=" w-6 h-6 p-1 rounded-lg bg-gray-100 self-center" />
        <CiBookmarkMinus className=" w-6 h-6 p-1 rounded-lg bg-gray-100 self-center" /> */}
        <PiPencilSimpleLineBold
          className=" w-6 h-6 p-1 rounded-lg bg-gray-100 self-center"
          onClick={() => {
            search.set("editable", "true");
            setSearch(search);
          }}
        />
      </div>
    </div>
  );
};

export default Mcq;
