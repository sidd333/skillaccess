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
const SubmitPage = lazy(() => import("./SubmitPage"));
const TestPage = lazy(() => import("./TestPage"));
const AssessmentPage = lazy(() => import("./AssessmentPage"));
const CreateTopicPage = lazy(() => import("./CreateTopicPage"));

export default function () {
  return (
    <Route path="collage/test">
      <Route path="" element={<TestPage />} />
      <Route path="assessment" element={<AssessmentPage />} />
      <Route path="name" element={<NameAssessmentPage />} />
      <Route path="select" element={<SelectTestsPage />} />
      <Route path="submit" element={<SubmitPage />} />
      {/* <Route path="preview" element={<AddQuestionsSelectPage />} /> */}
      <Route path="questions" element={<AddQuestionsPage />} />
      <Route path="typeOfQuestions" element={<AddQuestionsSelectPage />} />
      {/* <Route path="preview" element={<AddQuestionsPage />} /> */}
      <Route path="createTopic" element={<CreateTopicPage />} />
      <Route path="details/:id" element={<ReviewPage />} />
      <Route path="addMcq/:sectionId" element={<AddMcqPage />} />
      <Route path="code/:sectionId" element={<AddCodePage />} />
      <Route path="essay/:sectionId" element={<AddEssayPage />} />
      <Route path="parav" element={<AddParagraphPage />} />
      <Route path="final" element={<FinalizePage />} />
      <Route path="invite" element={<InvitePage />} />
    </Route>
  );
}
