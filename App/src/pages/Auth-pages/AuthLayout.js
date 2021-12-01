import React from 'react'
import MainNavbar from '../../Components/Nav/MainNavbar';
import {Outlet} from 'react-router-dom';

import '../../styles/Auth.css'

function AuthLayout() {
    return (
        <div>
            <MainNavbar />
            
            <Outlet />
        </div>
    )
}

export default AuthLayout
