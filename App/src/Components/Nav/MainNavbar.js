import React from "react";
import LinkList from "../LinkList";
import topDesign from "../../graphics/C.svg";
import "../../styles/MainNavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from '../../auth_setup/use-auth';
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../redux/user/userActions";

const MainNavbar = ({ acctDropDown, acctMenuDrop }) => {
  // const auth = useAuth();

  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);

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
              className="dropList"
              style={{ display: acctMenuDrop ? "flex" : "none" }}
            >
              {!token ? (
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
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
