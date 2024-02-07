import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const NameAssessmentPage = lazy(() => import("./NameAssessmentPage"));
const SelectTestsPage = lazy(() => import("./SelectTestsPage"));
const AddQuestionsPage = lazy(() => import("./AddQuestionsPage"));
const ReviewPage = lazy(() => import("./ReviewPage"));
const AddMcqPage = lazy(() => import("./AddMcqPage"));
const AddCodePage = lazy(() => import("./AddCodePage"));
const AddEssayPage = lazy(() => import("./AddEssayPage"));
const AddParagraphPage = lazy(() => import("./AddParagraphPage"));
const FinalizePage = lazy(() => import("./FinalizePage"));
const InvitePage = lazy(() => import("./InvitePage"));
const AddQuestionsSelectPage = lazy(() => import("./AddQuestionsSelectPage"));

const TestPage = lazy(() => import("./TestPage"));
const AssessmentPage = lazy(() => import("./AssessmentPage"));

export default function () {
  return (
    <Route path="collage/test">
      <Route path="" element={<TestPage />} />
      <Route path="assessment" element={<AssessmentPage />} />
      <Route path="name" element={<NameAssessmentPage />} />
      <Route path="select" element={<SelectTestsPage />} />

      <Route path="questions" element={<AddQuestionsSelectPage />} />
      <Route path="review" element={<ReviewPage />} />
      <Route path="addMcq" element={<AddMcqPage />} />
      <Route path="addcode" element={<AddCodePage />} />
      <Route path="addEssay" element={<AddEssayPage />} />
      <Route path="addPara" element={<AddParagraphPage />} />
      <Route path="final" element={<FinalizePage />} />

      <Route path="invite" element={<InvitePage />} />
    </Route>
  );
}
