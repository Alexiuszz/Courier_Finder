import React, { useState } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import './styles/App.css';
import MainNavbar from './Components/Nav/MainNavbar';
import Home from './pages/Home';
import Login from './pages/Auth-pages/Login';
import UserAccount from './pages/UserAccount';
import { ProvideAuth } from './auth_setup/use-auth';
import PrivateRoute from './auth_setup/PrivateRoute';
import AuthLayout from './pages/Auth-pages/AuthLayout';
import ProfileSetup from './pages/ProfileSetup';
import { Courier } from './pages/Auth-pages/Courier';


function App() {
  const [drop, setDrop] = useState(false);

  const acctDropDown = (isBody = true) => isBody ? setDrop(false) : setDrop(drop => !drop)
  return (
    <ProvideAuth >
      <div onClick={drop ? acctDropDown : undefined}>
        <MainNavbar acctDropDown={acctDropDown} drop={drop} />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfileSetup />} />
          <Route path="/auth" element={<AuthLayout />} >
            <Route path="signup" element={<Courier />} />
            <Route path="signin" element={<Login />} />
          </Route>
          <Route
            path="/account"
            element={
              <PrivateRoute >
                <UserAccount />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </ProvideAuth>
  );
}

export default App;