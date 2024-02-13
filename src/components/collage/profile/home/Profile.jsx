import React, { useState } from "react";
import Header from "./Header";
import List from "./List";
import EditHeader from "./EditHeader";

const Profile = () => {
  const [editable, setEditable] = useState(true);
  return (
    <div className="px-8">
      {editable && <EditHeader editable={editable} setEditable={setEditable} />}
      <Header editable={editable} setEditable={setEditable} />

      <List editable={editable} setEditable={setEditable} />
    </div>
  );
};

export default Profile;
