import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "./ProfilePage";


const ProfileRoutes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route
            path="/"
            element={<Profile />}
            />

        </Routes>
        </Suspense>
    );
    }

export default ProfileRoutes
