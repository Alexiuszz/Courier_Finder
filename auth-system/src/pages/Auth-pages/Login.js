import React, { useState } from 'react';
import { useAuth } from '../../auth_setup/use-auth.js';

import UserLogin from '../../Components/forms/Courier-merchant-signin';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'
import {
    Breadcrumbs,
    AppBar,
    Toolbar,
    Link as MUILink,
} from '@material-ui/core';
import useStyles from '../../styles/login-signup';


function Login() {
    const [user, setUser] = useState({
        email: '',
        password: '',
        keepSignedin: false,
        showPassword: false,
    });

    const [emptyField, setEmptyField] = useState(false);

    const classes = useStyles();
    const reqEmailError = user.email === "";
    const reqPasswordError = user.password === "";
    const LinkRouter = (props) => <MUILink {...props} component={Link} />
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
        <>
            <AppBar color="transparent" className={classes.appBar} position="static">
                <Toolbar>
                    <Breadcrumbs separator="" aria-label="breadcrumb" className={classes.nav}>
                        <LinkRouter color="primary" to="/" className={classes.navStyles}>
                            <CloseRoundedIcon />
                        </LinkRouter>
                    </Breadcrumbs>
                </Toolbar>
            </AppBar>
            <Paper elevation={7} className={classes.paper}>
                <UserLogin
                    user={user}
                    auth={auth}
                    classes={classes}
                    reqEmailError={reqEmailError}
                    emptyField={emptyField}
                    reqPasswordError={reqPasswordError}
                    LinkRouter={LinkRouter}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    handleClickShowPassword={handleClickShowPassword}
                    handleMouseDownPassword={handleMouseDownPassword}
                />
            </Paper>
        </>

    )
}

export default Login