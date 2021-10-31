
import { AnyAction } from "redux";
import StateLoading from "../../types/reduxState/Loading";

import * as LoadingTypes from './types';
import { INITIAL_LOADING_STATE } from '../initialState';



export interface LoadingAction extends AnyAction{
    loading: string
}

function loadingReducer( state: StateLoading = INITIAL_LOADING_STATE, action: LoadingAction ) {
    switch(action.type) {
        case LoadingTypes.ADD_LOADING:
            const loader = [ ...state.loader, action.loading ];

            return {
                ...state,
                loader,
                now: loader.length >= 1
            };
        case LoadingTypes.REMOVE_LOADING:
            const removed = state.loader.filter( l => l !== action.loading  );

            return {
                ...state,
                loader: removed,
                now: removed.length >= 1
            }
        default:
            return state;
    }
}

export default loadingReducer;
