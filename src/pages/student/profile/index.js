import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "./ProfilePage";

const ProfileRoutes = () => {
  return (
    <Route>
      <Route path="/student/profile" element={<Profile />} />
    </Route>
  );
};

export default ProfileRoutes;
