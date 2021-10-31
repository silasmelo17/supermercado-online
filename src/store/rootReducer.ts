
import { combineReducers } from 'redux';

import products from './products/';
import account from './account';
import authentication from './authentication/';
import loading from './loading';
import header from './header/';



export default combineReducers({
    authentication,
    loading,
    products,
    account,
    header
});
