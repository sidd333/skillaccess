import React, { useState } from "react";
import Header from "./Header";

import Footer from "./Footer";

const AddParagraph = () => {
  const [ques, setQues] = useState([1, 2]);
  return (
    <div>
      <Header />
      <div className="bg-white min-h-[90vh] w-[98%] mx-auto rounded-xl pt-4 font-dmSans">
        <div className=" sm:w-[95.7%] mx-auto ">
          <div className="w-[49%]">
            <h2 className="font-bold mb-2">Question</h2>
            <select
              name=""
              id=""
              className="w-full rounded-lg bg-gray-100 focus:outline-none border-none mb-4  select text-lg"
            >
              <option value="" className="">
                Time to answer the question
              </option>
            </select>
          </div>

          <textarea
            className="resize-none w-full h-full text-lg bg-gray-100 border-none focus:outline-none rounded-lg focus:ring-0placeholder-gray-400 mb-6"
            placeholder="Enter Paragraph"
          ></textarea>

          {ques.map(() => (
            <textarea
              className="resize-none w-full h-full text-lg bg-gray-100 border-none focus:outline-none  mb-3 rounded-lg focus:ring-0placeholder-gray-400"
              placeholder="Enter Question Here"
            ></textarea>
          ))}
        </div>

        <Footer ques={ques} setQues={setQues} />
      </div>
    </div>
  );
};

export default AddParagraph;
