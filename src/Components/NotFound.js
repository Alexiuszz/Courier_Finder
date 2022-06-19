import React from "react";
import { Link, useLocation } from "react-router-dom";

import '../styles/notFound.css'

function NotFound() {
  let location = useLocation();
  return (
    <div className="notFound">
      <h1>404</h1>
      <p>{location.pathname} not found.</p>
      <div>
          <Link to={'/'} >Home?</Link>
      </div>
    </div>
  );
}

export default NotFound;
