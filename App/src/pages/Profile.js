import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const token = useSelector((state) => state.user.token);
  const email = useSelector((state) => state.user.user.email);

  if (!token) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <h1>User Account </h1>
        <p>{email}</p>
      </div>
    );
  }
}

export default Profile;
