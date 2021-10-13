
import { Action } from 'redux';

import User from '../../types/User';
import Authentication from "../../types/Authentication";

import { INITIAL_AUTH_STATE } from "../initialState";

import * as AuthenticationTypes from './types';



interface ActionAuthentication extends Action {
    auth: boolean,
    token: string,
    user?: User,
}

function authenticationReducer( state:Authentication = INITIAL_AUTH_STATE, action: ActionAuthentication ) {
    switch(action.type){
        case AuthenticationTypes.SET_AUTHENTICATION:
            return {
                ...state,
                auth: action.auth,
                token: action.token
            }
        case AuthenticationTypes.SET_USER_AUTHENTICATION:
            return {
                ...state,
                auth: action.auth,
                user: action.user
            }
        default: 
            return state;
    }
}

export default authenticationReducer;
