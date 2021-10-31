
import axios from '../../config/axios.config';
import { AxiosError } from 'axios';

import * as ActionsAuthentication from './actions';
import AxiosResponseAuthentication from '../../types/axiosResponse/AxiosResponseAuthentication';

import * as UserAction from '../user/actions';

import createLoading from '../loading/createLoading';

import { ThunkGlobalDispatch, getGlobalState } from '../ThunkTypes';



export const userAuthentication = (email: string, password: string) =>
    async (D: ThunkGlobalDispatch, G: getGlobalState) => {
        let message;

        await createLoading(async (dispatch) => {
            try {
                const { data } = await axios
                    .post<any, AxiosResponseAuthentication>(`/user/signin/`,
                        { email, password }
                    );

                dispatch(ActionsAuthentication.userAuthentication(data.auth, data.token));
                if (data.auth)
                    dispatch(UserAction.setUser(data.user));
            } catch (e) {
                const { request, response } = e as AxiosError<{ message: string }>;
                message = request?.data?.message || response?.data?.message;
            }
        }, D, G);

        if(message)
            alert(message);
    }

export const userTokenAuthentication = () =>
    async (dispatch: ThunkGlobalDispatch, getState: getGlobalState) => {
        await createLoading(async () => {
            try {
                const { token } = getState().authentication;

                const { data } = await axios
                    .post<any, AxiosResponseAuthentication>(`/user/logged/`, {}, { headers: { token } });

                dispatch(ActionsAuthentication.tokenAuthentication(data.auth));
                if (data.auth)
                    dispatch(UserAction.setUser(data.user));
            } catch (e) {
            }
        }, dispatch, getState);
    }

export const userSignOutAuthentication = () =>
    async (D: ThunkGlobalDispatch, G: getGlobalState) => {
        await createLoading(async (dispatch, getState) => {
            try {
                const { token } = getState().authentication;

                const result = await axios.post('/user/signout', {}, { headers: { token } });
                if (result.status === 200)
                    dispatch(ActionsAuthentication.signOutAuthentication());
            } catch (e) {
            }
        }, D, G);
    }
