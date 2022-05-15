import React from "react";

import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./styles/App.css";
import MainNavbar from "./Components/Nav/MainNavbar";
import Home from "./pages/Home";
import Login from "./pages/Auth-pages/Login";
import UserAccount from "./pages/UserAccount";
import PrivateRoute from "./auth_setup/PrivateRoute";
import AuthLayout from "./pages/Auth-pages/AuthLayout";
import ProfileSetup from "./pages/ProfileSetup";
import { Courier } from "./pages/Auth-pages/Courier";
import { acctDropDown } from "./redux/user/userActions";


function App() {
  const dispatch = useDispatch();
  const acctMenuDrop = useSelector((state) => state.user.acctMenuDrop);
  
  return (
      <div onClick={acctMenuDrop ? () => dispatch(acctDropDown(true)) : undefined}>
        <MainNavbar acctDropDown={acctDropDown} acctMenuDrop={acctMenuDrop}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfileSetup />} />
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="signup" element={<Courier />} />
            <Route path="signin" element={<Login />} />
          </Route>
          <Route
            path="/account"
            element={
              <PrivateRoute>
                <UserAccount />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
  );
}

export default App;
