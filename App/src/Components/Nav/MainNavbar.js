import React from "react";
import LinkList from "../LinkList";
import topDesign from "../../graphics/C.svg";
import "../../styles/MainNavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../redux/user/userActions";

const MainNavbar = ({ acctDropDown, acctMenuDrop }) => {

  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.loggedIn);

  let navigate = useNavigate();

  return (
    <div className="navContainer">
      <div className="navItems">
        <img className="topDesign" src={topDesign} alt="" />
        <h3 className="navIcon">CF</h3>
        <LinkList
          className="navLinkList group1"
          items={["Home", "About", "Help"]}
        />
        <div className="navLinkList">
          <div className="acctWDrop">
            <p onClick={() => dispatch(acctDropDown(false))} className="navLink">
              Account{" "}
              <FontAwesomeIcon className="arrowHead" icon={faChevronDown} />{" "}
            </p>
            <ul
              className= {acctMenuDrop ? "dropList drop": "dropList noDrop"}
              // style={{ display: acctMenuDrop ? "flex" : "none" }}
            >
              {!loggedIn ? (
                <>
                  <li>
                    <Link to={"/auth/signup"}>Register</Link>
                  </li>
                  <li>
                    <Link to={"/auth/signin"}>Sign in</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to={"/profile"}>Profile</Link>
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
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
