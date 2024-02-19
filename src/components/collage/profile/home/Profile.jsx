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
    const dispatch = useDispatch();
    const { user,isLoggedIn } = useSelector((state) => state.collageAuth);
    const [editable, setEditable] = useState(false);

    const [avatar, setAvatar] = useState("");

    const [college, setCollege] = useState({
      CollegeName: user ? user.CollegeName : "",
      Email: user ? user.Email : "",
      Phone: user ? user.Phone : "",
      Address: user ? user.Address : "",
      Website: user ? user.Website : "",
      avatar:{
        public_id: user ? user.avatar.public_id : "",
        url: user ? user.avatar.url : "",

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
    }

    useEffect(() => {
      if (user) {
        setCollege({
          CollegeName: user.CollegeName,
          Email: user.Email,
          Phone: user.Phone,
          Address: user.Address,
          Website: user.Website,
          avatar: {
            public_id: user.avatar.public_id,
            url: user.avatar.url,
          },
          
          Description: user.Description,
          Code: user.code,
          Location: user.Location,
          State: user.State,
          City: user.City,
        });
        dispatch(getCollege());
      }
    }, [dispatch,isLoggedIn]);

    useEffect(() => {

     
      if (user && user.avatar && user.avatar.url) {
        setAvatar(user.avatar.url);
      }
      if (avatar) {
        dispatch(updateAvatar({ avatar }));
        dispatch(getCollege());
      }
      dispatch(updateCollege(college));
    }, [editable]);

  // =======
  // const [editable, setEditable] = useState(false);

  return (
    <div className="px-8">
      {editable && <EditHeader editable={editable} setEditable={setEditable}   handleUpdate={handleUpdate}
      college={college}
      setCollege={setCollege}
      />}
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
    </div>
  );
};

export default Profile;
