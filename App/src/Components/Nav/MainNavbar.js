import React from 'react';
import LinkList from '../LinkList';
import topDesign from '../../graphics/C.svg';
import '../../styles/MainNavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const MainNavbar = ({drop = false, acctDropDown }) => {
    return (
        <div className="navContainer">
            <div className="navItems">
                <img className="topDesign" src={topDesign} alt="" />
                <h3 className="navIcon">CF</h3>
                <LinkList className="navLinkList group1" items={['Home', 'About', 'Help']} />
                <div className="navLinkList">
                    <div className="acctWDrop">
                        <p onClick={()=>acctDropDown(false)} className='navLink'>Account <FontAwesomeIcon className='arrowHead' icon={faChevronDown} /> </p>
                        <ul className='dropList' style={{ display: drop ? 'flex' : 'none' }}>
                            <li><Link to={'/auth/signup'}  >Register</Link></li>
                            <li><Link to={'/auth/signin'} >Sign in</Link></li>
                        </ul>
                    </div>
                    <Link to={'/contact'} className='navLink' >Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default MainNavbar;
