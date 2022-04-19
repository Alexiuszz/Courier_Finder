import React from 'react';

export function Signup({children}) {
    return (
        <div className="signupContainer">
            <div className="signupTitle">
                <h1>Welcome to the Courier Network</h1>
                <p>Sign up as a Courier or a Merchant to get started</p>
            </div>
            <div className="signup">
                {children}
                {/* <div />
                <Merchant /> */}
            </div>
        </div>
    );
}
