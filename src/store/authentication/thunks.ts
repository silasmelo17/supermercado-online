
import axios from '../../config/axios.config';

import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import GlobalState from '../../types/GlobalState';

import * as ActionsAuthentication from './actions';
import AxiosResponseAuthentication from '../../types/AxiosResponseAuthentication';



interface AxiosRequestAuthentication {
    headers: {
        token: string
    },
    data: {
        email: string,
        password: string
    }
}


export const userAuthentication = ( email: string, password: string ) => 
    async (dispatch: ThunkDispatch<GlobalState, void, AnyAction>, getState: () => GlobalState ) => {
        const { token } = getState().authentication;

        const { status, data } = await axios.post<AxiosRequestAuthentication, AxiosResponseAuthentication >(`/user/signin/`,{
            headers: { token },
            data: {
                email, password
            }   
        });

        console.log(status, data)
        

        dispatch( ActionsAuthentication.userAuthentication( data.auth, data.token ) );
    }

