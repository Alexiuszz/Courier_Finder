import React, { useState } from "react";
import "../../styles/footer.css";
import { Divider, InputwButton } from "../form_components/FormComponents";
import LinkList from "../LinkList";
import Logo from "../../Icons/Logo.png";

export default function Footer() {
  const [val, setVal] = useState("");

  const handleChange = ({ value }) => {
    setVal(value);
  };

  return (
    <div className="mainFooter">
      <div className="footerContainer">
        <div className="footerBody">
          <div className="footerTexts">
            <div className="footerAbout">
              <p className="listHeader">About</p>
              <LinkList
                className="footerLinks"
                items={["About", "Contact", "Privacy Policy", "Terms of Use"]}
              />
            </div>
            <div className="footerBiz">
              <p className="listHeader">Business</p>
              <LinkList
                className="footerLinks"
                items={["Logistics", "Market", "Tracker", "Invest"]}
              />
            </div>
            <div className="footerHelp">
              <p className="listHeader">Help and Support</p>
              <LinkList
                className="footerLinks"
                items={["Request and Deliver", "Tracking", "Technical Support"]}
              />
            </div>
            <div className="footerPeople">
              <p className="listHeader">People</p>
              <LinkList
                className="footerLinks"
                items={["Affiliate Program", "Couriers", "Career"]}
              />
            </div>
          </div>
          <div className="footerSocials">
            <div className="newsletter">
              <p className="newsletterText">Get updates on exciting offers</p>
              <InputwButton
                className="sub"
                value={val}
                label="E-mail"
                button="Subscribe"
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>
        <Divider />
      </div>
      <div className="footerBottom">
        <div className="footerBtmItems">
          <h1>
            Courier Finder
            <img src={Logo} alt="Logo" />
          </h1>
          <p>MarketPlace Copyright &copy; 2021. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
