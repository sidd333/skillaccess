import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { PiFileTextBold } from "react-icons/pi";
import { IoSwapVerticalSharp } from "react-icons/io5";
import { PiPencilSimpleLineBold } from "react-icons/pi";
import { CiBookmarkMinus } from "react-icons/ci";
import { useDispatch } from "react-redux";
import {
  editQuestion,
  removeQuestion,
} from "../../../../redux/collage/test/testSlice";
import ReactPlayer from "react-player";
import { useSearchParams } from "react-router-dom";

const Video = ({ Number, id, video, type, view }) => {
  const [search, setSearch] = useSearchParams();
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(
      removeQuestion({
        selfIndex: Number,
        topicIndex: id,
        questionType: "compiler",
      })
    );
  };

  const [mcq, setMcq] = useState({ Title: "", Options: [1, 2, 3, 4] });
  const handleChange = (e) => {
    const { name, value, key } = e.target;
    if (name === "Title") {
      console.log("name");
      setMcq((prev) => {
        return { ...prev, [name]: [value] };
      });
    } else {
      console.log(key);
      setMcq((prev) => {
        return {
          ...prev,
          Options: [
            ...prev.Options.slice(0, name),
            value,
            ...prev.Options.slice(name + 1),
          ],
        };
      });
    }
  };
  return (
    <div className="mx-6 flex bg-white rounded-lg justify-between">
      <div className="w-11/12 flex flex-col gap-2">
        <h2 className="px-4 font-semibold pt-3 text-base">
          {Number + 1} &nbsp;
        </h2>
        <div className="px-5 pb-4 flex flex-col gap-4">
          <span className="flex gap-2">
            <div className="flex w-5 justify-center">
              {/* <input
                type="radio"
                name="answer"
                id="answer"
                className="w-3 h-3 p-[.4rem] checked:bg-none  checked:border checked:border-blue-700 border-blued checked:p-0 border-2  ring-transparent ring-2 checked:ring-blue-700 ring-offset-2   self-center "
              />{" "} */}
            </div>
            <ReactPlayer url={video.videoFile} controls />

            {video?.questions?.length > 0 &&
              video.questions.map(() => {
                return (
                  <div className="mx-6 flex bg-white rounded-lg justify-between my-4">
                    <div className="w-11/12 flex flex-col gap-2">
                      {search.get(`${Number}`) !== "true" ? (
                        <h2 className="px-4 font-semibold pt-3 text-base">
                          {Number + 1} &nbsp;
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
                              id="answer"
                              className="w-3 h-3 p-[.4rem] checked:bg-none  checked:border checked:border-blue-700 border-blued checked:p-0 border-2  ring-transparent ring-2 checked:ring-blue-700 ring-offset-2   self-center "
                            />{" "}
                          </div>
                          {search.get(`${Number}`) !== "true" ? (
                            <label for="answer" className="self-center">
                              {" "}
                              {/* {Options[0]} */}
                            </label>
                          ) : (
                            <input
                              onChange={handleChange}
                              placeholder="enter new option"
                              name={0}
                              // value={mcq.Options[0]}
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
                          {search.get(`${Number}`) !== "true" ? (
                            <label for="answer" className="self-center">
                              {" "}
                              {/* {Options[1]} */}
                            </label>
                          ) : (
                            <input
                              onChange={handleChange}
                              placeholder="enter new option"
                              name={1}
                              // value={mcq.Options[1]}
                            />
                          )}
                        </span>
                        <span className="flex gap-2">
                          <div className="flex w-5 justify-center">
                            <input
                              type="radio"
                              id="answer"
                              className="w-3 h-3 p-[.4rem] checked:bg-none  checked:border checked:border-blue-700 border-blued checked:p-0 border-2  ring-transparent ring-2 checked:ring-blue-700 ring-offset-2   self-center "
                            />{" "}
                          </div>
                          {search.get(`${Number}`) !== "true" ? (
                            <label for="answer" className="self-center">
                              {" "}
                              {/* {Options[2]} */}
                            </label>
                          ) : (
                            <input
                              onChange={handleChange}
                              name={2}
                              placeholder="enter new option"
                              // value={mcq.Options[2]}
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
                          {search.get(`${Number}`) !== "true" ? (
                            <label for="answer" className="self-center">
                              {" "}
                              {/* {Options[3]} */}
                            </label>
                          ) : (
                            <input
                              onChange={handleChange}
                              placeholder="enter new option"
                              name={3}
                              // value={mcq.Options[3]}
                            />
                          )}
                        </span>
                      </div>
                    </div>
                    {type !== "topic" && view !== "false" && (
                      <div className="w-[5%] flex flex-col gap-4 text-blued border-s-2 py-1">
                        <RxCross1
                          className="text-red-500 w-6 h-6 p-1 rounded-lg self-center bg-gray-100"
                          onClick={handleDelete}
                        />
                        {/* <PiFileTextBold className=" w-6 h-6 p-1 rounded-lg bg-gray-100 self-center" /> */}
                        {/* <IoSwapVerticalSharp className=" w-6 h-6 p-1 rounded-lg bg-gray-100 self-center" />
        <CiBookmarkMinus className=" w-6 h-6 p-1 rounded-lg bg-gray-100 self-center" /> */}

                        {search.get(`${Number}`) !== "true" ? (
                          <PiPencilSimpleLineBold
                            className=" w-6 h-6 p-1 rounded-lg bg-gray-100 self-center"
                            onClick={() => {
                              search.set(`${Number}`, "true");
                              setSearch(search);
                            }}
                          />
                        ) : (
                          <PiPencilSimpleLineBold
                            className=" w-6 h-6 p-1 rounded-lg bg-amber-600 self-center"
                            onClick={() => {
                              search.set(`${Number}`, "false");
                              setSearch(search);
                              dispatch(
                                editQuestion({
                                  topicIndex: id,
                                  selfIndex: Number,
                                  questionType: "mcq",
                                  question: mcq,
                                })
                              );
                            }}
                          />
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            {video?.long?.length > 0 && video.long.map(() => {})}
            {video?.short?.length > 0 && video.short.map(() => {})}

            <label for="answer" className="self-center">
              {" "}
            </label>
          </span>
        </div>
      </div>
      {type !== "topic" && view !== "false" && (
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
      )}
    </div>
  );
};

export default Video;
