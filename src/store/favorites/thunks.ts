
import axios from '../../config/axios.config';
import { AxiosResponse, AxiosError } from 'axios';

import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import * as FavoritesAction from './actions';
import ProductsAction from '../products/actions';

import Favorites from '../../types/reduxState/Favorites';
import GlobalState from '../../types/reduxState/GlobalState';




export const findFavoritesProducts = () =>
    async (dispatch: ThunkDispatch<GlobalState, void, AnyAction>, getState: () => GlobalState) => {
        try {
            const state = getState();
            const { token } = state.authentication;

            const { data } = await axios.get<Favorites>(`/favorites/user/`, {
                headers: { token },
                params: {
                    page: state.account?.favorites?.page || 1,
                    limit: state.account?.favorites?.limit || 10,
                    fields: ['id', 'name', 'image_src']
                }
            });

            dispatch(FavoritesAction.setFavorites(data));
        } catch (e) {
            const err = e as AxiosError<{ message: string }>;
            alert(err.response?.data.message);
        }
    }

export const toggleFavoriteProduct = (id: number, index: number) =>
    async (dispatch: ThunkDispatch<GlobalState, void, AnyAction>, getState: () => GlobalState) => {
        try {
            const { token } = getState().authentication;

            const { data }: AxiosResponse<any> = await axios
                .post<any, any>(`/favorites/product/${id}`, {}, { headers: { token } });

            dispatch(ProductsAction
                .updateProductByIndex(index, { id, Favorites: data }));
        }catch(e) {
            const err = e as AxiosError<{ message: string }>;
            alert(err.response?.data.message);
        }
    }



export const removeFavoriteFromList = (id: number, index: number) =>
    async (dispatch: ThunkDispatch<GlobalState, void, AnyAction>, getState: () => GlobalState) => {
        try {
            const state = getState();
            const { token } = state.authentication;

            const result: AxiosResponse<any> = await axios.post<any, any>(`/favorites/product/${id}`, {}, { headers: { token } })

            if (result.status === 200)
                dispatch(FavoritesAction.removeFavorite(index));
        } catch (e) {
            const err = e as AxiosError<{ message: string }>;
            alert(err.response?.data.message);
        }
    }

export const incrementFavorites = () =>
    async (dispatch: ThunkDispatch<GlobalState, void, AnyAction>, getState: () => GlobalState) => {
        try {
            const state = getState();
            const { token } = state.authentication;

            const { data } = await axios.get<Favorites>(`/favorites/user/`, {
                headers: { token },
                params: {
                    page: state.account.favorites.page + 1,
                    limit: state.account?.favorites?.limit || 10,
                    offset: state.account.favorites.data.length,
                    fields: ['id', 'name', 'image_src']
                }
            });

            dispatch(FavoritesAction.incrementFavorites(data));
        } catch (e) {
            const err = (e as AxiosError<{ message: string }>);
            alert(err.response?.data.message);
        }
    }
