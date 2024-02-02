import { Disclosure, Transition } from "@headlessui/react";
import React, { useState } from "react";
import { FaCaretDown, FaPlus } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Signature = () => {
  const [par, setPar] = useState([1]);

  function deleteHandler(k) {
    setPar((prev) => {
      let copy = prev;
      copy.splice(k, 1);
      return [...copy];
    });
  }

  function Add() {
    setPar((prev) => {
      console.log([...prev, 1]);
      return [...prev, 1];
    });
  }

  return (
    <div>
      {par.map((el, index) => (
        <div className="bg-[#F8F8F9] mt-12 px-6 p-6 rounded-lg">
          <section className="grid grid-cols-2 gap-4">
            <div>
              {" "}
              <Disclosure>
                {({ open }) => (
                  <div className="mb-4 relative border border-blue-500 rounded-xl py-1">
                    <div className="-top-3  left-3 text-xs font-medium text-blued absolute bg-[#F8F8F9] px-2">
                      Returns
                    </div>

                    <div className="flex w-full justify-between rounded-t-lg  pl-4 py-2 text-left text-sm font-medium   focus:outline-none  ">
                      <div>
                        <p className="text-sm font-bold">Strings</p>
                      </div>
                      <div className="flex gap-2 self-center">
                        <FaXmark className=" h-6 w-6 self-center" />

                        <Disclosure.Button className="flex gap-2 w-10/12 self-center">
                          <FaCaretDown
                            className={`${open ? "rotate-180" : ""} h-6 w-6  `}
                          />
                          <h2></h2>{" "}
                        </Disclosure.Button>
                      </div>
                    </div>

                    <Transition
                      enter="transition duration-300 "
                      enterFrom="transform scale-95 ease-in opacity-0"
                      enterTo="transform scale-100   duration-700 opacity-100"
                      leave="transition duration-300 ease-out"
                      leaveFrom="transform scale-100  opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="bg-white rounded-b-lg pb-2 mb-2  w-full text-sm text-gray-500 absolute top-0">
                        <div className="w-full h-10 bg-blued"></div>
                      </Disclosure.Panel>
                    </Transition>
                  </div>
                )}
              </Disclosure>
            </div>
            <div>
              <input
                type="text"
                className="w-full py-[.93rem] rounded-xl border-blued border-opacity-30 bg-gray-100 text-sm font-medium"
                placeholder="Name"
              />
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold font-dmSans">Parameters</h2>
          </section>

          <section className="flex justify-between gap-4">
            <div className="w-1/2">
              <input
                type="text"
                className="w-full py-[.92rem] rounded-xl border-blued border-opacity-30 bg-gray-100 text-sm font-medium"
                placeholder="Name"
              />
            </div>

            {/* dropdown */}
            <div className="flex gap-2 w-1/2  ">
              {" "}
              <Disclosure className="w-11/12 self-center">
                {({ open }) => (
                  <div className="mb-4 relative border border-blue-500 rounded-xl py-1">
                    <div className="-top-3  left-3 text-xs font-medium text-blued absolute bg-[#F8F8F9] px-2">
                      Returns
                    </div>

                    <div className="flex w-full justify-between rounded-t-lg  pl-4 py-2 text-left text-sm font-medium   focus:outline-none  ">
                      <div>
                        <p className="text-sm font-bold">Strings</p>
                      </div>
                      <div className="flex gap-2 self-center">
                        <FaXmark className=" h-6 w-6 self-center" />

                        <Disclosure.Button className="flex gap-2 w-10/12 self-center">
                          <FaCaretDown
                            className={`${open ? "rotate-180" : ""} h-6 w-6  `}
                          />
                          <h2></h2>{" "}
                        </Disclosure.Button>
                      </div>
                    </div>

                    <Transition
                      enter="transition duration-300 "
                      enterFrom="transform scale-95 ease-in opacity-0"
                      enterTo="transform scale-100   duration-700 opacity-100"
                      leave="transition duration-300 ease-out"
                      leaveFrom="transform scale-100  opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="bg-white rounded-b-lg pb-2 mb-2  w-full text-sm text-gray-500 absolute top-0">
                        <div className="w-full h-10 bg-blued"></div>
                      </Disclosure.Panel>
                    </Transition>
                  </div>
                )}
              </Disclosure>
              <div className="self-center ">
                <FaXmark
                  key={index}
                  className="h-6 w-6  text-[#DE350B99] mb-2"
                  onClick={(e) => deleteHandler(index)}
                />
              </div>
            </div>
          </section>

          <div className="w-full relative h-12">
            <button className="absolute right-0 bg-blued text-white rounded-lg px-5 flex gap-2 py-2">
              <FaPlus className="self-center " onClick={() => Add} /> Add
            </button>{" "}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Signature;
