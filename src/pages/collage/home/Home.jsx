import React from "react";
import CollageLayout from "../../../layout/Collage";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Dashboard from "../../../components/collage/dashboard/dash/Dashboard";

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    return;
  }, []);

  return (
    <div className="bg-blued">
      <CollageLayout>
        <Dashboard />
      </CollageLayout>
    </div>
  );
};

export default Home;
