
import { Action } from 'redux'
import { INITIAL_HEADER_STATE } from '../initialState';

import * as HEADER_TYPES from './types';

import Product from '../../types/objects/Product';
import Category from '../../types/objects/Category';
import Header from '../../types/reduxState/Header';



interface ActionHeader extends Action {
    suggestions: Product[],
    view?: boolean,
    categories?: Category[]
}

function headerReducer( state: Header = INITIAL_HEADER_STATE , action: ActionHeader) {
    switch( action.type ) {
        case HEADER_TYPES.SET_SUGGESTIONS:
            return {
                ...state,
                suggestions: action.suggestions
            }
        case HEADER_TYPES.CLEAR_SUGGESTIONS:
            return {
                ...state,
                suggestions: []
            }
        case HEADER_TYPES.SET_HEADER_VIEW:
            return {
                ...state,
                view: action?.view
            }
        case HEADER_TYPES.SET_CATEGORIES:
            return {
                ...state,
                categories: action?.categories
            }
        default:
            return state;
    }
}

export default headerReducer;
