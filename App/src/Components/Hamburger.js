import React from "react";

function Hamburger({
  className = "",
  opened = false,
  open = (f) => f,
  color = "black",
}) {
  return (
    <div
      className={`menuButton ${className} ${opened ? "active" : ""} `}
      onClick={open}
    >
      <div id="l1" style={{ backgroundColor: color }}></div>
      <div id="l2" style={{ backgroundColor: color }}></div>
      <div id="l3" style={{ backgroundColor: color }}></div>
    </div>
  );
}

export default Hamburger;
