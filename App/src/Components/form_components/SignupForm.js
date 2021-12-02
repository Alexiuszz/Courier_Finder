import React from 'react';
import {IconButton, Input, Password, SelectInput } from './FormComponents'
import { Link } from 'react-router-dom';
import { states } from '../../data/states';

function SignupForm({ user, handleChange }) {
    const stateOptions = states();
    return (
        <div className='authForm'>
            <p className='authHeader'>Sign up</p>
            <Input className='loginInput loginEmail' handleChange={handleChange} value={user.email} type="email" name='email' label='E-mail' />
            <Input className='loginInput loginEmail' handleChange={handleChange} value={user.name} type="text" name='name' label='Name/Company' />
            <SelectInput className='loginInput loginEmail' options={stateOptions}  handleChange={handleChange} value={user.state} name='state' label='State'/>
            <Password className='loginInput loginPass' value={user.password} handleChange={handleChange} name='password' label='Password' />
            <Password className='loginInput loginPass' value={user.confirmPassword} handleChange={handleChange} name='confirmPassword' label='Confirm Password' />
            <div className="loginLink">
                <p>By creating an account, you agree to MarketPlace's Terms of Use and Privacy Notice .</p>
            </div>
            <IconButton className='authButton' text='Sign up' />
            <div className="loginLink">
                <p>Already have an account? <Link to='/auth/signin'> Sign in</Link></p>
            </div>
        </div >
    )
}

export default SignupForm
