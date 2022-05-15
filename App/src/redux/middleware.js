import { callApiEndpoint } from '../api/ApiCall';
import * as actions from './user/userTypes';

export const loggedOut = ({ dispatch }) => next => action => {
    if (action.type === actions.LOGGED_OUT) {
        callApiEndpoint (
            'auth/signout',
            'get',
            {},
            res => {
                localStorage.removeItem('userData');
            },
            error => {
                dispatch({type: actions.SET_ERROR, payload: error});
            }
        );
    }
    
    return next(action);
}