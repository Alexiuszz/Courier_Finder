/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../../Icons/Logo.png";
import "../../styles/MainNavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  solid,
  regular,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../redux/user/userActions";
import Hamburger from "../Hamburger";
import NavDropDown from "../NavDropDown";

const MainNavbar = ({ acctDropDown, acctMenuDrop }) => {
  const [opened, setOpened] = React.useState(false);
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.loggedIn); /*  */

  let navigate = useNavigate();

  const open = () => {
    setOpened(!opened);
  };

  return (
    <>
      <div className="navContainer">
        <div className="navItems">
          {/* <img className="topDesign" src={topDesign} alt="" /> */}
          <Link className="logoTitle" to={"/"}>
            <img className="navIcon" src={Logo} alt="Logo" />
            <p>Emissar</p> 
          </Link>
          <div className="navLinkList group1">
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
          </div>
          {/* <LinkList
          className="navLinkList group1" 
          items={["Home", "About", "Help"]}
        /> */}
          <div className="navLinkList">
            <div className="acctWDrop">
              <p
                onClick={() => dispatch(acctDropDown(false))}
                className="navLink"
                sel="acct"
              >
                <FontAwesomeIcon icon={solid("user")} />
                Account{" "}
                <FontAwesomeIcon
                  className={
                    acctMenuDrop ? "arrowHead rotate" : "arrowHead noRotate"
                  }
                  icon={faChevronDown}
                />{" "}
              </p>
              <ul
                className={acctMenuDrop ? "dropList drop" : "dropList noDrop"}
                // style={{ display: acctMenuDrop ? "flex" : "none" }}
              >
                {!loggedIn ? (
                  <>
                    <li>
                      <Link to={"/signup"}>Register</Link>
                    </li>
                    <li>
                      <Link to={"/signin"}>Sign in</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to={"/account"}>Profile</Link>
                    </li>
                    <li
                      onClick={() => {
                        dispatch(signout());
                        navigate("/");
                      }}
                    >
                      {" "}
                      <a href="#"> Signout</a>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <Link to={"/contact"} className="navLink">
              <FontAwesomeIcon icon={solid("phone")} />
              Contact
            </Link>
          </div>
          <Hamburger opened = {opened} open={open} className="navHamburger" color="#121c3f" />
        </div>
      </div>
      <NavDropDown  onClick={() => setOpened(false)} className={opened ? "dropOpen" : "dropClose"} />
    </>
  );
};

export default MainNavbar;
