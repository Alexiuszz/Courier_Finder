import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import './styles/App.css';
import Signup from './pages/Auth-pages/Signup';
import Home from './pages/Home';
import Login from './pages/Auth-pages/Login';
import UserAccount from './pages/UserAccount';
import { ProvideAuth } from './auth_setup/use-auth';
import PrivateRoute from './auth_setup/PrivateRoute';

function App() {
  return (
    <ProvideAuth>
      <Routes className='app'>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
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