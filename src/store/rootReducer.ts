
import { combineReducers } from 'redux';

import products from './products/';
import account from './account';
import authentication from './authentication/';
import header from './header/';



export default combineReducers({
    authentication,
    products,
    account,
    header
});
