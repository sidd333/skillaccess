import React from "react";
import { CgPinAlt } from "react-icons/cg";
import { SiAdobephotoshop } from "react-icons/si";
const Details = () => {
  return (
    // {/* profile container */}
    <section>
      {/* first section */}
      <div className=" flex justify-between border-b  bg-gray-50 rounded-t-lg">
        {/* profile photo */}
        <div className="flex gap-2 px-3 py-1 mt-2">
          <div className="min-w-[2.5rem] h-10 bg-amber-500 self-center rounded-lg"></div>
          <div className="ml-1 mt-1">
            <h2 className="text-xs  font-bold  py-1 ">Software Engineer</h2>
            <h2 className="text-xs  font-semibold  pb-2">Google</h2>
          </div>
        </div>

        {/* location */}
        <div className="self-center text-gray-400 mr-2">
          <span className="flex ">
            {" "}
            <CgPinAlt className="self-center text-lg" />{" "}
            <p className="self-center text-xs">Bhopal India</p>
          </span>
        </div>
      </div>

      {/* second section */}
      <div className="border-b px-6  grid grid-cols-4 text-xs font-bold text-center py-4 bg-gray-50 ">
        <span className="text-left">
          <h2 className="text-gray-400 my-1 ">EXPERIENCE</h2>
          <h2>3-5 Years</h2>
        </span>
        <span>
          <h2 className="text-gray-400 my-1">SENIORITY LEVEL</h2>
          <h2>Medium Level</h2>
        </span>
        <span>
          <h2 className="text-gray-400 my-1">EMPLOYMENT</h2>
          <h2>Full-Time</h2>
        </span>
        <span className="text-right">
          <h2 className="text-gray-400 my-1">SALARY</h2>
          <h2>$90-100K</h2>
        </span>
      </div>

      {/* third section */}

      <div className="border-b  px-6 flex justify-between text-xs font-bold text-center p-4 bg-gray-50 ">
        <h2 className="self-center">Software Knowledge</h2>
        <span className="flex gap-2 flex-wrap">
          <SiAdobephotoshop className="text-3xl bg-blue-600 rounded-lg " />
          <SiAdobephotoshop className="text-3xl bg-blue-600 rounded-lg " />
          <SiAdobephotoshop className="text-3xl bg-blue-600 rounded-lg " />
          <SiAdobephotoshop className="text-3xl bg-blue-600 rounded-lg " />
        </span>
      </div>

      {/* forth section */}
      <div className="rounded-b-lg px-6 flex justify-between text-xs font-bold text-center p-4 bg-gray-50 ">
        <button className="p-3  rounded-xl w-24 bg-[#8f92a11d]">View CV</button>

        <span className="flex gap-2">
          <button className="p-3  rounded-xl w-32 bg-[#8f92a11d]">
            View Certificates
          </button>
          <button className="p-3 text-white rounded-xl w-24 bg-blue-700">
            Contact
          </button>
        </span>
      </div>
    </section>
  );
};

export default Details;
