import React from "react";
import Info from "../Components/layout_components/Info";
import MediaCards from "../Components/layout_components/MediaCards";
import Footer from "../Components/layout_components/Footer";
import Details from "../Components/layout_components/Details";

import "../styles/FormComponents.css";
import "../styles/home.css";
import OrderLayout from "../Components/layout_components/OrderLayout";

function Home() {
  return (
    <div className="homeContainer">
      <div className="home">
          <Info />
          <OrderLayout />
          <Details />
          <MediaCards />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
