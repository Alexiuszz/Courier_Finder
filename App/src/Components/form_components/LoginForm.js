import React from 'react'
import { CheckBox, IconButton, Input, Password } from './FormComponents'
import {Link} from 'react-router-dom';

function LoginForm({user, handleChange}) {
    return (
        <div className='authForm loginForm'>
            <p className='authHeader'>Sign in</p>
            <Input className='loginInput loginEmail' handleChange={handleChange} value={user.email} type="email" name='email' label='E-mail' />
            <Password className='loginInput loginPass' value={user.password} handleChange={handleChange} name='password' label='Password' />
            <div className="keepSignedin">
                <CheckBox label='Keep me signed in' value={user.keepSignedin} handleChange={handleChange}  name='keepSignedin'/>
            </div>
            <IconButton className='authButton'  text='Sign in' />
            <div className="loginLink">
                <p>Don't have an account? <Link to='/auth/signup'> Sign up</Link></p> 
            </div>
        </div>
    )
}

export default LoginForm
