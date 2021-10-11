
import AxiosResponseProducts from '../../types/AxiosResponseProducts';

import Products from '../../types/Products';
import { INITIAL_PRODUCTS_STATE } from '../initialState';

import { SET_ALL_PRODUCTS } from './types';



interface ActionAxiosReponseProducts extends AxiosResponseProducts {
    type: string
}


function productsReducer( state: Products = INITIAL_PRODUCTS_STATE, action: ActionAxiosReponseProducts ) {
    switch(action.type) {
        case SET_ALL_PRODUCTS:
            return {
                ...state,
                data: action.data,
                page: action.page,
                limit: action.limit,
                offset: action.offset,
                count: action.count
            };
        default: 
            return state; 
    }
}

export default productsReducer;
