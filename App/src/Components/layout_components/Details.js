import React from 'react';
import '../../styles/Details.css';
import lady from '../../graphics/lady_phone.png';

function Details() {
    return (
        <div className='detailsContainer'>
            <div className="detailsText">
                <h1 className="detailsHead">Heading of Courier</h1>
                <p className="detailsSubTxt">Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Aperiam repellat h
                    arum cupiditate maiores, enim odit. Lorem, ipsum
                     dol r sit amet consectetur adipisicing elit. Possimus qua
                    si magni tempore aperiam, maxime excepturi cupid
                    itate in fugiat at ut.
                </p>
            </div>
            <img src={lady} alt="" className="detailsImg" />
        </div>
    )
}

export default Details;