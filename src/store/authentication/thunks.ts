
import axios from '../../config/axios.config';

import { AxiosResponse } from 'axios';

import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import GlobalState from '../../types/GlobalState';
import AxiosResponseProducts from '../../types/AxiosResponseProducts';

import * as ActionsAuthentication from './actions';
import AxiosResponseAuthentication from '../../types/AxiosResponseAuthentication';



export const userAuthentication = ( email: string, password: string ) => 
    async (dispatch: ThunkDispatch<GlobalState, void, AnyAction>, getState: () => GlobalState ) => {
        const { token } = getState().authentication;

        const { status, data } = await axios.post<undefined, AxiosResponseAuthentication >(`/user/logged/`,
            undefined,
            { token }
        );
        

        dispatch( ActionsAuthentication( data.auth, data.token ) );
    }

