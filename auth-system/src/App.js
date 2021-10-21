import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,  
  Redirect
} from 'react-router-dom';
import './App.css';
import Signup from './pages/Auth-pages/Signup';
import Home from './pages/Home';
import Login from './pages/Auth-pages/Login';
import UserAccount from './pages/UserAccount';
import { ProvideAuth, useAuth } from './auth_setup/use-auth';

function App() {  
  return (
    <ProvideAuth>
      <Router>        
          <Switch>
            <PrivateRoute path="/account">
              <UserAccount />
            </PrivateRoute>
            <Route path="/signup" component={Signup} />
            <LoginRoute path="/login">
              <Login />
            </LoginRoute>
            <Route path="/" component={Home} />
          </Switch>
      </Router>
    </ProvideAuth>
  );
}

//Routes for pages that need authentication
function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.token ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  )
}

function LoginRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !auth.token ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/account",
                state: { from: location }
              }}
            />
          )
      }
    />
  )
}
export default App;
