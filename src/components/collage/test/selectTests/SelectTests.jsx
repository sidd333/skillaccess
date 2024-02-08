import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Progress } from "./Progress";
import { FiPlusCircle } from "react-icons/fi";
import Inputs from "./Inputs";
import { useSelector, useDispatch } from "react-redux";
import {
  setTest,
  setSections,
  removeSections,
  // getSelectedSections,
} from "../../../../redux/features/test/testSlice";

const SelectTests = () => {
  const dispatch = useDispatch();
  const { sections} = useSelector((state) => state.test);

  const [selectedSections, setSelectedSections] = useState([]);



  const addSection = (section) => {
    const updatedSections = [...selectedSections, section];
    // console.log(selectedSections,section);
    dispatch(setSections(section));


    if (selectedSections.length < 5) {
if (selectedSections.includes(section)) {
      return;
    }
    setSelectedSections([...selectedSections, section]);
      dispatch(
        setTest({
          sections: updatedSections,
        })
      );
    }

  

    // dispatch(setSections(sections.filter((s) => s !== section)));
    // console.log(updatedSections);
  };

  const removeSection = (section) => {
    const updatedSections = selectedSections.filter((s) => s !== section);
    dispatch(setSections(updatedSections));
    setSelectedSections(updatedSections);
    // Don't let the user add the same section again
    // dispatch(setSections([...sections, section]));
    // console.log(updatedSections);
  };

  useEffect(() => {
    // getSelectedSections();
    console.log(selectedSections,"selected");
  }, [addSection, removeSection, selectedSections]);

  return (
    <div className="font-dmSans text-sm font-bold">
      <Header />
      <Progress />

      {/* larger screens */}
      <div className="  w-11/12 mx-auto min-h-[90vh] my-2 rounded-lg tracking-wide justify-between  ">
        <div>
          <h2 className="w-11/12  text-gray-400 sm:h-10 py-2 sm:mt-12  mt-4 rounded-lg mb-10 sm:mb-1 ">
            Your Assessment can include upto 5 tests, Browse the test library
            and add the most relevant tests.{" "}
          </h2>
        </div>

        <div className=" mx-auto  my-2 rounded-lg grid sm:grid-cols-5 grid-cols-2 gap-6">
        {
        selectedSections?.map((section) => (
          <div className="w-full h-32 border border-dashed rounded-lg border-blued col-span-1 flex justify-center ">
   {console.log(section,"section")}
          <span className="self-center">
          <h2 className="text-xl font-bold mb-4">{section?.name}</h2>
          <div className="flex gap-2">
            <img
              src="../../images/icons/menu-boxed.png"
              alt=""
              className="self-center"
            />
            <h2 className="font-bold text-xs text-gray-400 self-center">
          {section?.description}
            </h2>
          </div>
          <div className="flex justify-between mt-1">
            {" "}
            <div className="flex gap-2 w-full">
              <img
                src="../../images/icons/stopwatch.png"
                alt=""
                className="w-6 h-6 self-center"
              />
              <h2 className="font-bold text-xs text-gray-400 self-center">
               {section?.Time}
              </h2>
            </div>
            <img src="../../images/icons/cross.png" alt=""    onClick={() => removeSection(section)}/>
          </div>
        </span>
       
          </div>
           ))
      }

          {
       
            
          selectedSections?.length < 5 ? (
                Array.from({ length: 5 - selectedSections.length }).map((_, index) => (
                  <div
                    key={index}
                    className="w-full h-32 border border-dashed rounded-lg border-blued col-span-1 flex justify-center "
                  >
                    <span className="self-center">
                      <FiPlusCircle className="mx-auto sm:w-8 sm:h-8 text-gray-200" />
                      <h2 className="font-semibold mt-1">Add section {index + 1} </h2>
                    </span>
                  </div>
                ))
              ) : null
            
          }
          {/* <div className="w-full h-32 border border-dashed rounded-lg border-blued col-span-1 flex justify-center ">
            <span className="self-center">
              <FiPlusCircle className="mx-auto sm:w-8 sm:h-8 text-gray-200" />
              <h2 className="font-semibold mt-1">Add section 2 </h2>
            </span>
          </div> */}
      
        </div>

        <Inputs />
        <div className="flex flex-wrap gap-2 justify-center">
          {sections.map((section) => (
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{section.name}</h2>
                <p>{section.desription}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => addSection(section)}
                    className="btn btn-primary"
                  >
                    Add
                  </button>
                  <button
                    onClick={() => removeSection(section)}
                    className="btn btn-primary"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-xl font-bold mb-4">UX Test - Basics</h2>
              <p className="text-sm leading-[26px] text-[#8F92A1]">
                This UX/UI design test evaluates candidates' knowledge of the
                overall UX/UI design process and their ability to turn feature
                requirements into useful and intuitive designs for digital
                products that provide a great experience to your users.
              </p>
              <div className="flex justify-between">
                <button className="w-[90px] h-[40px] bg-[#8F92A120] rounded-xl">
                  Details
                </button>
                <button className=" bg-[#00875A85] h-[40px] w-[72px] rounded-xl text-white">
                  Add
                </button>
              </div>
            </div>
          </div>{" "} */}
        </div>
      </div>
    </div>
  );
};

export default SelectTests;
