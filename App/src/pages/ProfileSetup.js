import React from "react";
import { Signup } from "./Auth-pages/Signup";
import noLogo from "../graphics/User_box_fill.svg";
import "../styles/ProfileSetup.css";
import imgSelect from "../Icons/Img_box_fill.svg";
import {
  IconButton,
  TextArea,
} from "../Components/form_components/FormComponents";

function ProfileSetup() {
  const [logo, setLogo] = React.useState({});
  const [fileName, setFileName] = React.useState("Choose Logo");
  const [description, setDescription] = React.useState("");

  const handlePictureSelected = (e) => {
    var picture = e.target.files[0];
    if (picture !== undefined) {
      setFileName(picture.name);
      var src = URL.createObjectURL(picture);
      setLogo({
        picture: picture,
        src: src,
      });
    }
  };

  const handleChange = ({ value }) => {
    setDescription(value);
  };
  return (
    <Signup>
      <div className="profileSetupWrapper">
        <h1 className="profileSetupHeader"> Profile Setup </h1>
        <div className="profileSetup">
          <div className="logoSelect">
            <div className="logo">
              <img
                src={logo.src !== undefined ? logo.src : noLogo}
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
            <label for="file">
              {fileName}
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
            handleSubmit={(f) => f}
            className="skipBtn"
          />
          <IconButton
            text="Continue"
            handleSubmit={(f) => f}
            className="continueBtn"
          />
        </div>
      </div>
    </Signup>
  );
}

export default ProfileSetup;
