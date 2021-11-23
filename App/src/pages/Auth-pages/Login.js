import React, { useState } from 'react';
import { useAuth } from '../../auth_setup/use-auth.js';

import UserLogin from '../../Components/form_components/Courier-merchant-signin';
import { Link } from 'react-router-dom';


function Login() {
    const [user, setUser] = useState({
        email: '',
        password: '',
        keepSignedin: false,
        showPassword: false,
    });

    const [emptyField, setEmptyField] = useState(false);

    const reqEmailError = user.email === "";
    const reqPasswordError = user.password === "";
    const auth = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.email === "" || user.password === "") {
            setEmptyField(true);
            return;
        }
        auth.login(user);
    }

    const handleClickShowPassword = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
            showPassword: !user.showPassword
        })
    };

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        type === "checkbox" ?
            setUser({
                ...user,
                [name]: checked
            }) :
            setUser({
                ...user,
                [name]: value
            })
    }

    return (
        <div>
            <UserLogin
                user={user}
                auth={auth}
                reqEmailError={reqEmailError}
                emptyField={emptyField}
                reqPasswordError={reqPasswordError}
                LinkRouter={Link}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleClickShowPassword={handleClickShowPassword}
                handleMouseDownPassword={handleMouseDownPassword}
            />
        </div>


    )
}

export default Login