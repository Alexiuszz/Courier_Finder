import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./styles/App.css";
import MainNavbar from "./Components/Nav/MainNavbar";
import Home from "./pages/Home";
import Login from "./pages/Auth-pages/Login";
import Account from "./pages/Account";
import PrivateRoute from "./auth_setup/PrivateRoute";
import AuthLayout from "./pages/Auth-pages/AuthLayout";
import ProfileSetup from "./pages/ProfileSetup";
import { Courier } from "./pages/Auth-pages/Courier";
import { acctDropDown } from "./redux/user/userActions";
import NotFound from "./Components/NotFound";
import "./styles/SmallScreen.css";
import Loader from "./Components/Loader";
import Dashboard from "./Components/layout_components/Dashboard";
import Requests from "./Components/layout_components/Requests";
import Locations from "./Components/layout_components/Locations";
import Inbox from "./Components/layout_components/Inbox";
import Vehicles from "./Components/layout_components/Vehicles";
import Reviews from "./Components/layout_components/Reviews";
import EditProfile from "./Components/layout_components/EditProfile";
import ChangePassword from "./Components/layout_components/ChangePassword";
import History from "./Components/layout_components/History";

function App() {
  const dispatch = useDispatch();
  const acctMenuDrop = useSelector((state) => state.user.acctMenuDrop);
  const busy = useSelector((state) => state.user.busy);

  return (
    <div
      onClick={acctMenuDrop ? () => dispatch(acctDropDown(true)) : undefined}
    >
      <MainNavbar acctDropDown={acctDropDown} acctMenuDrop={acctMenuDrop} />
      {busy && <Loader color="black" loading={true} />}
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<AuthLayout />}>
          <Route path="signup" element={<Courier />} />
          <Route path="signin" element={<Login />} />
        </Route>

        <Route
          path="/account"
          element={
            <PrivateRoute>
              <Account />
            </PrivateRoute>
          }
        >
          <Route index path="dashboard" element={<Dashboard />} />
          <Route path="requests" element={<Requests />} />
          <Route path="locations" element={<Locations />} />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="history" element={<History />} />
          <Route path="*" element={<Navigate to={"/account"} />} />
        </Route>
        <Route
          path="/createProfile"
          element={
            <PrivateRoute>
              <ProfileSetup />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
