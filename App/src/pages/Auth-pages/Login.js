import React, { useReducer, useState } from 'react';
import { useAuth } from '../../auth_setup/use-auth.js';
import UserLogin from '../../Components/form_components/LoginForm';
import {
    useLocation,
    Navigate
  } from 'react-router-dom';

function Login() {
    const [user, setUser] = useReducer((user, update) => ({ ...user, ...update }), {
        email: '',
        password: '',
        keepSignedin: false
    })


    const [emptyField, setEmptyField] = useState(false);

    const reqEmailError = user.email === "";
    const reqPasswordError = user.password === "";
    const auth = useAuth();
    const errorTag = (mess = 'Required Field') => (<p className='errorTag'>{mess}</p>);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.email === "" || user.password === "") {
            setEmptyField(true);
            return;
        }
        auth.login(user);
    }

    const handleChange = ({ name, value, checked, type }) => {
        type === "checkbox" ?
            setUser({
                [name]: checked
            }) :
            setUser({
                [name]: value
            })
    }

    let location = useLocation();
    if (auth.token) {
        return <Navigate to="/account" state={{ from: location }} />;
      }
    return (
        <div>
            <UserLogin
                user={user}
                reqEmailError={reqEmailError}
                emptyField={emptyField}
                reqPasswordError={reqPasswordError}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                errorTag={errorTag}
            />
        </div>


    )
}

export default Login