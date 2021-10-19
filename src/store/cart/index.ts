
import { AnyAction } from 'redux';
import { INITIAL_ACCOUNT_CART } from '../initialState';
import Cart from '../../types/reduxState/Cart';
import * as CartTypes from './types';



interface CartAction extends AnyAction {
    playload: Cart
}

function cartReducer( state: Cart = INITIAL_ACCOUNT_CART, action: CartAction ) {
    switch(action.type) {
        case CartTypes.SET_CART:
            return {
                ...state,
                count: action.playload.count,
                page: action.playload.page,
                limit: action.playload.limit,
                offset: action.playload.offset,
                data: action.playload.data
            }
        default:
            return state;
    }
}

export default cartReducer;
