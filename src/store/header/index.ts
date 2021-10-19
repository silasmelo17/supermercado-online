
import { Action } from 'redux'
import { INITIAL_HEADER_STATE } from '../initialState';

import * as HEADER_TYPES from './types';
import Product from '../../types/objects/Product';



interface ActionHeader extends Action {
    suggestions: Product[],
    view?: boolean
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
        case HEADER_TYPES.SET_HEADER_VIEW:
            return {
                ...state,
                view: action?.view
            }
        default:
            return state;
    }
}

export default headerReducer;
