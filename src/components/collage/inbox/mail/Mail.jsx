import React from "react";
import Header from "./Header";
import Left from "./Left";
import View from "./View";

const Mail = () => {
  return (
    <div className="w-11/12 mx-auto ">
      <Header />

      <div className="bg-lGray bg-opacity-5 h-[70vh] w-full flex gap-4 p-4 ">
        <div className="w-1/4 bg-white p-2 overflow-y-scroll">
          <Left />
          <Left />
          <Left />
        </div>
        <div className="w-3/4 bg-white">
          <View />
        </div>
      </div>
    </div>
  );
};

export default Mail;
