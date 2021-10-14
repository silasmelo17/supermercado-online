
import Account from '../types/Account';
import User from '../types/User';
import Authentication from '../types/Authentication';
import GlobalState from '../types/GlobalState';
import Header from '../types/Header';
import Products from '../types/Products';
import Favorites from '../types/Favorites';



export const INITIAL_AUTH_STATE: Authentication = {
    auth: false,
    token: localStorage.getItem('token') || '',
    loading: false
}

export const INITIAL_PRODUCTS_STATE: Products = {
    data: [],
    page: 4,
    limit: 30,
    count: 0
}

export const INITIAL_ACCOUNT_USER: User = {}

export const INITIAL_ACCOUNT_FAVORITES: Favorites = {
    count: 0,
    limit: 10,
    offset: 0,
    page: 1,
    data: []
}

export const INITIAL_ACCOUNT_STATE: Account = {
    user: INITIAL_ACCOUNT_USER,
    favorites: INITIAL_ACCOUNT_FAVORITES
}



export const INITIAL_HEADER_STATE: Header = {
    suggestions: [],
    view: true
}


const INITIAL_STATE: GlobalState = {
    authentication: INITIAL_AUTH_STATE,
    products: INITIAL_PRODUCTS_STATE,
    account: INITIAL_ACCOUNT_STATE,
    header: INITIAL_HEADER_STATE
};


export default INITIAL_STATE;
