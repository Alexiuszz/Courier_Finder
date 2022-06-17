import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "../form_components/FormComponents";

function OrderLayout() {
  return (
    <div className="orderContainer">
      <div className="orderItems">
              <div className="orderTxt">
                <h1>Get a courier now!</h1>
                <p>Get a dispatch rider anywhere you are in minutes.</p>
              </div>
              <Link to='/request'>
                      <IconButton className="RequestBtn" text="Request" />
              </Link>
      </div>
    </div>
  );
}

export default OrderLayout;
