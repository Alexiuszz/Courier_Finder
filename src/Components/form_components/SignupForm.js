import React from 'react';
import {
    useLoadScript,
} from "@react-google-maps/api";

import { AddressInput, IconButton, Input, Password } from './FormComponents'
import { Link } from 'react-router-dom';
import marker from '../../Icons/Spotlight Marker.svg';
import plus from '../../Icons/plus.svg';
import MapDialog from '../MapDialog';

import * as keys from '../../data/Key';
const libraries = ["places"];

function SignupForm(props) {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: keys.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    const [showDialog, setShowDialog] = React.useState(false);
    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);


    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

    return (
        <form className='authForm signupForm'>
            <p className='signupHeader'>Courier</p>
            <div className={props.emptyField && props.reqEmailError ? 'authInput inputError' : "authInput"}>
                <Input
                    className='loginInput'
                    handleChange={props.handleChange}
                    value={props.user.email}
                    type="email"
                    name='email'
                    label='E-mail'
                />
                {!props.emptyField ? null : props.reqEmailError && props.errorTag()}
            </div>
            <div className={props.emptyField && props.reqNameError ? 'authInput inputError' : "authInput"}>
                <Input
                    className='loginInput'
                    handleChange={props.handleChange}
                    value={props.user.name}
                    type="text"
                    name='name'
                    label='Name/Company'
                />
                {!props.emptyField ? null : props.reqNameError && props.errorTag()}
            </div>
            <div className={props.emptyField && props.reqPhoneError ? 'authInput inputError' : "authInput"}>
                <Input
                    className='loginInput'
                    handleChange={props.handleChange}
                    value={props.user.phone}
                    type="number"
                    name='phone'
                    label='Phone Number'
                />
                {!props.emptyField ? null : props.reqPhoneError && props.errorTag()}
            </div>
            {
                props.user.address.length > 0 &&
                <div className="addresses">
                    {props.user.address.map((address, i) => (
                        <div className="eachAddress">
                            <p>{address.address}</p>
                            <button type='button' onClick={() => props.deleteAddress(address.address)} className="dltAddress">&#10799;</button>
                        </div>
                    ))}
                </div>
            }
            {/* <div className={props.emptyField && props.reqAddressError ? 'addressPicker authInput inputError' : "addressPicker authInput"}>
                <div className="address">

                    <Input
                        className='loginInput'
                        onClick={f => f}
                        handleChange={props.handleChange}
                        value={props.user.cAddress}
                        type="text"
                        name='cAddress'
                        label='Select Dispatch Location'
                    />
                    <button type='button' onClick={f => f}>
                        <img src={marker} alt="Marker" />
                    </button>
                </div>

                <button
                    type='button'
                    className='addAddress'
                    onClick={() => props.addAddress(props.user.cAddress)}
                >
                    <img src={plus} alt="Plus" />
                </button>
                {!props.emptyField ? null : props.reqAddressError && props.errorTag()}
            </div> */}
            <div className={props.emptyField && props.reqAddressError ? 'authInput inputError' : "authInput"}>
                <div className="addressPicker">
                    <div className="address">
                        <AddressInput
                            className='loginInput'
                            onAddressSelect={props.onAddressSelect}
                            label='Select Dispatch Location'
                        />

                        <button type='button' onClick={open}>
                            <img src={marker} alt="Marker" />
                        </button>
                    </div>
                    <button
                        type='button'
                        className='addAddress'
                        onClick={() => {
                            props.addAddress(props.user.cAddress);
                        }}
                    >
                        <img src={plus} alt="Plus" />
                    </button>
                </div>
                {!props.emptyField ? null : props.reqAddressError && props.errorTag()}
            </div>

            <MapDialog addAddress={props.addAddress} showDialog={showDialog} close={close} onAddressSelect={props.onAddressSelect} cAddress={props.cAddress} />

            <div className={props.emptyField && props.reqPasswordError ? 'authInput inputError' : "authInput"}>
                <Password
                    className='loginInput'
                    value={props.user.password}
                    handleChange={props.handleChange}
                    name='password'
                    label='Password'
                />
                {!props.emptyField ? !props.passCheck && props.errorTag('Passwords must be same') : props.reqPasswordError && props.errorTag()}
            </div>
            <div className={props.emptyField && props.reqCPasswordError ? 'authInput inputError' : "authInput"}>
                <Password
                    className='loginInput'
                    value={props.user.cPassword}
                    handleChange={props.handleChange}
                    name='cPassword'
                    label='Confirm Password' />
                {!props.emptyField ? !props.passCheck && props.errorTag('Passwords must be same') : props.reqCPasswordError && props.errorTag()}
            </div>
            <div className="loginLink">
                <p>By creating an account, you agree to MarketPlace's Terms of Use and Privacy Notice .</p>
            </div>
            <IconButton
                handleSubmit={props.handleSubmit}
                className='authButton'
                text='Sign up'
            />
            <div className="loginLink">
                <p>Already have an account? <Link to='/signin'> Sign in</Link></p>
            </div>
        </form >
    )
}



export default SignupForm;