import React from 'react';

import clsx from 'clsx';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';
import Visibility from '@material-ui/icons/Visibility';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {    
    Button,
    Checkbox,
    Input,
    Typography,
    InputAdornment,
    InputLabel,
    FormControl,
    IconButton,
    FormControlLabel,
    FormHelperText,
} from '@material-ui/core';

function UserLogin(props) {     
    return (
        <>            
            <form className={props.classes.root} >
                <LockOpenRoundedIcon fontSize="large" />
                <Typography variant='h4' component='h3' className={props.classes.title}>
                    Sign In
            </Typography>

                <FormControl error={!props.emptyField ? false : props.reqEmailError} className={clsx(props.classes.margin, props.classes.textField)} >
                    <InputLabel htmlFor="email-input">Email</InputLabel>

                    <Input
                        id="email-input"
                        name="email"
                        onChange={props.handleChange}
                        value={props.user.email}
                        aria-describedby="email-input-text"
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle className={props.classes.icon} />
                            </InputAdornment>
                        }
                    />
                    <FormHelperText id="email-input-text">Required Field*</FormHelperText>
                </FormControl>

                <FormControl error={!props.emptyField ? false : props.reqPasswordError} className={clsx(props.classes.margin, props.classes.textField)} >
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="filled-adornment-password"
                        name="password"
                        type={props.user.showPassword ? 'text' : 'password'}
                        value={props.user.password}
                        onChange={props.handleChange}
                        startAdornment={
                            <InputAdornment position="start">
                                <LockOpenIcon className={props.classes.icon} />
                            </InputAdornment>
                        }
                        endAdornment={
                            <InputAdornment position="end" color="transparent">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    style={{ background: "transparent", width: "30px" }}
                                    onClick={props.handleClickShowPassword}
                                    onMouseDown={props.handleMouseDownPassword}
                                >
                                    {props.user.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    <FormHelperText id="username-input-text">Required Field*</FormHelperText>

                </FormControl>
                <FormControlLabel
                    control={
                        <Checkbox
                            color="default"
                            type="checkbox"
                            name='keepSignedin'
                            checked={props.user.keepSignedin}
                            onChange={props.handleChange}
                        />
                    }
                    label="Keep me signed in."
                    style={{ marginRight: '20px' }}
                />

                <Button onClick={props.handleSubmit} variant="contained" size="small" className={clsx(props.classes.margin, props.classes.button)}>
                    <LockOpenIcon  fontSize="small" /> Sign in
            </Button>
                <Typography component='span' className={props.classes.texts}>
                    Don't have an account?
                <props.LinkRouter to="/signup"> Sign Up </props.LinkRouter>
                </Typography>
            </form>
        </>
    )
}

export default UserLogin;