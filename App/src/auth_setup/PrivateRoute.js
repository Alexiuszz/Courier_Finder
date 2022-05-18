import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate, Route } from "react-router-dom";

//Routes for pages that need authentication
export default function PrivateRoute({ children, ...rest }) {
  const loggedIn = useSelector((state) => state.user.loggedIn);

  let location = useLocation();

  if (!loggedIn) {
    return <Navigate to="/auth/signin" state={{ from: location }} />;
  }

  return children
}
