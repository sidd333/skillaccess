import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "./ProfilePage";
import ProfilePersonal from "./ProfilePersonal";

const ProfileRoutes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route
            path="/student/profile"
            element={<Profile />}
            >
            <Route path="/ProfilePersonal" element={<ProfilePersonal/>}/>
            </Route>
          

        </Routes>
        </Suspense>
    );
    }

export default ProfileRoutes
