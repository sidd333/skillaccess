import React from "react";

export const Progress = () => {
  return (
    <>
      <div className="mx-auto sm:grid grid-cols-4  sm:w-8/12  hidden">
        <div>
          <div className="flex ">
            <div className="sm:w-8 sm:h-8 w-6 h-6 rounded-full p-2 bg-blue-500 sm:p-4 z-20"></div>
            <div className="flex w-full">
              <div className="w-1/2 bg-blue-500 h-2 self-center rounded-e-lg -ml-2 z-10">
                {" "}
              </div>
              <div className="w-1/2 bg-blue-500 h-2 self-center -ml-2 "> </div>
            </div>
          </div>
          <h2 className="text-left -ml-10">Name Assessment</h2>
        </div>

        <div className="-ml-4">
          <div className="flex ">
            <div className="sm:w-8 sm:h-8 w-6 h-6 rounded-full p-2 bg-blue-500 sm:p-4 z-20"></div>
            <div className="flex w-full">
              <div className="w-1/2 bg-blue-500 h-2 self-center -ml-2"> </div>
              <div className="w-1/2 bg-blue-500 h-2 self-center -ml-2 "> </div>
            </div>
          </div>
          <h2>Select Tests</h2>
        </div>
        <div className="-ml-4">
          <div className="flex ">
            <div className="sm:w-8 sm:h-8 w-6 h-6 rounded-full p-2 bg-blue-500 sm:p-4 z-20"></div>
            <div className="flex w-full">
              <div className="w-1/2 bg-blued h-2 self-center -ml-2"> </div>
              <div className="w-1/2 bg-blued h-2 self-center -ml-2 "> </div>
            </div>
          </div>
          <h2>Add Questions</h2>
        </div>
        <div className="-ml-4">
          <div className="flex ">
            <div className="sm:w-8 sm:h-8 w-6 h-6 rounded-full p-2 bg-blued sm:p-4 z-20"></div>
          </div>
          <h2>Review & Submit</h2>
        </div>
      </div>

      <div className="w-full flex sm:hidden">
        <div className="w-1/4 flex">
          <div className="w-1/3 "></div>

          <figure className="w-3 h-3 p-3 rounded-full bg-blue-500 z-50"></figure>

          <div className="w-full bg-blue-500 rounded-lg h-1/3 self-center -ml-1 z-20"></div>
        </div>
        <div className="w-1/4 flex">
          <div className="w-full  bg-blued h-1/3 self-center -ml-2"></div>
          <figure className="w-3 h-3 p-3 rounded-full bg-blued z-50"></figure>
          <div className="w-full bg-blued h-1/3 self-center -ml-1"></div>
        </div>
        <div className="w-1/4 flex">
          <div className="w-1/3  bg-blued h-1/3 self-center "></div>
          <figure className="w-3 h-3 p-3 rounded-full bg-blued z-50"></figure>
          <div className="w-full bg-blued h-1/3 self-center -ml-1"></div>
        </div>
        <div className="w-1/4 flex">
          <div className="w-1/3  bg-blued h-1/3 self-center "></div>
          <figure className="w-3 h-3 p-3 rounded-full bg-blued z-50"></figure>
          <div className="w-1/3  h-1/3 self-center -ml-1"></div>
        </div>
      </div>

      <div className="w-full flex sm:hidden">
        <div className="w-1/4 text-center">Name Assessment</div>
        <div className="w-1/4 text-center">Select Tests</div>
        <div className="w-1/4 text-center">Add Questions</div>
        <div className="w-1/4 text-center">Review & Submit</div>
      </div>
    </>
  );
};
