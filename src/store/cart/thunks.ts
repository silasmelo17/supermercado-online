
import axios from '../../config/axios.config';
import { AxiosResponse } from 'axios';

import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import * as CartActions from './actions';

import Cart from '../../types/reduxState/Cart';
import GlobalState from '../../types/reduxState/GlobalState';



export const findCartProducts = () => 
    async (dispatch: ThunkDispatch<GlobalState, void, AnyAction>, getState: () => GlobalState ) => {
        const state = getState();
        
        const { token } = state.authentication;
        const { cart } = state.account

        const {data} = await axios.get<any, AxiosResponse<Cart>>( `/cart`, {
            headers: { token },
            params: {
                page: cart?.page || 1,
                limit: cart?.limit || 10,
                fields: [ 'id', 'name', 'amount', 'image_src' ]
            }
        });

        dispatch( CartActions.setCart(data) );
    }
