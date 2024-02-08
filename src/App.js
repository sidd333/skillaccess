import "./App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//----------------------------------------------collage pages----------------------------------------------------------------------------//

//-----------------------------------------dash
import Rote from "./pages/collage/home/DashRoutes";

//-----------------------------------------------auth

//-----------------------------------------------test
import TestRoute from "./pages/collage/test/Index";

//-----------------------------------------------------------results
import ResultsPage from "./pages/collage/results/ResultsPage";
import ResultsOverviewPage from "./pages/collage/results/ResultsOverviewPage";

//----------------------------------------------------------Q-Bank
import QuesRoute from "./pages/collage/quesBank";

//--------------------------------------------------------------companies

//---------------------------------------------------------------students
import StudentRoute from "./pages/collage/students";
//----------------------------------------------------------------------------------------------------------------------------------------//

import AccountingPage from "./pages/collage/accounting/AccountingPage";
import InboxPage from "./pages/collage/inbox/InboxPage";
import ProfilePage from "./pages/collage/profile/ProfilePage";
import SettingsPage from "./pages/collage/settings/SettingsPage";
import TeamsPage from "./pages/collage/teams/TeamsPage";
import CompaniesPage from "./pages/collage/companies/CompaniesPage";
import StudentsMainPage from "./pages/collage/students/StudentsMainPage";
import CompanyProfilePage from "./pages/collage/companies/CompanyProfilePage";
import CompanyJobOverviewPage from "./pages/collage/companies/CompanyJobOverviewPage";
import StudentsProfilePage from "./pages/collage/students/StudentsProfilePage";
import AddQuestionsSelectPage from "./pages/collage/test/AddQuestionsSelectPage";
import ResultsOverviewPage from "./pages/collage/results/ResultsOverviewPage";
import RecentPage from "./pages/collage/quesBank/RecentPage";
import TopicPage from "./pages/collage/quesBank/TopicPage";
import UploadPage from "./pages/collage/quesBank/UploadPage";
import AddCodePage from "./pages/collage/test/AddCodePage";
import AddEssayPage from "./pages/collage/test/AddEssayPage";
import AddParagraphPage from "./pages/collage/test/AddParagraphPage";
import FinalizePage from "./pages/collage/test/FinalizePage";
import InvitePage from "./pages/collage/test/InvitePage";

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<>loading</>}>
        <Routes>
          {/* ----------------------------------------collage-------------------------------------------------------------- */}
          <Route path="" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {Rote()}
          {TestRoute()}
          {StudentRoute()}
          {QuesRoute()}
          {CompaniesRoute()}
          {ResultsRoute()}

        <Route path="collage/accounting">
          <Route path="" element={<AccountingPage />} />
        </Route>

        <Route path="collage/companies">
          <Route path="" element={<CompaniesPage />} />
          <Route path="profile" element={<CompanyProfilePage />} />
          <Route path="jobOverview" element={<CompanyJobOverviewPage />} />
        </Route>

          <Route path="collage/inbox">
            <Route path="" element={<InboxPage />} />
          </Route>

          <Route path="collage/profile">
            <Route path="" element={<ProfilePage />} />
          </Route>

          <Route path="collage/settings">
            <Route path="" element={<SettingsPage />} />
          </Route>

          <Route path="collage/teams">
            <Route path="" element={<TeamsPage />} />
          </Route>
          {/* .......................................................................................................................... */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
