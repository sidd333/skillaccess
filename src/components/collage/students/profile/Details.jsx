import React from "react";
import { CgPinAlt } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
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
            <p className="self-center  font-dmSans text-xs font-bold">
              Bhopal India
            </p>
          </span>
          <div className="text-sm flex justify-end gap-1">
            4.5/5
            <FaStar className="self-center text-[#FF991F]" />
          </div>
        </div>
      </div>

      {/* second section */}
      <div className="border-b px-6  grid grid-cols-4 text-xs font-bold text-center py-4 bg-gray-50 ">
        <span className="text-center">
          <h2 className="text-gray-400 my-1 capitalize">EMAIL ADDRESS</h2>
          <h2>example@gmail.com</h2>
        </span>
        <span>
          <h2 className="text-gray-400 my-1">PHONE NUMBER</h2>
          <h2>(+91)98989384234</h2>
        </span>
        <span>
          <h2 className="text-gray-400 my-1">ADDRESS</h2>
          <h2>Bhopal.India</h2>
        </span>
        <span className="text-center">
          <h2 className="text-gray-400 my-1">WEBSITE</h2>
          <h2 className="text-blue-700">wwww.google.com</h2>
        </span>
      </div>

      {/* third section */}

      <div className="border-b  px-6 flex justify-between text-xs font-bold text-center p-4 bg-gray-50 ">
        <h2 className="self-center">Software Knowledge</h2>
        <span className="flex gap-2 flex-wrap">
          <SiAdobephotoshop className="text-3xl bg-blue-600 rounded-lg " />
          {/* <SiAdobephotoshop className="text-3xl bg-blue-600 rounded-lg " />
          <SiAdobephotoshop className="text-3xl bg-blue-600 rounded-lg " />
          <SiAdobephotoshop className="text-3xl bg-blue-600 rounded-lg " /> */}
        </span>
      </div>

      {/* forth section */}
      <div className="rounded-b-lg px-6 flex justify-between text-xs  text-center p-4 bg-gray-50 font-dmSans">
        <button className="p-3  rounded-xl w-24 bg-[#8f92a11d] font-bold ">
          View CV
        </button>

        <span className="flex gap-2">
          <button className="py-3  rounded-xl px-3 bg-[#8f92a11d] font-bold">
            View Certificates
          </button>
          <button className="py-2 text-white rounded-xl w-24 bg-blue-700 font-bold">
            Approve Request
          </button>
        </span>
      </div>
    </section>
  );
};

export default Details;
