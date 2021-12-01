import React, { useReducer, useState } from 'react';
import { useAuth } from '../../auth_setup/use-auth.js';
import UserLogin from '../../Components/form_components/LoginForm';


function Login() {
    const [user, setUser] = useReducer((user, update) => ({ ...user, ...update }), {
        email: '',
        password: '',
        keepSignedin: false
    })
    

    const [emptyField, setEmptyField] = useState(false);

    const reqEmailError = user.email === "";
    const reqPasswordError = user.password === "";
    const auth = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.email === "" || user.password === "") {
            setEmptyField(true);
            return;
        }
        auth.login(user);
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
            <UserLogin
                user={user}
                auth={auth}
                reqEmailError={reqEmailError}
                emptyField={emptyField}
                reqPasswordError={reqPasswordError}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </div>


    )
}

export default Login