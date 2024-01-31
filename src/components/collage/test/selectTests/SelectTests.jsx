import React, { useState ,useEffect} from "react";
import Header from "./Header";
import { Progress } from "./Progress";
import { FiPlusCircle } from "react-icons/fi";
import Inputs from "./Inputs";
import {useSelector,useDispatch} from "react-redux";
import { setTest ,setSections,removeSections} from "../../../../redux/features/test/testSlice";

const SelectTests = () => {
  const dispatch = useDispatch();
  const  {sections ,selectedSections} = useSelector((state) => state.test);


// const [selected, setselected] = useState([]);

// const addSection = (section) => {
//   const updatedSections = [...selected, section];
//   setselected(updatedSections);
//   dispatch(setTest({
//     sections: updatedSections
//   }));

//   dispatch(setSections(sections.filter((s) => s !== section)));

//   console.log(updatedSections);
// }

// const removeSection = (section) => {
//   const updatedSections = selected.filter((s) => s !== section);
//   setselected(updatedSections);
//   dispatch(setTest({
//     sections: updatedSections
//   }));


//   // Don't let the user add the same section again
//   dispatch(setSections([...sections, section]));

//   console.log(updatedSections);
// }


const addSection = (section) => {
  const updatedSections = [...selectedSections, section];
  // console.log(selectedSections,section);
  dispatch(setSections(section));
console.log(selectedSections);

    dispatch(setTest({
    sections: selectedSections
  }));
  // dispatch(setSections(sections.filter((s) => s !== section)));
  // console.log(updatedSections);
}

const removeSection = (section) => {
  const updatedSections = selectedSections.filter((s) => s !== section);
  dispatch(setSections(updatedSections));
  // Don't let the user add the same section again
  // dispatch(setSections([...sections, section]));
  // console.log(updatedSections);
}





  return (
    <div className="font-dmSans text-sm font-bold">
      <Header />
      <Progress />

      {/* larger screens */}
      <div className="  w-[95.6%] mx-auto min-h-[90vh] my-2 rounded-lg tracking-wide justify-between  ">
        <div>
          <h2 className="w-11/12  text-gray-400 sm:h-10 p-2 sm:mt-12  mt-4 rounded-lg pl-7 mb-10 sm:mb-1 ">
            Your Assessment can include upto 5 tests, Browse the test library
            and add the most relevant tests.{" "}
          </h2>
        </div>

        <div className="w-[95.6%] mx-auto  my-2 rounded-lg grid sm:grid-cols-5 grid-cols-2 gap-6">
          <div className="w-full h-28 border border-dashed rounded-lg border-blued col-span-1 flex justify-center ">
            <span className="self-center">
              <FiPlusCircle className="mx-auto sm:w-8 sm:h-8 text-gray-200" />
              <h2 className="font-semibold mt-1">Add section 1 </h2>
            </span>
          </div>
          <div className="w-full h-28 border border-dashed rounded-lg border-blued col-span-1 flex justify-center ">
            <span className="self-center">
              <FiPlusCircle className="mx-auto sm:w-8 sm:h-8 text-gray-200" />
              <h2 className="font-semibold mt-1">Add section 2 </h2>
            </span>
          </div>
          <div className="w-full h-28 border border-dashed rounded-lg border-blued col-span-1 flex justify-center ">
            <span className="self-center">
              <FiPlusCircle className="mx-auto sm:w-8 sm:h-8 text-gray-200" />
              <h2 className="font-semibold mt-1">Add section 3 </h2>
            </span>
          </div>
          <div className="w-full h-28 border border-dashed rounded-lg border-blued col-span-1 flex justify-center ">
            <span className="self-center">
              <FiPlusCircle className="mx-auto sm:w-8 sm:h-8 text-gray-200" />
              <h2 className="font-semibold mt-1">Add section 4 </h2>
            </span>
          </div>
          <div className="w-full h-28 border border-dashed rounded-lg border-blued col-span-1 flex justify-center ">
            <span className="self-center">
              <FiPlusCircle className="mx-auto sm:w-8 sm:h-8 text-gray-200" />
              <h2 className="font-semibold mt-1">Add section 5 </h2>
            </span>
          </div>
        </div>

        <Inputs />
        <div className="flex flex-wrap gap-2 justify-center">

          {
            sections.map((section) => (
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{section.name}</h2>
                  <p>{section.desription}</p>
                  <div className="card-actions justify-end">
                    <button onClick={() => addSection(section)} className="btn btn-primary">Add</button>
                    <button onClick={() => removeSection(section)} className="btn btn-primary">Remove</button>
                  </div>
                </div>
              </div>
            ))
          }
          {/* <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SelectTests;
