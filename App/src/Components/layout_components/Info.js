import React from "react";
import { IconButton } from "../form_components/FormComponents";
import { Link } from "react-router-dom";
import Logo from "../../Icons/Logo.png";
import Rider from "../../graphics/rider-removebg-preview.png";
import BG from "../../graphics/Body Design1.svg";

export default function Info() {
  return (
    <div className="homeInfo">
    <img className="infoBG" src={BG} alt="BG" />
      <div className="infoContent">
        <div className="banner">
          <p>Courier Finder </p>
          <img src={Logo} alt="Logo" />
        </div>
        <p className="details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          molestias deserunt pariatur est tenetur assumenda eveniet. Aliquam
          minima sunt voluptatum ut consequatu lor
        </p>
        <div className="infoBtns">
          <Link to="/signup">
            <IconButton className="register" text="Register" />
          </Link>
          <IconButton className="learn" text="Learn more" />
        </div>
      </div>
      <img src={Rider} alt="rider" className="infoGraphic" />
    </div>
  );
}
