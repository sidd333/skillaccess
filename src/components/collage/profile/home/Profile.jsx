import React, { useEffect, useState } from "react";
import Header from "./Header";
import List from "./List";
import EditHeader from "./EditHeader";
import { useDispatch, useSelector } from "react-redux";
import {
  getCollege,
  updateCollege,
  updateAvatar,
  setUploadImg,
} from "../../../../redux/collage/auth/authSlice";

const Profile = () => {
  // <<<<<<< AnkitaMalik22-ankita-dev
  const dispatch = useDispatch();
  const { user, isLoggedIn, uploadImg } = useSelector(
    (state) => state.collageAuth
  );
  const [editable, setEditable] = useState(false);

  const [avatar, setAvatar] = useState("");

  const [college, setCollege] = useState({
    CollegeName: user ? user.CollegeName : "",
    Email: user ? user.Email : "",
    Phone: user ? user.Phone : "",
    Address: user ? user.Address : "",
    Website: user ? user.Website : "",
    Phone: user ? user.Phone : "",
    avatar: {
      public_id: user && user.avatar ? user.avatar.public_id || "" : "",
      url: user && user.avatar ? user.avatar.url : "",
    },
    Description: user ? user.Description : "",
    Code: user ? user.code : "",
    Location: user ? user.Location : "",
    State: user ? user.State : "",
    City: user ? user.City : "",
  });

  const handleUpdate = (college) => {
    console.log("update");
    dispatch(updateCollege(college));
    setEditable(false);
  };

  useEffect(() => {
    if (user) {
      setCollege({
        CollegeName: user.CollegeName || "college name ",
        Email: user.Email || "email",
        Phone: user.Phone || "phone",
        Address: user.Address || "address",
        Website: user.Website || "web",
        avatar: {
          public_id: user.avatar?.public_id || "",
          url: user.avatar?.url || "",
        },

        Description: user.Description || "desc",
        Code: user.code || "code",
        Location: user.Location || "loc",
        State: user.State || "state",
        City: user.City || "city",
      });
      dispatch(getCollege());
    }
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    dispatch(getCollege()).then((res) =>
      setCollege({
        CollegeName: res.payload.CollegeName || "college name ",
        Email: res.payload.Email || "email",
        Phone: res.payload.Phone || "phone",
        Address: res.payload.Address || "address",
        Website: res.payload.Website || "web",
        avatar: {
          public_id: res.payload.avatar?.public_id || "",
          url: res.payload.avatar?.url || "",
        },

        Description: res.payload.Description || "desc",
        Code: res.payload.code || "code",
        Location: res.payload.Location || "loc",
        State: res.payload.State || "state",
        City: res.payload.City || "city",
      })
    );

    console.log(user);
  }, []);

  useEffect(() => {
    if (user && user.avatar && user.avatar.url) {
      setAvatar(user.avatar.url);
    }
    if (avatar) {
      dispatch(updateAvatar({ avatar }));
      dispatch(getCollege());
      // setCollege({ ...college, avatar: { url:user.avatar.url} });
    }
    // dispatch(updateCollege(college));
    dispatch(getCollege());
  }, [editable]);

  // useEffect(() => {
  //   dispatch(getCollege());
  //   dispatch(setUploadImg(false))
  // }, [uploadImg]);
  // =======
  // const [editable, setEditable] = useState(false);

  return (
    <div className="px-8">
      {editable && (
        <EditHeader
          editable={editable}
          setEditable={setEditable}
          handleUpdate={handleUpdate}
          college={college}
          setCollege={setCollege}
        />
      )}
      {/* {editable && <EditHeader editable={editable} setEditable={setEditable} />} */}
      <Header
        editable={editable}
        setEditable={setEditable}
        handleUpdate={handleUpdate}
        college={college}
        setCollege={setCollege}
        setAvatar={setAvatar}
        avatar={avatar}
      />
      {/* <Header editable={editable} setEditable={setEditable} /> */}

      <List editable={editable} setEditable={setEditable} />
      {/* {window.location.reload(true)} */}
    </div>
  );
};

export default Profile;
