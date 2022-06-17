import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavDropDown({ onClick = f=>f, className = "" }) {
  const loggedIn = useSelector((state) => state.user.loggedIn);
  return (
    <div onClick={onClick} className={`${className} dropDownList`}>
      <Link className="navLink" to={"/"}>
        <FontAwesomeIcon icon={solid("house")} />
        Home
      </Link>
      <Link className="navLink" to={"/about"}>
        <FontAwesomeIcon icon={regular("circle-question")} />
        About
      </Link>
      <Link className="navLink" to={"/help"}>
        <FontAwesomeIcon icon={solid("hand-holding-hand")} />
        Help
      </Link>
      {!loggedIn ? (
        <Link to={"/signin"}>Sign in</Link>
      ) : (
        <Link to={"/profile"}>Profile</Link>
      )}
      <Link to={"/contact"} className="navLink">
        <FontAwesomeIcon icon={solid("phone")} />
        Contact
      </Link>
    </div>
  );
}

export default NavDropDown;
