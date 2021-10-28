
import Account from '../types/reduxState/Account';
import User from '../types/objects/User';
import Authentication from '../types/reduxState/Authentication';
import GlobalState from '../types/reduxState/GlobalState';
import Header from '../types/reduxState/Header';
import Products from '../types/reduxState/Products';
import Favorites from '../types/reduxState/Favorites';
import StateCart from '../types/reduxState/StateCart';
import StateLoading from '../types/reduxState/Loading';



export const INITIAL_AUTH_STATE: Authentication = {
    auth: false,
    token: localStorage.getItem('token') || ''
}

export const INITIAL_LOADING_STATE: StateLoading = {
    loader: [],
    now: false
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

export const INITIAL_ACCOUNT_CART: StateCart =  {
    count: 0,
    limit: 10,
    offset: 0,
    page: 1,
    data: []
}

export const INITIAL_ACCOUNT_STATE: Account = {
    user: INITIAL_ACCOUNT_USER,
    favorites: INITIAL_ACCOUNT_FAVORITES,
    addresses: [],
    cart: INITIAL_ACCOUNT_CART
}



export const INITIAL_HEADER_STATE: Header = {
    suggestions: [],
    view: true,
    categories: []
}

const INITIAL_STATE: GlobalState = {
    authentication: INITIAL_AUTH_STATE,
    products: INITIAL_PRODUCTS_STATE,
    account: INITIAL_ACCOUNT_STATE,
    header: INITIAL_HEADER_STATE,
    loading: INITIAL_LOADING_STATE
};



export default INITIAL_STATE;
