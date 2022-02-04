import React from 'react'
import {Outlet} from 'react-router-dom';

import '../../styles/Auth.css'

function AuthLayout() {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default AuthLayout
