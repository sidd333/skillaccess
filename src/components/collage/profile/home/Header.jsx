import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CgPinAlt } from "react-icons/cg";
import { BsPhone } from "react-icons/bs";
import { PiLinkSimple } from "react-icons/pi";
import { useState } from "react";

const Header = ({ editable, setEditable }) => {
  return (
    // {/* profile container */}
    <section className="bg-gray-50 rounded-xl px-6">
      {/* first section */}
      <div className=" flex justify-between border-b  bg-gray-50 rounded-t-lg py-8">
        {/* profile photo */}
        <div className="flex gap-2 px-3 py-1 mt-2">
          {editable && (
            <div className="relative">
              <div className="w-14 h-14 bg-blued self-center rounded-lg"></div>
              <div className="absolute bottom-2 -right-1 w-6 h-6 rounded-lg  p-[.35rem] bg-blue-700 bg-opacity-80">
                <img src="../../images/icons/pen.png" alt="" />
              </div>
            </div>
          )}

          <div className="ml-1 mt-1">
            <h2 className="text-2xl  font-bold  py-1  ">
              Vishweshraiya College of Education
            </h2>
            <h2 className="text-sm text-gray-400   pb-2">UPME00006369</h2>
          </div>
        </div>

        {!editable && (
          <div className="self-center text-gray-400 mr-2">
            <button
              className="py-2 text-white rounded-xl  bg-blue-700 font-bold flex gap-2 px-4"
              onClick={() => setEditable(true)}
            >
              <img src="../../images/icons/pen.png" alt="" />{" "}
              <p>Edit Profile</p>
            </button>
          </div>
        )}
      </div>

      {/* second section */}
      <div className="border-b px-6  py-8 bg-gray-50 font-dmSans">
        <h1 className="text-lg font-bold">Overview</h1>
        <p className="text-gray-400 text-sm">
          Vishweshraiya Educational Trust was established in 1996 under
          Societies Registration Act of XXI of 1860, Delhi Government.
          VISHWESHRAIYA COLLEGE OF ENGINEERING AND TECHNOLOGY, better known as
          V.C.E.T., was the first body to be developed, in Delhi, under the
          Trust with the sole purpose of promoting Technical, Management & I.T.
          courses, The Institute has done pioneering work in imparting Govt.
          approved Technical/I.T. education at various levels in numerous
          disciplines. V.C.E's strength lies not only in the fully developed
          curriculum that it offers but in the unique methodology it applies to
          impart training to the students.
        </p>
      </div>
      <div className="px-6  py-8 bg-gray-50 font-dmSans flex sm:gap-32 text-sm font-medium">
        <div className="flex gap-2">
          <div className="w-10 h-10 rounded-lg bg-gray-200 flex justify-center">
            <MdOutlineEmail className="self-center text-2xl" />
          </div>
          <p className="font-medium self-center">vcetdelhi@rediffmail.com</p>
        </div>

        <div className="flex gap-2">
          <div className="w-10 h-10 rounded-lg bg-gray-200 flex justify-center">
            <BsPhone className="self-center text-2xl" />
          </div>
          <p className="self-center">011 - 250 847 26, 011 - 456 398 26</p>
        </div>

        <div className="flex gap-2 font-dmSans">
          <div className="w-10 h-10 rounded-lg bg-gray-200 flex justify-center">
            {" "}
            <PiLinkSimple className="self-center text-2xl" />
          </div>
          <p className="text-blue-700 self-center">http://www.vetindia.in/</p>
        </div>
      </div>

      <div className="px-6 flex gap-2  pb-8">
        <div className="w-10 h-10  rounded-lg bg-gray-200 flex justify-center">
          {" "}
          <CgPinAlt className="self-center text-3xl" />
        </div>
        <p className="break-words max-w-[316px] text-sm  font-dmSans font-medium self-center">
          G - 55-56, Street No.-1, Palam Extension, Near Sector - 7, Dwarka,
          Delhi, 110075
        </p>
      </div>
    </section>
  );
};

export default Header;