import React from "react";

import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./styles/App.css";
import MainNavbar from "./Components/Nav/MainNavbar";
import Home from "./pages/Home";
import Login from "./pages/Auth-pages/Login";
import Profile from "./pages/Profile";
import PrivateRoute from "./auth_setup/PrivateRoute";
import AuthLayout from "./pages/Auth-pages/AuthLayout";
import ProfileSetup from "./pages/ProfileSetup";
import { Courier } from "./pages/Auth-pages/Courier";
import { acctDropDown } from "./redux/user/userActions";
import NotFound from "./Components/NotFound";

function App() {
  const dispatch = useDispatch();
  const acctMenuDrop = useSelector((state) => state.user.acctMenuDrop);

  let location = useLocation();
  return (
    <div
      onClick={acctMenuDrop ? () => dispatch(acctDropDown(true)) : undefined}
    >
      <MainNavbar acctDropDown={acctDropDown} acctMenuDrop={acctMenuDrop} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="signup" element={<Courier />} />
          <Route path="signin" element={<Login />} />
        </Route>

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/createProfile"
          element={
            <PrivateRoute>
              <ProfileSetup />
            </PrivateRoute>
          }
        />

        <Route path="404">
          <Route path=":wrongUrl" element={<NotFound />} />
        </Route>
        <Route
          path="*"
          element={<Navigate to={`/404${location.pathname}`} />}
        />
      </Routes>
    </div>
  );
}

export default App;
