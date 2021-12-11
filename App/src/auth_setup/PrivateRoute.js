import React from 'react';
import {
  useLocation,
  Navigate
} from 'react-router-dom';
import { useAuth } from './use-auth';

//Routes for pages that need authentication
export default function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.token) {
    return <Navigate to="/auth/signin" state={{ from: location }} />;
  }

  return children;
}
