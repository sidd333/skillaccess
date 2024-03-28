import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "./ProfilePage";

const ProfileFinal = lazy(() => import("./ProfileFinalPage"));
const Skills = lazy(() => import("./SkillsPage"));
const Portfolio = lazy(() => import("./Portfolio"));

const ProfileRoutes = () => {
  return (
    <Route path="/student/profile">
      <Route path="" element={<Profile />} />
      <Route path="final" element={<ProfileFinal />} />
      <Route path="skills" element={<Skills />} />
      <Route path="portfolio" element={<Portfolio />} />
    </Route>
  );
};

export default ProfileRoutes;
