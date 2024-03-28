import React from "react";

const Question = ({ question, handleChanges, handleQuestionChange }) => {
  return (
    <div className="h-96 font-dmSans">
      <h2 className="font-bold text-xl">Question</h2>
      <select
        name="codeLanguage"
        value={question.codeLanguage}
        onChange={handleChanges}
        id=""
        className="w-full rounded-lg bg-gray-100 focus:outline-none border-none mb-4 mt-3 select text-gray-400"
      >
        <option value="">Select Language</option>
        <option value="Java">Java</option>
        <option value="Python">Python</option>
        <option value="C++">C++</option>
        <option value="C">C</option>
      </select>
      <select
              name="Duration"
              onChange={handleChanges}
              value={question.Duration}
              id=""
              className="w-full rounded-lg bg-gray-100 focus:outline-none border-none mb-4  select text-gray-400"
            >
              <option value={0}>Time to answer the question</option>
              <option value={15}>15 minutes</option>
              <option value={30}>30 minute</option>
              <option value={60}>60 minutes</option>
              <option value={90}>90 minutes</option>
         
            </select>

      <textarea
        className="resize-none w-full h-full bg-gray-100 border-none focus:outline-none rounded-lg focus:ring-0 placeholder-gray-400"
        placeholder="Enter Question Here"
        name="codeQuestion"
        value={question.codeQuestion}
        onChange={handleChanges}
      ></textarea>
    </div>
  );
};

export default Question;
