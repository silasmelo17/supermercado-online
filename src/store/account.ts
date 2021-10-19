
import { combineReducers} from 'redux';

import favorites from './favorites'
import user from './user'
import addresses from './addresses';
import cart from './cart/';



export default combineReducers({
    user,
    favorites,
    addresses,
    cart
});
