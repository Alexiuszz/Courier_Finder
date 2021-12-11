import React from 'react';
import { Merchant } from './Merchant';
import { Courier } from './Courier';

export function Signup(props) {
    return (
        <div className="signupContainer">
            <div className="signupTitle">
                <h1>Welcome to the Courier Network</h1>
                <p>Sign up as a Courier or a Merchant to get started</p>
            </div>
            <div class="signup">
                <Courier />
                <div />
                <Merchant />
            </div>
        </div>
    );
}
