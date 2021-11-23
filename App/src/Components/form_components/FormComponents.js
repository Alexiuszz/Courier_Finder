import React from 'react';

export function TextInput({ placeHolder }) {
    return (
        <input className="textInput" placeHolder={placeHolder} type="text" />
    )
}

export function SelectInput({ placeHolder, options, className=''}) {
    return (
        <>
            <select className={`selectInput ${className}`} >
                {
                    options.map((option) => (
                        <option value={option.toLowerCase()}>{option}</option>
                    ))
                }
            </select>
        </>
    )
}

export function IconButton({ icon=null, text='', className='' }) {
    return <button className={`iconButton ${className}`}>{icon && (<img className='icon' src={icon} alt="icon" />)} {text && (<p>{text}</p>)}</button>
    
}

export const Divider = () => <div className="divider"></div>