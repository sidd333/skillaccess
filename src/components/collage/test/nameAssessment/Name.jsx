import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "./Header";
import { Progress } from "./Progress";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllTests,
  setTest,
  setTestBasicDetails,
} from "../../../../redux/collage/test/testSlice";
import toast from "react-hot-toast";

const Name = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useSearchParams();

  const level = search.get("level");

  const {
    name,
    description,
    totalAttempts,
    assessments,
    totalQuestions,
    totalDuration,
    duration_from,
    duration_to,
    isNegativeMarking,
  } = useSelector((state) => state.test);
  // const {} = useSelector((state) =>console.log(state.test));
  const navigate = useNavigate();
  const [testDetails, setTestDetails] = useState({
    level: level,
    name: name || "",
    description: description || "",
    totalAttempts: totalAttempts || "",
    totalQuestions: totalQuestions || null,
    totalDuration: totalDuration || null,
    duration_from: duration_from || "", // New fields for duration
    duration_to: duration_to || "",
    isNegativeMarking: isNegativeMarking || false,
  });

  useEffect(() => {
    setTestDetails({
      level: level,
      name: name || "",
      description: description || "",
      totalAttempts: totalAttempts || "",
      totalQuestions: totalQuestions || null,
      totalDuration: totalDuration || null,
      duration_from: duration_from || "", // New fields for duration
      duration_to: duration_to || "",
      isNegativeMarking: isNegativeMarking || false,
    });
    // why getting 0 here
    // console.log(name, description, totalAttempts);
  }, [dispatch]);

  // const getTests = () => {
  //   dispatch(getAllTests());
  //   console.log("hello tests");
  // };

  // const handleChange = (e) => {
  //   const { name, value, checked } = e.target;

  //   // Check if the selected time is before the current time and date
  //   const currentTime = new Date().toISOString().slice(0, 16); // Get current time and date
  //   if (
  //     (name === "duration_from" || name === "duration_to") &&
  //     value < currentTime
  //   ) {
  //     toast.error("Please select a time and date after the current time and date.");
  //     return; // Prevent updating state if the selected time is before the current time and date
  //   }

  //   setTestDetails({
  //     ...testDetails,
  //     [name]: name === "isNegativeMarking" ? checked : value,
  //   });
  // };
  // console.log(testDetails);
  // // const handleChange = (e) => {
  // //   const { name, value } = e.target;

  // //   // For duration_from and duration_to fields, update both formData and testDetails
  // //   if (name === 'duration_from' || name === 'duration_to') {
  // //     setFormData({
  // //       ...formData,
  // //       [name]: value,
  // //     });

  // //     setTestDetails({
  // //       ...testDetails,
  // //       [name]: value,
  // //     });
  // //   } else {
  // //     // For other fields, update testDetails
  // //     setTestDetails({
  // //       ...testDetails,
  // //       [name]: value,
  // //     });
  // //   }
  // // };

  // const handleSubmit = () => {
  //   let flag = "false";
  //   if (testDetails.name === "") {
  //     toast.error('Please enter Name', {
  //       icon: '⚠️' 
  //     });
      
  //     flag = "true";
  //   } else if (testDetails.duration_from === "") {
  //     toast.error('Please enter Duration from', {
  //       icon: '⚠️'
  //     }
  //     )
  //     return;
  //   } else if (testDetails.duration_to === "") {
  //     toast.error('Please enter Duration to', {
  //       icon: '⚠️' 
  //     });
      
  //   } else if (testDetails.totalAttempts === "") {
  //     window.alert("Please enter Total Attempts");
  //     return;
  //   } else if (testDetails.description === "") {
  //     window.alert("Please enter Description");
  //     return;
  //   } else if (testDetails.duration_from >= testDetails.duration_to) {
  //     toast.error('Duration To must be greater than Duration From', {
  //       icon: '⚠️' // You can use any Unicode character or an image URL here
  //     });
  //     return;
  //   }

  //   if (assessments.beginner.length > 0) {
  //     assessments.beginner.forEach((assessment) => {
  //       if (assessment.name === testDetails.name) {
  //         flag = "true";
  //       }
  //     });

  //     // console.log(testDetails, name, description, totalAttempts);
  //   }
  //   if (flag === "false") {
  //     dispatch(setTestBasicDetails(testDetails));

  //     navigate("/collage/test/select");
  //   } else {
      
  //     toast.error("duplicate name");
  //   }
  // };
  const [errors, setErrors] = useState({
    name: "",
    totalAttempts: "",
    totalQuestions: "",
    description: "",
    duration: "",
  });

    const handleChange = (e) => {
    const { name, value, checked } = e.target;

    // Check if the selected time is before the current time and date
    const currentTime = new Date().toISOString().slice(0, 16); // Get current time and date
    if (
      (name === "duration_from" || name === "duration_to") &&
      value < currentTime
    ) {
      toast.error("Please select a time and date after the current time and date.");
      return; // Prevent updating state if the selected time is before the current time and date
    }

    setTestDetails({
      ...testDetails,
      [name]: name === "isNegativeMarking" ? checked : value,
    });
  };

  const handleSubmit = () => {
    let flag = false;
    if (testDetails.name === "" || testDetails.totalAttempts === "" || testDetails.totalQuestions === null || testDetails.description === "" || testDetails.duration_from === "" || testDetails.duration_to === "") {
      toast.error('Please Add All Fields', {
        icon: '⚠️'
      });
      flag = true;
    }

    if (testDetails.name === "") {
    
      setErrors((prevErrors) => ({ ...prevErrors, name: "Please enter Name" }));
      flag = true;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
    }

    if (testDetails.totalAttempts === "") {
     setErrors((prevErrors) => ({
        ...prevErrors,
        totalAttempts: "Please enter Total Attempts",
      }));
      flag = true;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, totalAttempts: "" }));
    }

    if (testDetails.totalQuestions === null) {

      setErrors((prevErrors) => ({
        ...prevErrors,
        totalQuestions: "Please enter Total Questions",
      }));
      flag = true;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, totalQuestions: "" }));
    }

    if (testDetails.description === "") {
     
      setErrors((prevErrors) => ({
        ...prevErrors,
        description: "Please enter Description",
      }));
      flag = true;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, description: "" }));
    }

  
    
    if (testDetails.duration_from === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        duration: "Please Enter Duration From",
      }));
    } else if (testDetails.duration_to === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        duration: "Please Enter Duration To",
      }));
    }
    else if (testDetails.duration_from >= testDetails.duration_to) {
          toast.error('Duration To must be greater than Duration From', {
            icon: '⚠️' // You can use any Unicode character or an image URL here
          });
          return;
        } 
      else {
      setErrors((prevErrors) => ({ ...prevErrors, duration: "" }));
    }
    
    if (assessments.beginner.length > 0) {
      assessments.beginner.forEach((assessment) => {
        if (assessment.name === testDetails.name) {
          flag = "true";
          toast.error("Duplicate name");
        }
      });
    }
    if (!flag) {
      dispatch(setTestBasicDetails(testDetails));
      navigate("/collage/test/select");
     
    }
  
  };

  return (
    <div className="font-dmSans text-sm font-bold">
      <Header handleNext={handleSubmit} />
      <div className="w-4/5 mx-auto">
        <Progress />
      </div>

      {/* larger screens */}
      <div className="  w-11/12 mx-auto min-h-[90vh] my-2 rounded-lg  justify-between  ">
        <h2 className="w-full font-medium  text-gray-400 sm:h-10 py-2 sm:mt-12  mt-4 rounded-lg mb-10 sm:mb-1 text-lg">
          Add up to 10 custom questions to your assessment (optional). You can
          use five question types: multiple-choice, essay, video, code and find
          answer.
        </h2>

        <input
          type="text"
          className="w-full bg-gray-100 h-16 px-6 text-lg font-bold py-2 mt-12 rounded-lg focus:outline-0 focus:ring-blued focus:ring-1 border-none placeholder-gray-400"
          placeholder="Name of the Assessment"
          name="name"
          value={testDetails.name}
          onChange={handleChange}
        />
{errors.name && <span className="text-red-500 ml-5 pt-2">{errors.name}</span>}
        <input
          type="number"
          name="totalAttempts"
          className="w-full bg-gray-100 h-16 px-6 text-lg font-bold py-8 mt-4 rounded-lg focus:outline-0 focus:ring-blued focus:ring-1 border-none placeholder-gray-400"
          placeholder="No. of Attempts"
          value={testDetails.totalAttempts}
          onChange={handleChange}
        />
         {errors.totalAttempts && <span className="text-red-500 ml-5 pt-2">{errors.totalAttempts}</span>}
        <input
          name="totalQuestions"
          type="number"
          className="w-full bg-gray-100 h-16 px-6 text-lg font-bold py-8 mt-4 rounded-lg focus:outline-0 focus:ring-blued focus:ring-1 border-none placeholder-gray-400"
          placeholder="No. of Questions"
          value={testDetails.totalQuestions}
          onChange={handleChange}
        />
        {errors.totalQuestions && <span className="text-red-500 ml-5 pt-2">{errors.totalQuestions}</span>}
        {/* <input
          name="totalDuration"
          type="number"
          className="w-full bg-gray-100 h-16 px-6 text-lg font-bold py-8 mt-4 rounded-lg focus:outline-0 focus:ring-blued focus:ring-1 border-none placeholder-gray-400"
          placeholder="Total Duration in minutes"
          value={testDetails.totalDuration}
          onChange={handleChange}
        /> */}

        <div className="flex justify-between items-center w-full  ">
          {/* Duration From */}
          <div className=" bg-gray-100 h-16 px-6 text-lg font-bold py-2 mt-6 rounded-lg focus:outline-0">
            <label className="text-gray-400">Duration From *</label>
            <input
              type="datetime-local"
              name="duration_from"
              value={testDetails?.duration_from?.slice(0, 16)}
              onChange={handleChange}
              className="border-none"
              required
              fullWidth
            />
          </div>
          
          {/* Duration To */}
          <div className=" bg-gray-100 h-16 px-6 text-lg font-bold py-2 mt-6 rounded-lg focus:outline-0">
            <label className="text-gray-400">Duration To *</label>
            <input
              type="datetime-local"
              name="duration_to"
              value={testDetails?.duration_to?.slice(0, 16)}
              onChange={handleChange}
              className="border-none"
              required
              fullWidth
            />
           
          </div>
          
        </div>
        {errors.duration && <span className="text-red-500 ml-5 pt-2">{errors.duration}</span>}
        <div className="mt-3 flex items-center gap-2 text-lg pl-4">
          <label
            htmlFor="isNegativeMarking"
            className="flex items-center gap-3"
          >
            <input
              id="isNegativeMarking"
              type="checkbox"
              name="isNegativeMarking"
              checked={testDetails.isNegativeMarking}
              onChange={handleChange}
              className=""
            />{" "}
            Is there negative marking?
          </label>
        </div>
        <textarea
          className="w-full bg-gray-100 h-48 px-6 text-lg font-bold py-8 mt-4 rounded-lg focus:outline-0 focus:ring-blued focus:ring-1 resize-none border-none placeholder-gray-400"
          placeholder="Add Description"
          name="description"
          value={testDetails.description}
          onChange={handleChange}
        />
        {errors.description && <span className="text-red-500 ml-5 pt-2">{errors.description}</span>}
      </div>
    </div>
  );
};

export default Name;
