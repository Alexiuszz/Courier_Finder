import React from 'react';
import { IconButton, Input, Password, SelectInput } from './FormComponents'
import { Link } from 'react-router-dom';
import { states } from '../../data/states';

function SignupForm(props) {
    const stateOptions = states();
    return (
        <form className='authForm signupForm'>
            <p className='signupHeader'>{props.form === 'courier' ? 'Courier' : 'Merchant'}</p>
            <div className={props.emptyField && props.reqEmailError ? 'authInput inputError' : "authInput"}>
                <Input className='loginInput' handleChange={props.handleChange} value={props.user.email} type="email" name='email' label='E-mail' />
                {!props.emptyField ? null : props.reqEmailError && props.errorTag()}
            </div>
            <div className={props.emptyField && props.reqNameError ? 'authInput inputError' : "authInput"}>
                <Input className='loginInput' handleChange={props.handleChange} value={props.user.name} type="text" name='name' label='Name/Company' />
                {!props.emptyField ? null : props.reqNameError && props.errorTag()}
            </div>
            <div className={props.emptyField && props.reqStateError ? 'authInput inputError' : "authInput"}>
                <SelectInput className='loginInput' options={stateOptions} handleChange={props.handleChange} value={props.user.state} name='state' label={props.form === 'courier' ? 'Address' : 'Dispatch Adress'} />
                {!props.emptyField ? null : props.reqStateError && props.errorTag()}
            </div>
            <div className={props.emptyField && props.reqPasswordError ? 'authInput inputError' : "authInput"}>
                <Password className='loginInput' value={props.user.password} handleChange={props.handleChange} name='password' label='Password' />
                {!props.emptyField ? !props.passCheck && props.errorTag('Passwords must be same') : props.reqPasswordError && props.errorTag()}
            </div>
            <div className={props.emptyField && props.reqCPasswordError ? 'authInput inputError' : "authInput"}>
                <Password className='loginInput' value={props.user.cPassword} handleChange={props.handleChange} name='cPassword' label='Confirm Password' />
                {!props.emptyField ? !props.passCheck && props.errorTag('Passwords must be same') : props.reqCPasswordError && props.errorTag()}
            </div>
            <div className="loginLink">
                <p>By creating an account, you agree to MarketPlace's Terms of Use and Privacy Notice .</p>
            </div>
            <IconButton handleSubmit={props.handleSubmit} className='authButton' text='Sign up' />
            <div className="loginLink">
                <p>Already have an account? <Link to='/auth/signin'> Sign in</Link></p>
            </div>
        </form >
    )
}



export default SignupForm;