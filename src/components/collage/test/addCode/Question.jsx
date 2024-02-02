import React from "react";

const Question = () => {
  return (
    <div className="h-96 font-dmSans">
      <h2 className="font-bold text-xl">Question</h2>
      <select
        name=""
        id=""
        className="w-full rounded-lg bg-gray-100 focus:outline-none border-none mb-4 mt-3 select text-gray-400"
      >
        <option value="">option</option>
      </select>

      <textarea
        className="resize-none w-full h-full bg-gray-100 border-none focus:outline-none rounded-lg focus:ring-0 placeholder-gray-400"
        placeholder="Enter Question Here"
      ></textarea>
    </div>
  );
};

export default Question;
