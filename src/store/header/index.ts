
import { Action } from 'redux'
import { INITIAL_HEADER_STATE } from '../initialState';

import * as HEADER_TYPES from './types';
import Product from '../../types/Product';



interface ActionHeader extends Action {
    suggestions: Product[]
}

function headerReducer( state = INITIAL_HEADER_STATE , action: ActionHeader) {
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
        default:
            return state;
    }
}

export default headerReducer;
