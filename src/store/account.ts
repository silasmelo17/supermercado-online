
import { combineReducers} from 'redux';

import favorites from './favorites'
import user from './user'
import addresses from './addresses';



export default combineReducers({
    user,
    favorites,
    addresses
});
