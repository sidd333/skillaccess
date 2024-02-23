import React from "react";
import Header from "./Header";

const CreateTopic = () => {
  return (
    <div className="pt-8 w-11/12 mx-auto font-dmSans">
      <Header />

      <div className="  w-full mx-auto h-[90vh] my-2 rounded-lg  justify-between  ">
        <h2 className="w-full font-medium  text-gray-400 sm:h-10 py-2 sm:mt-12  mt-4 rounded-lg mb-10 sm:mb-1 text-lg">
          Add up to 10 custom questions to your assessment (optional). You can
          use five question types: multiple-choice, essay, video and code.
        </h2>

        <input
          type="text"
          className="w-full bg-gray-100 h-16 px-6 text-lg font-bold py-2 mt-12 rounded-lg focus:outline-0 focus:ring-blued focus:ring-1 border-none placeholder-gray-400"
          placeholder="Name of the Assessment"
        />

        <input
          type="text"
          className="w-full bg-gray-100 h-16 px-6 text-lg font-bold py-8 mt-4 rounded-lg focus:outline-0 focus:ring-blued focus:ring-1 border-none placeholder-gray-400"
          placeholder="No. of Questions"
        />
        <input
          type="text"
          className="w-full bg-gray-100 h-16 px-6 text-lg font-bold py-8 mt-4 rounded-lg focus:outline-0 focus:ring-blued focus:ring-1 border-none placeholder-gray-400"
          placeholder="Set Duration"
        />
        <textarea
          className="w-full bg-gray-100 h-48 px-6 text-lg font-bold py-8 mt-4 rounded-lg focus:outline-0 focus:ring-blued focus:ring-1 resize-none border-none placeholder-gray-400"
          placeholder="Add Description"
        />
      </div>
    </div>
  );
};

export default CreateTopic;