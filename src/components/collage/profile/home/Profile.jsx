import React, { useEffect, useState } from "react";
import Header from "./Header";
import List from "./List";
import EditHeader from "./EditHeader";
import { useDispatch, useSelector } from "react-redux";
import {
  getCollege,
  updateCollege,
  updateAvatar,
} from "../../../../redux/collage/auth/authSlice";

const Profile = () => {
  // <<<<<<< AnkitaMalik22-ankita-dev
  //   const dispatch = useDispatch();
  //   const { user } = useSelector((state) => state.collageAuth);
  //   const [editable, setEditable] = useState(false);

  //   const [avatar, setAvatar] = useState("");

  //   const [college, setCollege] = useState({
  //     CollegeName: user ? user.CollegeName : "",
  //     Email: user ? user.Email : "",
  //     Phone: user ? user.Phone : "",
  //     Address: user ? user.Address : "",
  //     Website: user ? user.Website : "",
  //     avatar: user && user.avatar && user.avatar.public_url ? user.avatar.public_url : "",
  //     Description: user ? user.Description : "",
  //     Code: user ? user.code : "",
  //     Location: user ? user.Location : "",
  //     State: user ? user.State : "",
  //     City: user ? user.City : "",
  //   });

  //   const handleUpdate = (college) => {
  //     console.log("update");
  //     dispatch(updateCollege(college));
  //     setEditable(false);
  //   }

  //   useEffect(() => {

  // if (user) {
  //   setCollege({
  //     CollegeName: user.CollegeName,
  //     Email: user.Email,
  //     Phone: user.Phone,
  //     Address: user.Address,
  //     Website: user.Website,
  //     avatar: user && user.avatar && user.avatar.public_url ? user.avatar.public_url : "",
  //     Description: user.Description,
  //     Code: user.code,
  //     Location: user.Location,
  //     State: user.State,
  //     City: user.City,
  //   });
  // }

  //     dispatch(getCollege());
  //     console.log(user , "user")
  //   }
  //   , [dispatch]);

  //   useEffect(() => {
  //     if (user && user.avatar && user.avatar.public_url) {
  //       setAvatar(user.avatar.public_url);
  //     }
  //     if (avatar) {
  //       dispatch(updateAvatar({ avatar }));
  //     }

  //   }, [editable]);

  // =======
  const [editable, setEditable] = useState(false);

  return (
    <div className="px-8">
      {/* {editable && <EditHeader editable={editable} setEditable={setEditable}   handleUpdate={handleUpdate}
      college={college}
      setCollege={setCollege}
      />} */}
      {editable && <EditHeader editable={editable} setEditable={setEditable} />}
      {/* <Header
        editable={editable}
        setEditable={setEditable}
        handleUpdate={handleUpdate}
        college={college}
        setCollege={setCollege}
        setAvatar={setAvatar}
        avatar={avatar}
      /> */}
      <Header editable={editable} setEditable={setEditable} />

      <List editable={editable} setEditable={setEditable} />
    </div>
  );
};

export default Profile;
