import "./App.css";
import React from "react";
import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./pages/collage/home/Home";

import CompanyPage from "./pages/collage/home/CompanyPage";
import JobsPage from "./pages/collage/home/JobsPage";
import Register from "./pages/collage/auth/Register";
import StudentsPage from "./pages/collage/home/StudentsPage";
import TestPage from "./pages/collage/test/TestPage";
import AssessmentPage from "./pages/collage/test/AssessmentPage";
import NameAssessmentPage from "./pages/collage/test/NameAssessmentPage";
import SelectTestsPage from "./pages/collage/test/SelectTestsPage";
import AddQuestionsPage from "./pages/collage/test/AddQuestionsPage";
import ReviewPage from "./pages/collage/test/ReviewPage";
import AddMcqPage from "./pages/collage/test/AddMcqPage";
import AccountingPage from "./pages/collage/accounting/AccountingPage";
import InboxPage from "./pages/collage/inbox/InboxPage";
import ProfilePage from "./pages/collage/profile/ProfilePage";
import QuesBankPage from "./pages/collage/quesBank/QuesBankPage";
import ResultsPage from "./pages/collage/results/ResultsPage";
import SettingsPage from "./pages/collage/settings/SettingsPage";
import TeamsPage from "./pages/collage/teams/TeamsPage";
import CompaniesPage from "./pages/collage/companies/CompaniesPage";
import StudentsMainPage from "./pages/collage/students/StudentsMainPage";

// 3️⃣ Router singleton created
const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  // 2️⃣ `BrowserRouter` component removed, but the <Routes>/<Route>
  // component below are unchanged
  return (
    <Routes>
      <Route path="" element={<Register />} />

      <Route path="/collage/dashboard">
        <Route path="" element={<Home />} />
        <Route path="companies" element={<CompanyPage />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route path="students" element={<StudentsPage />} />
      </Route>

      <Route path="/collage/test">
        <Route path="" element={<TestPage />} />
        <Route path="assessment" element={<AssessmentPage />} />
        <Route path="name" element={<NameAssessmentPage />} />
        <Route path="select" element={<SelectTestsPage />} />
        <Route path="questions" element={<AddQuestionsPage />} />
        <Route path="review" element={<ReviewPage />} />
        <Route path="addMcq" element={<AddMcqPage />} />
      </Route>

      <Route path="collage/accounting">
        <Route path="" element={<AccountingPage />} />
      </Route>

      <Route path="collage/companies">
        <Route path="" element={<CompaniesPage />} />
      </Route>

      <Route path="collage/inbox">
        <Route path="" element={<InboxPage />} />
      </Route>

      <Route path="collage/profile">
        <Route path="" element={<ProfilePage />} />
      </Route>

      <Route path="collage/quesBank">
        <Route path="" element={<QuesBankPage />} />
      </Route>

      <Route path="collage/results">
        <Route path="" element={<ResultsPage />} />
      </Route>

      <Route path="collage/settings">
        <Route path="" element={<SettingsPage />} />
      </Route>

      <Route path="collage/students">
        <Route path="" element={<StudentsMainPage />} />
      </Route>

      <Route path="collage/teams">
        <Route path="" element={<TeamsPage />} />
      </Route>
    </Routes>
  );
}
