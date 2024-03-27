import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";


const TestPage = lazy(() => import("./TestPage"));

// const NameAssessmentPage = lazy(() => import("./NameAssessmentPage"));

const StudentTestRoute = () => {
  return (
    <Route>
      <Route path="student/test" element={<TestPage />} />

      {/* <Route path="assessment" element={<AssessmentPage />} /> */}
    </Route>
  );
}

export default StudentTestRoute;
