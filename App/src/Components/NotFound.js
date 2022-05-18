import React from "react";
import { useParams } from "react-router-dom";

function NotFound() {
  let { wrongUrl } = useParams();
  return <h1>NotFound {wrongUrl}</h1>;
}

export default NotFound;
