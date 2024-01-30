import React from "react";
import Header from "./Header";
import Topic from "./Topic";
import Recent from "./Recent";
import BookMark from "./BookMark";

const QuesBank = () => {
  return (
    <div className="w-11/12 mx-auto mt-4 font-dmSans">
      <div className="mb-9">
        <Header />
      </div>
      <Topic />

      <div className="flex justify-between gap-8 mt-8">
        <div className="3xl:w-[821px] w-[62%]">
          <Recent />
        </div>
        <div className="3xl:w-[821px] w-[38%%]">
          <BookMark />
        </div>
      </div>
    </div>
  );
};

export default QuesBank;
