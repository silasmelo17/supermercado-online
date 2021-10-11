
import { Action } from 'redux';

import Authentication from "../../types/Authentication";
import { INITIAL_AUTH_STATE } from "../initialState";

import * as AuthenticationTypes from './types';



interface ActionAuthentication extends Action {
    auth: boolean,
    token: string
}

function authenticationReducer( state:Authentication = INITIAL_AUTH_STATE, action: ActionAuthentication ) {
    switch(action.type){
        case AuthenticationTypes.SET_AUTHENTICATION:
            return {
                ...state,
                auth: action.auth,
                token: action.token
            }
        default: 
            return state;
    }
}

export default authenticationReducer;
