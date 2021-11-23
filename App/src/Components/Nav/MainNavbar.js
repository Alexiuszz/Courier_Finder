import React from 'react';
import LinkList from '../LinkList';
import topDesign from '../../graphics/C.svg';
import '../../styles/MainNavBar.css'

function MainNavbar() {
    return (
        <div className="navContainer">
            <img className="topDesign" src={topDesign} alt="" />
            <h3 className="navIcon">CF</h3>
            <LinkList className="navLinkList group1" items={['Home','About','Help']}/>
            <LinkList className="navLinkList" items={['Account', 'Contact']} />
        </div>
    )
}

export default MainNavbar;
