import React, { useState } from 'react';
import axios from 'axios';
import UserSignup from '../../Components/form_components/Courier-merchant-signup';
import { Link } from 'react-router-dom';

function SignUp() {
    const [user, setUser] = useState({
        companyName: '',
        email: '',
        password: '',
        account: '',
        cPassword: '',
        terms: false,
        showPassword: false,
    });

    const [emptyField, setEmptyField] = useState(false);

    const reqNameError = user.companyName === "";
    const reqEmailError = user.email === "";
    const reqPasswordError = user.password === "";
    const reqAccountError = user.account === "";
    const reqCPasswordError = user.cPassword === "";
    const passCheck = user.cPassword === user.password;

    const handleSubmit = (e) => {
        console.log(user);
        e.preventDefault();
        if (user.companyName === "" || user.account === "" || user.password === "" || user.cPassword === "" || user.email === "") {
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
                    handleClickShowPassword={handleClickShowPassword}
                    handleMouseDownPassword={handleMouseDownPassword}
                />
            </div>
    )
}

export default SignUp