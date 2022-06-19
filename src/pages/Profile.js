import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { IconButton } from "../Components/form_components/FormComponents";
import { fetchUser } from "../redux/user/userActions";

function Profile() {
  const token = useSelector((state) => state.user.token);
  const skipProfile = useSelector((state) => state.user.skipProfile);
  const email = useSelector((state) => state.user.user.email);
  const createdProfile = useSelector((state) => state.user.user.createdProfile);
  const dispatch = useDispatch();

  let location = useLocation();
  if (!createdProfile) {
    if (!skipProfile)
      return <Navigate to="/createProfile" state={{ from: location }} />;
  }
  //set timeout in use effect if keep getting stuck in loading

  if (!token) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <h1>User Account </h1>
        <p>{email}</p>
        <IconButton
            text="Continue"
            handleSubmit={() => {
              dispatch(fetchUser())
            }}
            className="continueBtn"
          />
      </div>
    );
  }
}

export default Profile;
