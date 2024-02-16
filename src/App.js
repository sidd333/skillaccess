import "./App.css";
import React, { Suspense, lazy } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCollege,logoutCollage } from "./redux/collage/auth/authSlice";
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

//---------------------------------------------------------------inbox
import InboxRoute from "./pages/collage/inbox/index";

//---------------------------------------------------------------settings

import SettingsRoute from "./pages/collage/settings/index";
//----------------------------------------------------------------------------------------------------------------------------------------//

import AccountingPage from "./pages/collage/accounting/AccountingPage";

import ProfilePage from "./pages/collage/profile/ProfilePage";
import SettingsPage from "./pages/collage/settings/SettingsPage";
import TeamsPage from "./pages/collage/teams/TeamsPage";
import CompaniesRoute from "./pages/collage/companies";
import ResultsRoute from "./pages/collage/results";

const Register = lazy(() => import("./pages/collage/auth/Register"));
const Login = lazy(() => import("./pages/collage/auth/Login"));

export default function App() {
const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCollege());
  }, [dispatch]);

const {user, isLoggedIn} = useSelector((state) => state.collageAuth);


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
          {InboxRoute()}
          {SettingsRoute()}
          <Route path="collage/accounting">
            <Route path="" element={<AccountingPage />} />
          </Route>


          <Route path="collage/profile">
            <Route path="" element={<ProfilePage />} />
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