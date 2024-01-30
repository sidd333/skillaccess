import React from "react";
import Header from "./Header";
import About from "./About";
import Info from "./Info";
import Description from "./Description";
import Toggle from "./Toggle";

const ResultsOverview = () => {
  return (
    <div className="w-[95%] mx-auto ">
      <Header />
      <Info />
      <About />
      <Description />
      <Toggle />
    </div>
  );
};

export default ResultsOverview;
