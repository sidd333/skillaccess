import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FaChevronLeft, FaPlus } from "react-icons/fa";
import {
// paragrapgh
addFindAns, addFindAnsToTopic,  addQuestionToTopic,
} from "../../../../redux/collage/test/testSlice";
import { useNavigate, useParams , useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const AddParagraph = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();
  const type = searchParams.get("type");
  const addType =  searchParams.get("addType");
  const [question, setQuestion] = useState({
    id: "aaa",
    Title: "",
    Duration : "",
    questions: [{ question: ""}]
  });

  const handleChanges = (e) => {
    setQuestion({ ...question, [e.target.name]: e.target.value });
  }

  const handleQuestionChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...question.questions];
    list[index][name] = value;
    setQuestion({ ...question, questions: list });
  }


  // React.useEffect(() => {
  //   console.log(question);
  // }, [question]);

  const handleSave = () => {
  if(addType === "topic"){
    dispatch(addFindAnsToTopic({ data: question, id: id, type: type }) )
    dispatch(addQuestionToTopic({ data: question, id: id, type: type }));
    setQuestion({ Title: "",
    questions: [] ,
    });
  }
  else{
    dispatch(addFindAns({ data: question, id: id, type: type }) )
    // Adding to the Test Assessment not a Created Topic
    // dispatch(addQuestionToTopic({ data: question, id: id, type: type }));
    setQuestion({ Title: "",
    questions: [] ,
    });
  }
}





  return (
    <div>
      <Header   question={question}
        setQuestion={setQuestion}
        id={id}
        type={type}/>
      <div className="bg-white min-h-[90vh] w-[98%] mx-auto rounded-xl pt-4 font-dmSans">
        <div className=" sm:w-[95.7%] mx-auto ">
          <div className="w-[49%]">
            <h2 className="font-bold mb-2">Question</h2>
            <select
              name="Duration"
              // onChange={handleChanges}
              // value={questions.Duration}
              id=""
              className="w-full rounded-lg bg-gray-100 focus:outline-none border-none mb-4  select text-gray-400"
            >
              <option value="D">Time to answer the question</option>

              <option value="1">1 minute</option>
              <option value="2">2 minutes</option>
              <option value="3">3 minutes</option>
              <option value="4">4 minutes</option>
            </select>

          </div>

          <textarea
            className="resize-none w-full h-full text-lg bg-gray-100 border-none focus:outline-none rounded-lg focus:ring-0placeholder-gray-400 mb-6"
            placeholder="Enter Paragraph"
            name="Title"
            onChange={handleChanges}
            value={question.Title}
          ></textarea>

        
          {
      question.questions.map((ques, index) => (
        <div key={index} className="mb-4">
            <textarea
              className="resize-none w-full h-full text-lg bg-gray-100 border-none focus:outline-none  mb-3 rounded-lg focus:ring-0placeholder-gray-400"
              placeholder="Enter Question Here"
              name="question"
             
              value={question.questions[index].question}
              onChange={(e) => handleQuestionChange(e, index)}

            ></textarea>
            </div>
))
          }


            {/* <button className="bg-[#F2F2F2] text-black px-4 py-2 rounded-lg focus:outline-none"
            onClick={() => 
            >
              Add more
            </button> */}

        </div>

        {/* <Footer question={question}  setQues={setQuestion} handleSave={handleSave} /> */}
        <div className="pt-20">
      <div className="absolute bottom-10  left-8">
        {" "}
        <div className=" flex">
          <button
            className="self-center justify-center flex bg-[#8F92A1] bg-opacity-10  py-3 px-4 rounded-xl text-sm font-bold gap-2 "
            onClick={() => setQuestion({ ...question, questions: [...question.questions, { question: "" }] })}
          >
            Add More
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 flex right-8 gap-2">
        {" "}
        <div className=" flex gap-2">
          <button className="self-center justify-center flex bg-gray-200 p-2 rounded-lg text-sm font-bold gap-2 w-32">
            <FaChevronLeft className="self-center" /> Prev
          </button>
        </div>
        <div className=" flex">
          <button className="self-center justify-center flex bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-bold gap-2 "
          onClick={() =>handleSave()}>
            <FaPlus className="self-center" 
            
            /> Add Next Question
          </button>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default AddParagraph;
