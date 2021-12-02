import React, { useReducer, useState } from 'react';
import { useAuth } from '../../auth_setup/use-auth.js';
import UserSignup from '../../Components/form_components/SignupForm';
import { Link } from 'react-router-dom';

function SignUp() {
    const [user, setUser] = useReducer((user, update) => ({ ...user, ...update }), {
        name: '',
        email: '',
        password: '',
        state: '',
        cPassword: '',
    });

    const auth = useAuth(); 

    const [emptyField, setEmptyField] = useState(false);

    const reqNameError = user.name === "";
    const reqEmailError = user.email === "";
    const reqPasswordError = user.password === "";
    const reqStateError = user.state === "";
    const reqCPasswordError = user.cPassword === "";
    const passCheck = user.cPassword === user.password;

    const handleSubmit = (e) => {
        console.log(user);
        e.preventDefault();
        if (
            user.name === "" ||
            user.state === "" ||
            user.password === "" ||
            user.cPassword === "" ||
            user.email === ""
        ) {
            setEmptyField(true);
            return;
        }
        if (!passCheck) {
            return;
        }     
        auth.signup(user);
    }

    const handleChange = ({ name, value, checked, type }) => {
        type === "checkbox" ?
            setUser({
                [name]: checked
            }) :
            setUser({
                [name]: value
            })
    }
    return (
        <div>
            <UserSignup
                user={user}
                LinkRouter={Link}
                reqNameError={reqNameError}
                emptyField={emptyField}
                reqEmailError={reqEmailError}
                reqPasswordError={reqPasswordError}
                reqStateError={reqStateError}
                reqCPasswordError={reqCPasswordError}
                passCheck={passCheck}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default SignUp