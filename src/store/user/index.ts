
import { Action } from 'redux';

import User from '../../types/User';
import { INITIAL_ACCOUNT_USER } from '../initialState';

import * as UserTypes from './types';


type ActionUser = Action & User;

function userReducer( state: User = INITIAL_ACCOUNT_USER, action: ActionUser  ) {
    switch(action.type) {
        case UserTypes.SET_USER:
            return {
                ...state,
                name: action.name,
                cpf: action.cpf,
                lastName: action.lastName,
                email: action.email,
                birthday: action.birthday,
                phone: action.phone
            }
        default: 
            return state;
    }
}

export default userReducer;
