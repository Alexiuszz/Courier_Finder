import React from "react";
import { Signup } from "./Auth-pages/Signup";
import noLogo from "../graphics/User_box_fill.svg";
import "../styles/ProfileSetup.css";
import imgSelect from "../Icons/Img_box_fill.svg";

import FileBase64 from "react-file-base64";
import {
  IconButton,
  TextArea,
} from "../Components/form_components/FormComponents";
import { useDispatch, useSelector } from "react-redux";
import { submitProfile } from "../redux/user/userActions";
import { SKIP_PROFILE } from "../redux/user/userTypes";
import { Navigate, useLocation } from "react-router-dom";

function ProfileSetup() {
  const [logo, setLogo] = React.useState(null);
  // const [fileName, setFileName] = React.useState("Choose Logo");
  // const [file, setFile] = React.useState(null);
  const [description, setDescription] = React.useState("");

  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.user.email);
  const createdProfile = useSelector((state) => state.user.user.createdProfile);

  // const handlePictureSelected = (e) => {
  //   setFile(e.target.files[0]);
  //   if (file !== null) {
  //     setFileName(file.name);

  //     var src = URL.createObjectURL(file);
  //     console.log(src);
  //     setLogo(src);
  //   }
  // };
  const handlePictureSelected = (img) => {
    if (img !== null) {
      setLogo(img);
    }
  };

  const handleChange = ({ value }) => {
    setDescription(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let profile = {
      logo: logo,
      email: email,
      description: description,
    };
    dispatch(submitProfile(profile));
  };

  const handleSkip = (e) => {
    e.preventDefault();
    dispatch({ type: SKIP_PROFILE });
    window.location.href = `#/account`;
  };

  let location = useLocation();
  if (createdProfile) {
    return <Navigate to="/account" state={{ from: location }} />;
  }
  return (
    <Signup>
      <div className="profileSetupWrapper">
        <h1 className="profileSetupHeader"> Profile Setup </h1>
        <div className="profileSetup">
          <div className="logoSelect">
            <div className="logo">
              <img
                src={logo !== undefined && logo !== null ? logo : noLogo}
                alt="logo"
                className="logoImg"
              />
            </div>
            <input
              onChange={handlePictureSelected}
              type="file"
              name="file"
              id="file"
              className="inputFile"
            />
            <label htmlFor="file">
              <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) => handlePictureSelected(base64)}
              />
              <img src={imgSelect} alt="ilogo select" />
            </label>
          </div>

          {/* Description */}
          <div className="descriptionTxt">
            <TextArea
              name="description"
              handleChange={handleChange}
              value={description}
              cols="35"
              rows="15"
              label="Add company description(Optional)"
              className="description"
            />
            {/* <IconButton text="Submit" handleSubmit={f => f} className='submitDescription' /> */}
          </div>
        </div>

        <div className="setupBtns">
          <IconButton
            text="Skip &gt;&gt;"
            handleSubmit={handleSkip}
            className="skipBtn"
          />
          <IconButton
            text="Continue"
            handleSubmit={handleSubmit}
            className="continueBtn"
          />
        </div>
      </div>
    </Signup>
  );
}

export default ProfileSetup;
