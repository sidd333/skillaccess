import React from "react";
import Header from "./Header";

const Security = () => {
  return (
    <div className="w-11/12 mx-auto pt-4">
      <Header />

      <div className="flex gap-40 mt-20">
        <div className="sm:w-2/6">
          <h1 className="text-lg font-bold">Email Notification</h1>
          <p className="text-gray-400">
            We'll ask for a security code when we need to confirm that it's you
            logging in.
          </p>
        </div>
        <div>
          {/* toggle 1 */}
          <div className="flex gap-4 mb-4">
            <input
              type="checkbox"
              name=""
              id=""
              className="bg-[#DEEBFF] rounded border-none outline-none focus:outline-0 focus:ring-0 h-6 self-center w-6 "
            />
            <div>
              <h1 className="text-lg font-bold">Text Message</h1>
              <p className="text-gray-400 whitespace-pre-wrap">
                Will send code to {"  "}******982
              </p>
            </div>
          </div>

          {/* toggle 1 */}
          <div className="flex gap-4 mb-4">
            <input
              type="checkbox"
              name=""
              id=""
              className="bg-[#DEEBFF] rounded border-none outline-none focus:outline-0 focus:ring-0 h-6 self-center w-6 "
            />
            <div>
              <h1 className="text-lg font-bold">Security app</h1>
              <p className="text-gray-400 whitespace-pre-wrap">
                You'll get a code from your security app.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-40 mt-10">
        <div className="sm:w-2/6">
          <h1 className="text-lg font-bold">Change Password</h1>
          <p className="text-gray-400">
            Create a new strong password that is at least 12 characters long.
          </p>
        </div>
        <div className="">
          {/* toggle 1 */}
          <div className="flex gap-2 flex-col mb-4">
            <h1 className="text-gray-400">Type your current password*</h1>
            <input
              type="text"
              className="py-3 rounded-xl border-none bg-lGray bg-opacity-5 w-96 placeholder:text-sm placeholder:text-gray-400 font-medium"
              placeholder="Current password"
            />
          </div>

          {/* toggle 1 */}
          <div className="flex gap-2 flex-col mb-4">
            <h1 className="text-gray-400">Type your new password*</h1>
            <input
              type="text"
              className="py-3 rounded-xl border-none bg-lGray bg-opacity-5 w-96 placeholder:text-sm placeholder:text-gray-400 font-medium"
              placeholder="New password"
            />
          </div>

          {/* toggle 1 */}
          <div className="flex gap-2 flex-col mb-4">
            <h1 className="text-gray-400">Retype your new password*</h1>
            <input
              type="text"
              className="py-3 rounded-xl border-none bg-lGray bg-opacity-5 w-96 placeholder:text-sm placeholder:text-gray-400 font-medium"
              placeholder="Retype password"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
