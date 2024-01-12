import React from "react";

const Navbar = (props) => {
  return (
    <div className="border border-y-1 sorder border-gray-500 bg-white w-full z-40 m-0 fixed top-0">
      <div className="navbar ">
        <button
          className="btn btn-primary sm:hidden "
          onClick={() => props.setOpen(!props.open)}
        >
          hamb
        </button>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
    </div>
  );
};

export default Navbar;
