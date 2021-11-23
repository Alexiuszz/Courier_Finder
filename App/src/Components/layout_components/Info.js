import React from "react";
import { IconButton } from "../form_components/FormComponents";
import '../../styles/Info.css';

export default function Info() {
    return (
        <div className='homeInfo'>
            <div>
                <p className='banner'>Courier Finder</p>

                <p className='details'>
                    Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Totam
                    molestias deserunt pariatur est
                    tenetur assumenda eveniet. Aliquam
                    minima sunt voluptatum ut consequatu
                </p>
                <div className="infoBtns">
                    <IconButton className='register' text='Register' />
                    <IconButton className='learn' text='Learn more' />
                </div>
            </div>
        </div>
    )
}