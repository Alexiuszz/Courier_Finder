import React, { useReducer, useState } from 'react';
import { useAuth } from '../../auth_setup/use-auth.js';
import UserSignup from '../../Components/form_components/SignupForm';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SignUp() {
    const [user, setUser] = useReducer((user, update) => ({ ...user, ...update }), {
        name: '',
        email: '',
        password: '',
        account: '',
        cPassword: '',
        terms: false,
        showPassword: false,
    })

    const [emptyField, setEmptyField] = useState(false);

    const reqNameError = user.name === "";
    const reqEmailError = user.email === "";
    const reqPasswordError = user.password === "";
    const reqAccountError = user.account === "";
    const reqCPasswordError = user.cPassword === "";
    const passCheck = user.cPassword === user.password;

    const handleSubmit = (e) => {
        console.log(user);
        e.preventDefault();
        if (
            user.name === "" ||
            user.account === "" ||
            user.password === "" ||
            user.cPassword === "" ||
            user.email === ""
        ) {
            setEmptyField(true);
            return;
        }
        if (!passCheck) {
            return;
        }
        axios({
            url: `auth/new-${user.account}`,
            method: 'post',
            data: user
        })
            .then(function (response) {
                console.log(response.data);
                !response.data ?
                    alert("email already exists") :
                    window.location.href = "http://localhost:3000/login";
            })
            .catch(function (error) {
                console.log(error);
            });
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
    return (
        <div>
            <UserSignup
                user={user}
                LinkRouter={Link}
                reqNameError={reqNameError}
                emptyField={emptyField}
                reqEmailError={reqEmailError}
                reqPasswordError={reqPasswordError}
                reqAccountError={reqAccountError}
                reqCPasswordError={reqCPasswordError}
                passCheck={passCheck}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default SignUp