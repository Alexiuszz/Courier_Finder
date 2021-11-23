import React from 'react';
import { IconButton } from '../form_components/FormComponents';


export function MediaCard(props) {
    return (
        <div className='mediaCard'>
            <div className='mediaImg'>
                <img  src={props.cardImage} alt="" />
            </div>
            <h1 className='mediaTitle'>{props.cardTitle}</h1>
            <p className='mediaContent'>{props.cardContent}</p>
            <IconButton className='mediaAction' text={props.cardAction} />
        </div>
    );
}
