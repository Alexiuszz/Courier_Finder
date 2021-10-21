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


function UserSignup(props) {
    return (
        <>
            <form className={props.classes.root} >
                <AccountBoxIcon fontSize="large" />
                <Typography variant='h5' className={props.classes.title}>
                    Create account
                </Typography>

                <FormControl required error={!props.emptyField ? false : props.reqNameError} className={clsx(props.classes.margin, props.classes.textField)} >
                    <InputLabel htmlFor="name-input">Company Name</InputLabel>
                    <Input
                        id="name-input"
                        name="companyName"
                        onChange={props.handleChange}
                        value={props.user.companyName}
                        aria-describedby="name-input-text"
                    />
                    <FormHelperText id="name-input-text">Required Field*</FormHelperText>
                </FormControl>


                <FormControl required error={!props.emptyField ? false : props.reqEmailError} className={clsx(props.classes.margin, props.classes.textField)} >
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

                <FormControl error={!props.emptyField ? false : props.reqAccountError} className={clsx(props.classes.margin, props.classes.textField)}>
                    <InputLabel id="account-select-label">Account type</InputLabel>
                    <Select
                        labelId="account-select-label"
                        id="account-select"
                        name='account'
                        value={props.user.account}
                        onChange={props.handleChange}
                        className={props.classes.selectEmpty}
                    >
                        <MenuItem value="merchant">Merchant</MenuItem>
                        <MenuItem value="courier">Courier</MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormControl>

                <FormControl required error={!props.emptyField ? false : props.reqPasswordError} className={clsx(props.classes.margin, props.classes.textField)} >
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="filled-adornment-password"
                        name="password"
                        type={props.user.showPassword ? 'text' : 'password'}
                        value={props.user.password}
                        onChange={props.handleChange}
                        // startAdornment={
                        //     <InputAdornment position="start">
                        //         <LockOpenIcon className={props.classes.icon} />
                        //     </InputAdornment>
                        // }
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

                <FormControl required error={!props.emptyField ? false : props.reqCPasswordError || !props.passCheck} className={clsx(props.classes.margin, props.classes.textField)} >
                    <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
                    <Input
                        id="filled-adornment-password"
                        name="cPassword"
                        type={props.user.showPassword ? 'text' : 'password'}
                        value={props.user.cPassword}
                        onChange={props.handleChange}
                        // startAdornment={
                        //     <InputAdornment position="start">
                        //         <LockOpenIcon className={props.classes.icon} />
                        //     </InputAdornment>
                        // }
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
                    <FormHelperText id="username-input-text">{!props.passCheck && props.emptyField ? 'Passwords must be the same' : 'Required Field*'}</FormHelperText>

                </FormControl>


                <div className={props.classes.texts}>
                    By creating an account, you agree to MarketPlace's
                    <props.LinkRouter to="/terms">  Terms of Use </props.LinkRouter> and  <props.LinkRouter to="/privacy"> Privacy Notice </props.LinkRouter>.
                </div>

                <Button onClick={props.handleSubmit} variant="contained" size="small" className={clsx(props.classes.margin, props.classes.button)}>
                    <AssignmentIndIcon className={props.classes.icon} fontSize="small" /> Sign up
                </Button>
                <Typography component='span' className={props.classes.texts}>
                    Already have an account?
                    <props.LinkRouter to="/login"> Sign in </props.LinkRouter>
                </Typography>

            </form>
        </>

    )
}

export default UserSignup;