import React from 'react'
import { Link } from 'react-router-dom'

function LinkList({ items, className }) {
    return (
        <div className={className}>
            {
                items.map(item => (
                    <Link className='navLink' to={`/${item === 'Home'? '' : item.toLowerCase()}`} key={items.indexOf(item)}>{item}</Link>
    ))
}
    </div >
    )
}

export default LinkList;
