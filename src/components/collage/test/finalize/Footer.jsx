import React from "react";

import { FaChevronLeft, FaPlus } from "react-icons/fa";

const Footer = ({ setQues }) => {
  return (
    <div className="pt-1 relative pb-20">
      <div className=" absolute right-0">
        {" "}
        <div className=" flex gap-2">
          <button className="self-center justify-center flex bg-blue-700 rounded-lg text-sm font-bold gap-2 px-4 py-3">
            <img src="../../images/icons/student.png" alt="" />{" "}
            <p className="self-center text-white">Invite Students</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
