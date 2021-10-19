
import Cart from '../../types/reduxState/Cart';
import * as CartTypes from './types';



export const setCart = (cart: Cart) => ({
    type: CartTypes.SET_CART,
    playload: {
        page: cart.page,
        count: cart.count,
        data: cart.data,
        offset: cart.offset,
        limit: cart.limit
    }
});
