import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addMcqToTopic,
  addQuestionToTopic,
} from "../../../../redux/collage/test/testSlice";
import toast from "react-hot-toast";

const Header = ({ question, setQuestion, id, type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { test } = useSelector((state) => state.test);

  const handleSave = () => {
    if (question.Title === "" ) {
      toast.error("Please enter question");
      return;
    }
    else if (question.Options &&  question.Options.length < 4) {

      toast.error("Please enter atleast 4 options");
      return;
    }
    else if(question.Duration==0){
      toast.error("Please enter required time");
      return;
    }
    else if(question.AnswerIndex===null){
      toast.error("Please select correct answer");
      return;
    }
    else {
      dispatch(addQuestionToTopic({ data: question, id: id, type: type }));
      setQuestion({ Title: "", Options: [] , Duration : 0 ,AnswerIndex:null});
      navigate(-1);
    }

    // api call to push questions to topic
   
  };
  // useEffect(() => {
  //   dispatch(setTest({questions}));
  // }, [questions]);
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
          <button
            className="self-center w-24  justify-center flex text-blue-800 py-2 px-4 rounded-xl font-bold gap-2 bg-white"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
          <button
            className="self-center w-32 justify-center flex bg-blue-700 py-2 font-bold px-4 rounded-xl gap-2 text-white"
            // onClick={handleCreateTest}

            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
