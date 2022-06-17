import React from 'react'
import { CheckBox, IconButton, Input, Password } from './FormComponents'
import { Link } from 'react-router-dom';

function LoginForm(props) {
    return (
        <div className='authForm loginForm'>
            <p className='loginHeader'>Sign in</p>
            <div className={props.emptyField && props.reqEmailError ? 'authInput inputError' : "authInput"}>
                <Input className='loginInput' handleChange={props.handleChange} value={props.user.email} type="email" name='email' label='E-mail' />
                {!props.emptyField ? null : props.reqEmailError && props.errorTag()}
            </div>
            <div className={props.emptyField && props.reqPasswordError ? 'authInput inputError' : "authInput"}>
                <Password className='loginInput' value={props.user.password} handleChange={props.handleChange} name='password' label='Password' />
                {!props.emptyField ? null : props.reqPasswordError && props.errorTag()}            </div>
            <div className="keepSignedin">
                <CheckBox label='Keep me signed in' value={props.user.keepSignedin} handleChange={props.handleChange} name='keepSignedin' />
            </div>
            <IconButton handleSubmit={props.handleSubmit} className='authButton' text='Sign in' />
            <div className="loginLink">
                <p>Don't have an account? <Link to='/signup'> Sign up</Link></p>
            </div>
        </div>
    )
}

export default LoginForm
