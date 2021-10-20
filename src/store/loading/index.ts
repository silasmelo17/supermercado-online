
import { Action } from "redux";
import StateLoading, { Loading } from "../../types/reduxState/Loading";

import * as LoadingTypes from './types';



interface LoadingAction extends Action{
    loading: Loading
}

function loadingReducer( state: StateLoading, action: LoadingAction ) {
    switch(action.type) {
        case LoadingTypes.ADD_LOADING:
            return {
                ...state,
                loader: [ ...state.loader, action.loading ]
            }
        default:
            return state;
    }
}

export default loadingReducer;
