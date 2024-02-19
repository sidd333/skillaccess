import React, { useEffect } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CgPinAlt } from "react-icons/cg";
import { BsPhone } from "react-icons/bs";
import { PiLinkSimple } from "react-icons/pi";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCollege,
  updateCollege,
} from "../../../../redux/collage/auth/authSlice";

const Header = ({
  editable,
  setEditable,
  college,
  setCollege,
  avatar,
  setAvatar,
}) => {
  const dispatch = useDispatch();
  const [avatarPreview, setAvatarPreview] = useState(
    "../../images/user.jpg"
  );
  // const {user} = useSelector((state) => state.collageAuth);

  useEffect(() => {
    dispatch(getCollege());
    // console.log(college, "college");
  }, [dispatch]);

  const handleAvatarChange = (e) => {
    console.log(e.target.files[0]);
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    // {/* profile container */}
    <section className="bg-gray-50 rounded-xl px-6">
      {/* first section */}
      <div className=" flex justify-between border-b  bg-gray-50 rounded-t-lg py-8">
        {/* profile photo */}
        <div className="flex gap-2 px-3 py-1 mt-2">
          {editable ? (
            <div className="w-14 h-14 bg-blued self-center rounded-lg">
              <img src={avatar} alt="" width='50px' />
              <input
                type="file"
                name="avatar"
                id="file"
           className=""
                accept="image/*"
                onChange={handleAvatarChange}
              />
            </div>
          ) : (
            <div className="relative w-14 h-14 bg-blued self-center rounded-lg flex items-center">
              <img src={college.avatar.url} alt="avatar" width='50px' className="relative top[-50%]" />
              <div className="absolute bottom-2 -right-1 w-6 h-6 rounded-lg p-[.35rem] bg-blue-700 bg-opacity-80">
                <img src="../../images/icons/pen.png" alt="" onClick={() => setEditable(true)} />
              </div>
            </div>
          )}

          <div className="ml-1 mt-1">
            <h2 className="text-2xl  font-bold  py-1  ">
              {editable && college ? (
                <input
                  type="text"
                  value={college.CollegeName}
                  onChange={(e) =>
                    setCollege({ ...college, CollegeName: e.target.value })
                  }
                  className="bg-transparent border-none focus:outline-none"
                />
              ) : (
                college.CollegeName
              )}
            </h2>
            <h2 className="text-sm text-gray-400   pb-2">UPME00006369</h2>
          </div>
        </div>

        {!editable && (
          <div className="self-center text-gray-400 mr-2">
            <button
              className="py-2 text-white rounded-xl  bg-blue-700 font-bold flex gap-2 px-4"
              onClick={() => setEditable(true)}
            >
              <img src="../../images/icons/pen.png" alt="" />{" "}
              <p>Edit Profile</p>
            </button>
          </div>
        )}
      </div>

      {/* second section */}
      <div className="border-b px-6  py-8 bg-gray-50 font-dmSans">
        <h1 className="text-lg font-bold">Overview</h1>
     {
      college.Description ? (
        <p className="text-sm  font-medium mt-2">
          {editable && college ? (
            <textarea
              type="text"
              value={college.Description}
              onChange={(e) =>
                setCollege({ ...college, Description: e.target.value })
              }
              className="bg-transparent border-none focus:outline-none"
            />
          ) : (
            college.Description
          )}
        </p>
      ) : (
        <p className="text-sm  font-medium mt-2">
            {editable && college ? (
            <textarea
              type="text"
              value={college.Description}
              onChange={(e) =>
                setCollege({ ...college, Description: e.target.value })
              }
              className="bg-transparent border-none focus:outline-none"
            />
          ) : (
           'No Description Available'
          )}
      
        </p>
      )
     }
      </div>
      <div className="px-6  py-8 bg-gray-50 font-dmSans flex sm:gap-32 text-sm font-medium">
        <div className="flex gap-2">
          <div className="w-10 h-10 rounded-lg bg-gray-200 flex justify-center">
            <MdOutlineEmail className="self-center text-2xl" />
          </div>
          {
            college.Email ? (
              <p className="self-center">
              {editable && college ? (
                <input
                  type="text"
                  value={college.Email}
                  onChange={(e) =>
                    setCollege({ ...college, Email: e.target.value })
                  }
                  className="bg-transparent border-none focus:outline-none"
                />
              ) : (
                college.Email
              )}
            </p>
            ) : (
              <p className=" font-medium self-center">
              No Email Available
            </p>
            )
          }
          {/* <p className="font-medium self-center">
          </p> */}
        </div>

        <div className="flex gap-2">
          <div className="w-10 h-10 rounded-lg bg-gray-200 flex justify-center">
            <BsPhone className="self-center text-2xl" />
          </div>
          <p className="self-center">011 - 250 847 26, 011 - 456 398 26</p>
        </div>

        <div className="flex gap-2 font-dmSans">
          <div className="w-10 h-10 rounded-lg bg-gray-200 flex justify-center">
            {" "}
            <PiLinkSimple className="self-center text-2xl" />
          </div>
          <p className="text-blue-700 self-center">http://www.vetindia.in/</p>
        </div>
      </div>

      <div className="px-6 flex gap-2  pb-8">
        <div className="w-10 h-10  rounded-lg bg-gray-200 flex justify-center">
          {" "}
          <CgPinAlt className="self-center text-3xl" />
        </div>
        <p className="break-words max-w-[316px] text-sm  font-dmSans font-medium self-center">
          G - 55-56, Street No.-1, Palam Extension, Near Sector - 7, Dwarka,
          Delhi, 110075
        </p>
      </div>
    </section>
  );
};

export default Header;
