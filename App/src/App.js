import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import Login from './pages/Auth-pages/Login';
import {Signup} from "./pages/Auth-pages/Signup";
import UserAccount from './pages/UserAccount';
import { ProvideAuth } from './auth_setup/use-auth';
import PrivateRoute from './auth_setup/PrivateRoute';
import AuthLayout from './pages/Auth-pages/AuthLayout';


function App() {
  return (
    <ProvideAuth>
      <Routes className='app'>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthLayout />} >
          <Route path="signup" element={<Signup />} />
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
    </ProvideAuth>
  );
}

export default App;