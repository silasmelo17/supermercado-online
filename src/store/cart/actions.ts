
import Cart from '../../types/reduxState/Cart';
import StateCart from '../../types/reduxState/StateCart';

import { ActionCart } from './index'

import * as CartTypes from './types';



export const setCart = (cart: StateCart): ActionCart => ({
    type: CartTypes.SET_CART,
    payload: {
        page: cart.page,
        count: cart.count,
        data: cart.data,
        offset: cart.offset,
        limit: cart.limit
    }
});

export const setStatus = (status: number): ActionCart => ({
    type: CartTypes.SET_STATUS,
    status
});



export const addCart = (cart: Cart) => ({
    type: CartTypes.ADD_CART,
    cart
});

export const removeCartByIndex = (index: number) => ({
    type: CartTypes.REMOVE_CART,
    index
});
