import React from 'react';
import clsx from 'clsx';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Visibility from '@material-ui/icons/Visibility';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {
    Button,
    Checkbox,
    Input,
    MenuItem,
    Select,
    Typography,
    InputAdornment,
    InputLabel,
    FormControl,
    IconButton,
    FormControlLabel,
    FormHelperText,
} from '@material-ui/core';


function UserSignUp(props) {
    return (
        <>
            <form className={props.classes.root} >
                <AccountBoxIcon fontSize="large" />
                <Typography variant='h4' component='h3' className={props.classes.margin}>
                    Sign Up
                </Typography>
                <FormControl required error={props.reqFirstNameError} className={clsx(props.classes.margin, props.classes.textField)} >
                    <InputLabel htmlFor="first-name-input">First Name</InputLabel>

                    <Input
                        id="first-name-input"
                        name="firstName"
                        onChange={props.handleChange}
                        value={props.user.firstName}
                        aria-describedby="first-name-input-text"

                    />
                    <FormHelperText id="first-name-input-text">Required Field*</FormHelperText>
                </FormControl>

                <FormControl required error={props.reqLastNameError} className={clsx(props.classes.margin, props.classes.textField)} >
                    <InputLabel htmlFor="last-name-input">Last Name</InputLabel>

                    <Input
                        id="last-name-input"
                        name="lastName"
                        onChange={props.handleChange}
                        value={props.user.lastName}
                        aria-describedby="last-name-input-text"

                    />
                    <FormHelperText id="last-name-input-text">Required Field*</FormHelperText>
                </FormControl>

                <FormControl error={props.reqGenderError} className={clsx(props.classes.margin, props.classes.textField)}>
                    <InputLabel id="gender-select-label">Gender</InputLabel>
                    <Select
                        labelId="gender-select-label"
                        id="gender-select"
                        name='sex'
                        value={props.user.sex}
                        onChange={props.handleChange}
                        className={props.classes.selectEmpty}
                    >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormControl>

                <FormControl required error={props.reqEmailError} className={clsx(props.classes.margin, props.classes.textField)} >
                    <InputLabel htmlFor="email-input">E-mail</InputLabel>
                    <Input
                        id="email-input"
                        name="email"
                        type="email"
                        onChange={props.handleChange}
                        value={props.user.email}
                        aria-describedby="email-input-text"

                    />
                    <FormHelperText id="email-input-text">Required Field*</FormHelperText>
                </FormControl>

                <FormControl required error={props.reqUsernameError} className={clsx(props.classes.margin, props.classes.textField)} >
                    <InputLabel htmlFor="username-input">User Name</InputLabel>

                    <Input
                        id="username-input"
                        name="username"
                        onChange={props.handleChange}
                        value={props.user.username}
                        aria-describedby="username-input-text"
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle className={props.classes.icon} />
                            </InputAdornment>
                        }
                    />
                    <FormHelperText id="username-input-text">Required Field*</FormHelperText>
                </FormControl>

                <FormControl required error={props.reqPasswordError} className={clsx(props.classes.margin, props.classes.textField)} >
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
                            name='terms'
                            checked={props.user.terms}
                            onChange={props.handleChange}
                        />
                    }
                    label="Kindly agree to the Terms of Service."
                    style={{ marginRight: '20px', textDecoration: "underline" }}
                />

                <Button onClick={props.handleSubmit} variant="contained" size="small" className={clsx(props.classes.margin, props.classes.button)}>
                    <AssignmentIndIcon className={props.classes.icon} fontSize="small" /> Sign up
                </Button>
                <Typography component='span' className={props.classes.margin}>
                    Already have an account?
                    <props.LinkRouter to="/login"> Sign in </props.LinkRouter>
                </Typography>

            </form>
        </>

    )
}

export default UserSignUp;