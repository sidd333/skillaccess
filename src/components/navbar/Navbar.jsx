import React from "react";
import { Logo } from "./Logo";
import { FiBell } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
const Navbar = (props) => {
  return (
    <div className="border border-y-1 sorder border-gray-500 bg-white w-full z-40 m-0 fixed top-0">
      <div className="navbar flex justify-between ">
        {/* left */}
        <div>
          {/* mobile only */}
          <button
            className="btn btn-primary sm:hidden "
            onClick={() => props.setOpen(!props.open)}
          >
            hamb
          </button>

          <div className="h-10 w-10">
            {" "}
            <Logo />
          </div>
        </div>

        {/* right */}
        <div className="flex gap-3">
          {/* noifiaction */}
          <button className="border-2 border-gray-400  text-gray-400 rounded-lg p-2 relative">
            <FiBell className="text-lg" />{" "}
            <div className="rounded-full h-2 w-2 bg-[#0090FF]  absolute top-1 right-2"></div>
          </button>

          {/* noifiaction */}
          <button className="border-2 border-gray-400  rounded-lg p-1 relative flex gap-2">
            <img src="../../images/user.jpg" alt="" className="h-7 w-7" />{" "}
            <h2 className="pr-2 text-sm font-bold self-center font-dmSans italic">
              Hello Ravi
            </h2>
          </button>

          {/* noifiaction */}
          <button className="border-2 border-gray-400  text-gray-400 rounded-lg p-1 relative">
            <div className="rounded-full h-7 w-7 bg-gradient-to-b from-red-600 to-slate-800 "></div>
          </button>

          {/* noifiaction */}
          <button className="border-none   rounded-lg p-2 relative">
            <FaAngleDown className="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
