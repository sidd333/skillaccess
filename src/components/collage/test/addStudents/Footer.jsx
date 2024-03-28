import React from "react";
import toast from "react-hot-toast";

import { FaChevronLeft, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = ({ students}) => {
  const navigate = useNavigate();
  const handleSendInvite = () => {
    if (students.length === 0) {
      toast.error("Select at least one student to send an invite.");
    } else {
      localStorage.removeItem("testDetails");
      localStorage.removeItem("totalTime");
      toast.success("Invite sent");
      navigate("/collage/test");
    }
  };
  return (
    <div className="pt-1 relative pb-20">
      <div className=" absolute right-0">
        {" "}
        <div className=" flex gap-2">
        <button
            className={`self-center justify-center flex bg-blue-700 rounded-lg text-sm font-bold gap-2 px-10 py-3 ${
              students.length === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleSendInvite}
            disabled={students.length === 0}
          >
            <FaPlus className="text-white text-lg" />
            <p className="self-center text-white">Send Invite</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
