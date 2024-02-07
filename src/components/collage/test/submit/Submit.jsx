import React from "react";
import Header from "./Header";
import { Progress } from "./Progress";
import List from "./List";

const Submit = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Header />
      <div className="w-4/5 mx-auto">
        <Progress />
      </div>
      <div className="mt-16">
        {/* iterate this list */}
        <List />
      </div>
    </div>
  );
};

export default Submit;
