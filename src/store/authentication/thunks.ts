
import axios from '../../config/axios.config';

import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import GlobalState from '../../types/GlobalState';

import * as ActionsAuthentication from './actions';
import AxiosResponseAuthentication from '../../types/AxiosResponseAuthentication';



export const userAuthentication = ( email: string, password: string ) => 
    async (dispatch: ThunkDispatch<GlobalState, void, AnyAction>) => {
        
        const { data } = await axios.post<any, AxiosResponseAuthentication >(`/user/signin/`,
            { email, password }
        );

        dispatch( ActionsAuthentication.userAuthentication( data.auth, data.token ) );
    }

export const userTokenAuthentication = () => 
    async (dispatch: ThunkDispatch<GlobalState, void, AnyAction>, getState: () => GlobalState ) => {
        const { token } = getState().authentication;
            
        const { data } = await axios
            .post<any, AxiosResponseAuthentication >(`/user/logged/`, {}, {headers: { token }} );

        dispatch( ActionsAuthentication.tokenAuthentication( data.auth, data.user ) );
    }
