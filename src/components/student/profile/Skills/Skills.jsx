import React from "react";
import { SiAdobephotoshop } from "react-icons/si";

const Skills = () => {
  return (
    <div className="w-11/12 mx-auto py-6">
      <div className="">
        <span className="">Software Knowledge</span>
        <span className="flex gap-2 flex-wrap mt-3">
          <SiAdobephotoshop className="text-3xl bg-blue-600 rounded-lg " />
          <SiAdobephotoshop className="text-3xl bg-blue-600 rounded-lg " />
          <SiAdobephotoshop className="text-3xl bg-blue-600 rounded-lg " />
          <SiAdobephotoshop className="text-3xl bg-blue-600 rounded-lg " />
          <select
            name=""
            id=""
            className="select text-gray-400  !min-h-2 !h-10 self-center"
          >
            <option value="">Add Software</option>
          </select>
        </span>
        <div>
          <div className="">Acheivements</div>
          <select
            name=""
            id=""
            className="select text-gray-400  !min-h-2 !h-10 self-center"
          >
            <option value="">Add Software</option>
          </select>
        </div>

        <div>
          <div className="">Coding Language</div>
          <select
            name=""
            id=""
            className="select text-gray-400  !min-h-2 !h-10 self-center"
          >
            <option value="">Add Software</option>
          </select>
        </div>

        <div>
          <div className="">Languages</div>
          <select
            name=""
            id=""
            className="select text-gray-400  !min-h-2 !h-10 self-center"
          >
            <option value="">Add Software</option>
          </select>
        </div>
      </div>{" "}
    </div>
  );
};

export default Skills;
