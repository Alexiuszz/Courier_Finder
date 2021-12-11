import React, { useReducer, useState } from 'react';
import SignupForm from '../../Components/form_components/SignupForm';
import { useAuth } from '../../auth_setup/use-auth';

export function Courier() {
    const [user, setUser] = useReducer((user, update) => ({ ...user, ...update }), {
        name: '',
        email: '',
        password: '',
        state: '',
        cPassword: '',
    });

    const auth = useAuth();

    const errorTag = (mess = 'Required Field') => (<p className='errorTag'>{mess}</p>);
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
            <SignupForm
                user={user}
                reqNameError={reqNameError}
                emptyField={emptyField}
                reqEmailError={reqEmailError}
                reqPasswordError={reqPasswordError}
                reqStateError={reqStateError}
                reqCPasswordError={reqCPasswordError}
                passCheck={passCheck}
                errorTag={errorTag}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                form='courier'
            />
        </div>
    )
}