import React from "react";
import { SiAdobephotoshop } from "react-icons/si";

const Skills = () => {
  return (
    <div className="grid  grid-rows-4 px-4 text-base font-bold gap-8 mt-2 font-dmSans">
      <div className="grid grid-cols-2">
        <span className="">Software Knowledge</span>
        <span className="flex gap-2 flex-wrap">
          <SiAdobephotoshop className="text-3xl bg-blue-600 rounded-lg " />
          <SiAdobephotoshop className="text-3xl bg-blue-600 rounded-lg " />
          <SiAdobephotoshop className="text-3xl bg-blue-600 rounded-lg " />
          <SiAdobephotoshop className="text-3xl bg-blue-600 rounded-lg " />
        </span>
      </div>

      <div className="grid grid-cols-2">
        <span className="">Acheivements</span>
        <span className="w-2/3 font-normal font-dmSans">
          Certified HTML developer, Javascript , Angular JS, Php, Swift
        </span>
      </div>

      <div className="grid grid-cols-2">
        <span className="">Coding Languages</span>
        <span className="w-2/3 font-normal font-dmSans">
          Certified HTML developer, Javascript , Angular JS, Php, Swift
        </span>
      </div>

      <div className="grid grid-cols-2">
        <span className="">Languages</span>
        <span className="w-2/3 font-normal font-dmSans">
          Hindi, English, Gujarati
        </span>
      </div>
    </div>
  );
};

export default Skills;
