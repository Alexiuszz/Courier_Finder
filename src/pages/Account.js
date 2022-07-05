import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import Dashboard from "../Components/layout_components/Dashboard";
import Footer from "../Components/layout_components/Footer";
import Loader from "../Components/Loader";
import ProfileWrapper from "../Components/wrappers/ProfileWrapper";
import "../styles/account.css";
// import { IconButton } from "../Components/form_components/FormComponents";
// import { fetchUser } from "../redux/user/userActions";

function Account() {
  const token = useSelector((state) => state.user.token);
  const skipProfile = useSelector((state) => state.user.skipProfile);
  const user = useSelector((state) => state.user.user);

  const [selected, setSelected] = React.useState("/account");

  let location = useLocation();
  // const dispatch = useDispatch();

  React.useEffect(() => {
    setSelected(location.pathname);
  }, [location]);
  if (!user.createdProfile) {
    if (!skipProfile)
      return <Navigate to="/createProfile" state={{ from: location }} />;
  }
  // set timeout in use effect if keep getting stuck in loading

  if (!token) {
    return <Loader color="black" loading={!token} />;
  } else {
    return (
      <>
        {selected !== "/account" && (
          <div className="backArrowContainer">
            <Link to={'/account'}>
              <FontAwesomeIcon icon={solid("angles-left")} />
            </Link>
          </div>
        )}
        <div className="acctBG">
          <div className="acctContainer">
            <div className={`acctSideBar ${selected !== "/account" && 'hide'}`}>
              <ul className="sideBarLinks">
                <li
                  className={
                    selected === "/account/dashboard" ? "selected" : ""
                  }
                >
                  <FontAwesomeIcon icon={regular("id-badge")} />
                  <Link to={"/account/dashboard"}>Dashboard</Link>
                </li>
                <li
                  className={selected === "/account/requests" ? "selected" : ""}
                >
                  <FontAwesomeIcon icon={solid("file-invoice")} />
                  <Link to={"/account/requests"}>Requests</Link>
                </li>
                <li
                  className={
                    selected === "/account/locations" ? "selected" : ""
                  }
                >
                  <FontAwesomeIcon icon={solid("location-dot")} />
                  <Link to={"/account/locations"}>Locations</Link>
                </li>
                <li
                  className={selected === "/account/vehicles" ? "selected" : ""}
                >
                  <FontAwesomeIcon icon={solid("motorcycle")} />
                  <Link to={"/account/vehicles"}>Vehicles</Link>
                </li>
                <li className={selected === "/account/inbox" ? "selected" : ""}>
                  <FontAwesomeIcon icon={solid("inbox")} />
                  <Link to={"/account/inbox"}>Inbox</Link>
                </li>
                <li
                  className={selected === "/account/reviews" ? "selected" : ""}
                >
                  <FontAwesomeIcon icon={regular("star-half-stroke")} />
                  <Link to={"/account/reviews"}>Review and Ratings</Link>
                </li>
                <div className="line" />
                <li
                  className={
                    selected === "/account/edit-profile" ? "selected" : ""
                  }
                >
                  <FontAwesomeIcon icon={regular("pen-to-square")} />
                  <Link to={"/account/edit-profile"}>Edit Profile</Link>
                </li>
                <li
                  className={
                    selected === "/account/change-password" ? "selected" : ""
                  }
                >
                  <FontAwesomeIcon icon={solid("unlock")} />
                  <Link to={"/account/change-password"}>Change Password</Link>
                </li>
                <li
                  className={selected === "/account/history" ? "selected" : ""}
                >
                  <FontAwesomeIcon icon={solid("clock-rotate-left")} />
                  <Link to={"/account/history"}>History</Link>
                </li>
              </ul>
            </div>
            <ProfileWrapper className={`${selected === "/account" && 'hide'}`}>
              {selected === "/account" && (
                <div className="hide">
                  <Dashboard />
                </div>
              )}
              <Outlet />
            </ProfileWrapper>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Account;
