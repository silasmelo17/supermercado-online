
import AxiosResponseProducts from '../../types/AxiosResponseProducts';
import Product from '../../types/Product';

import Products from '../../types/Products';
import { INITIAL_PRODUCTS_STATE } from '../initialState';

import * as PRODUCTS_TYPE from './types';



interface ActionAxiosReponseProducts extends AxiosResponseProducts {
    type: string
    index?: number,
    product?: Product
}


function productsReducer( state: Products = INITIAL_PRODUCTS_STATE, action: ActionAxiosReponseProducts ) {
    switch(action.type) {
        case PRODUCTS_TYPE.SET_ALL_PRODUCTS:
            return {
                ...state,
                data: action.data,
                page: action.page,
                limit: action.limit,
                offset: action.offset,
                count: action.count,
                term: action?.term
            };
        case PRODUCTS_TYPE.SET_PAGE:
            return {
                ...state,
                page: action.page
            }
        case PRODUCTS_TYPE.RESET_PAGE:
            return {
                ...state,
                page: 1
            }
        case PRODUCTS_TYPE.INCREMENT_PAGE:
            return {
                ...state,
                page: state.page + 1
            }
        case PRODUCTS_TYPE.DECREMENT_PAGE:
            return {
                ...state,
                page: state.page > 1 
                    ? state.page-1
                    : state.page
            }
        case PRODUCTS_TYPE.UPDATE_PRODUCT:   
            const { index, product } = action;
            if( index && product ) {
                const copy = [ ...state.data ];
            
                if(copy[index])
                    copy[index] = { ...copy[index], ...product };

                return {
                    ...state,
                    data: copy
                }
            }

            return {...state};
        default: 
            return state; 
    }
}

export default productsReducer;
