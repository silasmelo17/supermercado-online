
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import GlobalState from '../../types/reduxState/GlobalState';

import * as LoadingAction from './actions';

import { ThunkGlobalDispatch, getGlobalState } from '../ThunkTypes';



type Callback = ( dispatch: ThunkGlobalDispatch, getState: getGlobalState ) => Promise<void>;


async function createLoading( callback: Callback, dispatch: ThunkGlobalDispatch, getState: getGlobalState ) {
    const loading = Date.now().toString();
    dispatch( LoadingAction.addLoading(loading) );

    await callback( dispatch, getState );
    
    dispatch( LoadingAction.removeLoading(loading) );
}



export default createLoading;
