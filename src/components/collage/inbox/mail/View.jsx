import { Disclosure } from "@headlessui/react";
import React from "react";
import { FaSortDown, FaX } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { GrExpand } from "react-icons/gr";

const View = () => {
  return (
    <div className="w-full h-full p-5 font-dmSans">
      <h1 className="mt-4 mb-6 text-xl font-bold">UX Research for Product</h1>
      <p className="whitespace-pre-wrap text-sm h-[40vh] overflow-y-scroll">
        Hi Linh,
        <br />
        <br />
        Lauren Good afternoon, I was checking your work on dribble. We are
        creating a start up related to airport services and we need a beautiful
        landing page and mobile app. As we have previous experience in creating
        this kind of projects, we have the wireframes ready.We are looking for
        something minimalistic and clean with a quirky touch (with nice
        illustrations) and looking at your projects I am confident you would do
        the job fantastically.
        <br />
        <br />
        Have a lovely day.
      </p>

      <div className="flex gap-4">
        <div className="bg-[#0052CC] p-2 rounded-lg bg-opacity-10 sm:w-60 flex justify-between">
          <div className="flex gap-2">
            <img src="../../images/icons/fileBlue.png" alt="" />
            <div className="self-center">
              <p className="text-sm font-bold">Brief Details</p>
              <p className="text-xs font-medium">50.3 Mb</p>
            </div>
          </div>
          <div className="self-center">
            <FiDownload className="text-lg text-gray-400" />
          </div>
        </div>

        <div className=" p-2 rounded-lg bg-opacity-10 sm:w-60 flex justify-between">
          <div className=" flex gap-2">
            <img src="../../images/icons/image.png" alt="" />
            <div className="self-center">
              <p className="text-sm font-bold">WireFrames</p>
              <p className="text-xs font-medium">50.3 Mb</p>
            </div>
          </div>
          <div className="self-center">
            <FiDownload className="text-lg text-gray-400" />
          </div>
        </div>
      </div>

      <div className="mt-4 bg-lGray bg-opacity-5 rounded-lg p-3 flex justify-between">
        <div className="flex">
          <div className="h-10 w-10 rounded-lg bg-blued"></div>
          <p className="text-sm font-bold self-center">Brief Details</p>
          <div className="w-full sm:w-96 relative self-center">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full sm:w-96 justify-between rounded-lg bg-[#8F92A1] bg-opacity-20 px-4 py-2 text-left text-sm font-medium   focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span className="text-xs font-bold text-[#8F92A1]">
                      What is your refund policy?
                    </span>
                    <FaX className={`w-4 h-4 text-gray-400`} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500 absolute">
                    If you're unhappy with your purchase for any reason, email
                    us within 90 days and we'll refund you in full, no questions
                    asked.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>

        <div className="self-center">
          <GrExpand className="text-lg text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default View;
