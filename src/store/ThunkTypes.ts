
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import GlobalState from '../types/reduxState/GlobalState';



export type ThunkGlobalDispatch = ThunkDispatch<GlobalState, void, AnyAction>

export type getGlobalState = () => GlobalState;
