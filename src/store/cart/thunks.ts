
import { AxiosResponse } from 'axios';
import axios from '../../config/axios.config';

import ProductsActions from '../products/actions';
import * as CartActions from './actions';

import StateCart from '../../types/reduxState/StateCart';
import Cart from '../../types/reduxState/Cart';

import { ThunkGlobalDispatch, getGlobalState } from '../ThunkTypes';



export const findCartProducts = () =>
    async (dispatch: ThunkGlobalDispatch, getState: getGlobalState) => {
        const state = getState();

        const { token } = state.authentication;
        const { cart } = state.account;

        const { data } = await axios.get<any, AxiosResponse<StateCart>>(`/cart`, {
            headers: { token },
            params: {
                page: cart?.page || 1,
                limit: cart?.limit || 10,
                fields: ['id', 'name', 'amount', 'image_src']
            }
        });

        dispatch(CartActions.setCart(data));
    }

export const addProductInCart = (product_id: number, index: number) =>
    async (dispatch: ThunkGlobalDispatch, getState: getGlobalState) => {
        const { token } = getState().authentication;

        const { data, status } = await axios.post<any, AxiosResponse<Cart>>(
            `/cart/${product_id}`,
            { amount: 1 },
            { headers: { token } }
        );

        if (status === 201) {
            dispatch(ProductsActions
                .updateProductByIndex(index, {
                    id: product_id,
                    Carts: data
                }
            ));
        }
    }

export const removeProductInCart = (id: number, index: number) =>
    async (dispatch: ThunkGlobalDispatch, getState: getGlobalState) => {
        const state = getState();
        const { token } = state.authentication;
        const { data } = state.products;

        const { status } = await axios.delete<any, AxiosResponse<Cart>>(
            `/cart/${id}`,
            { headers: { token } }
        );

        if (status === 200) {
            dispatch(ProductsActions
                .updateProductByIndex(index, {
                    id: data[index].id,
                    Carts: undefined
                }
            ));

            dispatch(CartActions.removeCartByIndex(index));
        }
    }
