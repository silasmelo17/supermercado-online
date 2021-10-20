
import axios from '../../config/axios.config';

import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import GlobalState from '../../types/reduxState/GlobalState';

import * as ActionsAuthentication from './actions';
import AxiosResponseAuthentication from '../../types/axiosResponse/AxiosResponseAuthentication';

import * as UserAction from '../user/actions';



export const userAuthentication = ( email: string, password: string ) => 
    async (dispatch: ThunkDispatch<GlobalState, void, AnyAction>) => {
        await new Promise((r) => setTimeout(() => r(true), 5000) )

        const { data } = await axios.post<any, AxiosResponseAuthentication >(`/user/signin/`,
            { email, password }
        );

        dispatch( ActionsAuthentication.userAuthentication( data.auth, data.token ) );
        if(data.auth)
            dispatch( UserAction.setUser(data.user) );
    }

export const userTokenAuthentication = () => 
    async (dispatch: ThunkDispatch<GlobalState, void, AnyAction>, getState: () => GlobalState ) => {
        const { token } = getState().authentication;

        const { data } = await axios
            .post<any, AxiosResponseAuthentication >(`/user/logged/`, {}, {headers: { token }} );

        dispatch( ActionsAuthentication.tokenAuthentication( data.auth ) );
        if(data.auth)
            dispatch( UserAction.setUser(data.user) );
    }

export const userSignOutAuthentication = () =>
    async (dispatch: ThunkDispatch<GlobalState, void, AnyAction>, getState: () => GlobalState ) => {
        const { token } = getState().authentication;

        const result = await axios.post( '/user/signout', {}, { headers: {token} } );
        if(result.status === 200)
            dispatch( ActionsAuthentication.signOutAuthentication() );
    }
