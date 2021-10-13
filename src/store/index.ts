
import { createStore, applyMiddleware  } from 'redux';
import reduxThunk from 'redux-thunk';

import rootReducer from './rootReducer';



const store = createStore(
    rootReducer,
    applyMiddleware(reduxThunk)
);

console.log(store.getState());

export default store;
