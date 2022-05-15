import React from 'react';
import { useSelector } from 'react-redux';
import {
  useLocation,
  Navigate
} from 'react-router-dom';

//Routes for pages that need authentication
export default function PrivateRoute({ children, ...rest }) {
  const token = useSelector((state) => state.user.token);

  let location = useLocation();

  if (!token) {
    return <Navigate to="/auth/signin" state={{ from: location }} />;
  }

  return children;
}
