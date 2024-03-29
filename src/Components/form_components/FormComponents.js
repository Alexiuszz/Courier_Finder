import React, { useState, useReducer } from 'react';
import visible from '../../Icons/View_hide.svg';
import hide from '../../Icons/View.svg';
import MapSearch from '../map_components/MapSearch';

export function TextInput({ placeHolder }) {
    return (
        <input className="textInput" placeHolder={placeHolder} type="text" />
    )
}

export function SelectInput({ label = '', value, options = [], className = '', name = '', handleChange = f => f }) {
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
            <label className={active ? 'Active' : ''} htmlFor={'select'}>{label}</label>
            <select name={name} className='selectInput' onChange={onChange}>
                <option value=''></option>
                {
                    options.map((option, i) => (
                        <option key={i} value={option.toLowerCase()}>{option}</option>
                    ))
                }
            </select>
        </div>
    )
}

export function IconButton({ icon = null, text = '', className = '', handleSubmit = f => f, iconRight = false }) {
    if (!iconRight)
        return <button className={`${className} iconButton`} onClick={handleSubmit}>{icon && (<img className='icon' src={icon} alt="icon" />)} {text && text}</button>
    else
        return <button className={`${className} iconButton`} onClick={handleSubmit}>{text && text} {icon && (<img className='icon' src={icon} alt="icon" />)} </button>

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
            <label className={active ? 'Active' : ''} htmlFor={type}>{label}</label>
            <input type={type} value={value} onChange={onChange} name={name} />
            <div className="focusBorder"></div>
        </div>
    )
}

export function TextArea({ className = '', name = '', label = '', type = 'text', value, handleChange = f => f, rows, cols}) {
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
            <label className={active ? 'Active' : ''} htmlFor={type}>{label}</label>
            <textarea
                name={name}
                onChange={onChange}
                value={value}
                cols={cols}
                rows={rows}
            ></textarea>           
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

export function AddressInput({ onAddressSelect = f => f, label, className, mark = null, changeMark = f => f }) {
    const [active, setActive] = useState(false);
    const onChange = (value) => {
        if (value !== '') {
            setActive(true);
        }
        else
            setActive(false);
    }

    return (
        <div className={`inputWLabel ${className}`}>
            <label className={active ? 'Active' : ''}>{label}</label>
            <MapSearch mark={mark} onAddressSelect={onAddressSelect} handleChange={onChange} changeMark={changeMark} />
            <div className="focusBorder"></div>

        </div>
    )
}

export const Divider = () => <div className="divider"></div>


