
import GlobalState from '../types/GlobalState';



export const INITIAL_AUTH_STATE = {
    auth: false,
    token: localStorage.getItem('token') || ''
}

export const INITIAL_PRODUCTS_STATE = {
    data: [],
    page: 4,
    limit: 30,
    count: 0
}

export const INITIAL_USER_STATE = {}



const INITIAL_STATE: GlobalState = {
    authentication: INITIAL_AUTH_STATE,
    products: INITIAL_PRODUCTS_STATE,
    user: INITIAL_USER_STATE
};


export default INITIAL_STATE;
