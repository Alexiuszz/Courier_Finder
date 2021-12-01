import React, { useState, useReducer } from 'react';
import visible from '../../Icons/View_hide.svg';
import hide from '../../Icons/View.svg';

export function TextInput({ placeHolder }) {
    return (
        <input className="textInput" placeHolder={placeHolder} type="text" />
    )
}

export function SelectInput({ placeHolder, options, className = '', name = '' }) {
    return (
        <>
            <select name={name} className={`selectInput ${className}`} >
                {
                    options.map((option, i) => (
                        <option key={i} value={option.toLowerCase()}>{option}</option>
                    ))
                }
            </select>
        </>
    )
}

export function IconButton({ icon = null, text = '', className = '', onClick = f => f }) {
    return <button className={`iconButton ${className}`} onClick={() => onClick()}>{icon && (<img className='icon' src={icon} alt="icon" />)} {text && text}</button>

}

export function Input({ className = '', name = '', label = '', type = 'text', value, handleChange = f => f }) {
    const [active, setActive] = useState(false);

    const onChange = (e) => {
        let { value } = e.target;
        handleChange(e.target);
        if (value !== '') {
            setActive(true);
        }
        else
            setActive(false);
    }
    return (
        <div className={`inputWLabel ${className}`}>
            <label className={active ? 'Active' : ''} htmlFor="text">{label}</label>
            <input type={type} value={value} onChange={onChange} name={name} />
            <div className="focusBorder"></div>
        </div>
    )
}


export function CheckBox({ label = '', handleChange = f => f, className = '', name = '' }) {
    const onChange = e => handleChange(e.target);
    return (
        <div className={`checkWLabel ${className}`}>
            <input type="checkbox" onChange={onChange} name={name} />
            <label htmlFor="checkbox">{label}</label>
        </div>
    )
}

export function Password({ label = '', className = '', name = '', value, handleChange = f => f }) {
    const [active, setActive] = useState(false);
    const [show, showPassword] = useReducer(show => !show, false);

    const onChange = (e) => {
        let { value } = e.target;
        handleChange(e.target);
        if (value !== '') {
            setActive(true);
        }
        else
            setActive(false);
    }

    return (
        <div className={`inputWLabel ${className}`}>
            <label className={active ? 'Active' : ''} htmlFor="text">{label}</label>
            <div className="passInput">
                <input type={show ? "text" : "password"} value={value} name={name} onChange={onChange} />
                <img className="passIcon" onClick={active ? showPassword : undefined} src={show ? hide : visible} alt="SHOW" />
            </div>
            <div className="focusBorder"></div>
        </div>
    )
}


export function InputwButton({ label = '', name = '', button = '', className = '', value = '', handleChange = f => f, handleSubmit = f => f, active = false }) {
    return (
        <div className={`inputWButton ${className}`}>
            <Input label={label} name={name} value={value} handleChange={handleChange} active={active} />
            <IconButton text={button} onClick={handleSubmit} />
        </div>
    )
}



export const Divider = () => <div className="divider"></div>


