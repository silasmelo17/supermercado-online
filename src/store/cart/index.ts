
import { Action } from 'redux';
import { INITIAL_ACCOUNT_CART } from '../initialState';

import StateCart from '../../types/reduxState/StateCart';
import Cart from '../../types/reduxState/Cart';

import * as CartTypes from './types';



export interface ActionCart extends Action {
    payload?: StateCart,
    status?: number, 
    cart?: Cart,
    index?: number
}



function cartReducer( state: StateCart = INITIAL_ACCOUNT_CART, action: ActionCart ) {
    switch(action.type) {
        case CartTypes.SET_CART:
            const { payload } = action;
            return {
                ...state,
                count: payload?.count,
                page: payload?.page,
                limit: payload?.limit,
                offset: payload?.offset,
                data: payload?.data
            };
        case CartTypes.SET_STATUS:
            return {
                ...state,
                status: action?.status
            }
        case CartTypes.ADD_CART:
            const { cart } = action;
            return {
                ...state,
                data: [ ...state.data, cart ]
            }
        case CartTypes.REMOVE_CART:
            const update = state.data.filter( (_,i) => i !== action.index )

            return {
                ...state,
                data: update,
                count: update.length
            }
        default:
            return state;
    }
}

export default cartReducer;
