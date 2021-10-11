
import { combineReducers } from 'redux';

import products from './products';
import user from './user';
import authentication from './authentication';
import header from './header';



export default combineReducers({
    authentication,
    products,
    user,
    header
});
