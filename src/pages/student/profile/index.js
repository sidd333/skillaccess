import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "./ProfilePage";

const ProfileFinal = lazy(() => import("./ProfileFinalPage"));
const ProfileRoutes = () => {
  return (
    <Route path="/student/profile">
      <Route path="" element={<Profile />} />
      <Route path="final" element={<ProfileFinal />} />
    </Route>
  );
};

export default ProfileRoutes;
