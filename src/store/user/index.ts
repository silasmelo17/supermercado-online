
import { Action } from 'redux';

import User from "../../types/User";
import { INITIAL_USER_STATE } from '../initialState';



function userReducer( state: User = INITIAL_USER_STATE, action: Action) {
    return state;
}

export default userReducer;
