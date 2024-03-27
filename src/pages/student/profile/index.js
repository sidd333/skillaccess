import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Profile=lazy(() => import("./ProfilePage.jsx"));

const ProfilePersonalPage=lazy(() => import("./ProfilePersonalPage.jsx")); 
const ProfileEducationPage=lazy(() => import("./ProfileEducationPage.jsx"));

const ProfileRoutes = () => {
  return (
    <Route>
      <Route path="student/profile" >
      <Route path="" element={<Profile/>}></Route>
        <Route path="personal" element={<ProfilePersonalPage/>}></Route>
        <Route path="education" element={<ProfileEducationPage/>}></Route>
      </Route>
       
    </Route>
  );
};

export default ProfileRoutes;
