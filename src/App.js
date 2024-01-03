import "./App.css";

import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./pages/collage/home/Home";
import Login from "./pages/login/Login";
import CompanyPage from "./pages/collage/home/CompanyPage";
import JobsPage from "./pages/collage/home/JobsPage";

import StudentsPage from "./pages/collage/home/StudentsPage";

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
      <Route path="/collage/dashboard">
        <Route path="" element={<Home />} />
        <Route path="companies" element={<CompanyPage />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route path="students" element={<StudentsPage />} />
      </Route>

      <Route path="/collage/test">
        <Route path="dashboard" element={<Home />} />
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
