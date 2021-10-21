
import axios from '../../config/axios.config';

import * as ActionsAuthentication from './actions';
import AxiosResponseAuthentication from '../../types/axiosResponse/AxiosResponseAuthentication';

import * as UserAction from '../user/actions';

import createLoading from '../loading/createLoading';

import { ThunkGlobalDispatch, getGlobalState } from '../ThunkTypes';



export const userAuthentication = ( email: string, password: string ) => 
    async (D: ThunkGlobalDispatch, G: getGlobalState ) => {
        await createLoading( async ( dispatch ) => {
            const { data } = await axios.post<any, AxiosResponseAuthentication >(`/user/signin/`,
                { email, password }
            );

            dispatch( ActionsAuthentication.userAuthentication( data.auth, data.token ) );
            if(data.auth)
                dispatch( UserAction.setUser(data.user) );
        }, D, G );
    }

export const userTokenAuthentication = () => 
    async ( dispatch: ThunkGlobalDispatch, getState: getGlobalState ) => {
        await createLoading( async () => {
            const { token } = getState().authentication;

            const { data } = await axios
                .post<any, AxiosResponseAuthentication >(`/user/logged/`, {}, {headers: { token }} );

            dispatch( ActionsAuthentication.tokenAuthentication( data.auth ) );
            if(data.auth)
                dispatch( UserAction.setUser(data.user) );
        }, dispatch, getState );
    }

export const userSignOutAuthentication = () =>
    async ( D: ThunkGlobalDispatch, G: getGlobalState) => {
        await createLoading( async (dispatch, getState ) => {
            const { token } = getState().authentication;

            const result = await axios.post( '/user/signout', {}, { headers: {token} } );
            if(result.status === 200)
                dispatch( ActionsAuthentication.signOutAuthentication() );
        }, D, G);
    }
