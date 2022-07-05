import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import noLogo from "../../graphics/User_box_fill.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import plus from "../../Icons/plus.svg";

function Dashboard() {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  return (
    <>
      <div className="acctHeader">
        <FontAwesomeIcon icon={regular("id-badge")} />
        <p>Dashboard</p>
      </div>
      <div className="dashboard">
        <div className="dashDetailsWrapper">
          <div className="dashDetailsHeader">
            <p>Details</p>
            <Link to="/account/edit-profile">
              <FontAwesomeIcon icon={regular("pen-to-square")} />
            </Link>
          </div>
          <div className="line" />
          <div className="dashDetails">
            <div className="logo">
              <img src={user.logo || noLogo} alt="logo" className="logoImg" />
            </div>

            <div className="dashInfo">
              <div className="dashInfoTxt">
                <p className="dashName">Company Name: {user.name || "Name Name"}</p>
                <p className="dashEmail">Email: {user.email || "email@mail.com"}</p>
                <p className="dashEmail">Phone: {user.phoneNumber || "+234 7012345678"}</p>

              </div>
              <p>
                {user.description ||
                  "No 1 courier service in the federal capital. Rquest here or dial any of our numbers to get you goods delivered super fast any where in nigeria. REQUEST NOW!"}
              </p>
            </div>
          </div>
        </div>

        <div className="dashAddressWrapper dashDetailsWrapper">
          <div className="dashDetailsHeader">
            <p>Dispatch Location(s)</p>
            <Link to="/account/locations">
              <FontAwesomeIcon icon={solid("location-dot")} />
            </Link>
          </div>
          <div className="line" />
          <div className="dashAddresses">
            {user.locations.map((location, i) => (
              <AddressDetails key={i} address={location.address} num={i + 1} />
            ))}
            <Link to={"/account/locations"} className="addAddress">
              <img src={plus} alt="Plus" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

const AddressDetails = ({ num = 1, address = "address" }) => {
  return (
    <div className="addressContainer">
      <div className="dashDetailsHeader">
        <p>Address {num}</p>
      </div>
      <div className="line" />
      <p className="fullAddress">{address}</p>
    </div>
  );
};

export default Dashboard;
