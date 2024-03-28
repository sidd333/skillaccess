import React from "react";
import Header from "./Header";
import About from "./About";
import Info from "./Info";
import Description from "./Description";
import Toggle from "./Toggle";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllTests, getStudentResponse, getTest, getTestResultPage } from "../../../../redux/collage/test/testSlice";
import { getCollege } from "../../../../redux/collage/auth/authSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

const ResultsOverview = () => {

  const { user } = useSelector((state) => state.collageAuth);
  const assessment = useSelector((state) => state.test.test);
  // const {studentResponses} = useSelector((state) => state.test);
  const searchParams = new URLSearchParams(window.location.search);
  const assessmentId = searchParams.get("assessment");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTests());
  }, []);

  useEffect(() => {
    dispatch(getTest(assessmentId));
    dispatch(getTestResultPage(assessmentId));
   
  }, [dispatch, assessmentId]);

  
  // useEffect(() => {
  //   dispatch(getStudentResponse(assessmentId));
  // }
  // , [assessmentId]);
// const responses = studentResponses.map((responseId) => {
//   dispatch(getStudentResponse(responseId))
//   return responseId;
// }
// );





  return (
    <div className="w-[95%] mx-auto ">
      <Header />
      <Info user={user} assessment={assessment} />

      <About Description={assessment.description} />
      <Description topics={assessment.topics} />

      <Toggle assessment={assessment}  />

    </div>
  );
};

export default ResultsOverview;
