
import axios from '../../config/axios.config';
import { AxiosResponse, AxiosError } from 'axios';

import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import * as FavoritesAction from './actions';
import ProductsAction from '../products/actions';

import Favorites from '../../types/reduxState/Favorites';
import GlobalState from '../../types/reduxState/GlobalState';




export const findFavoritesProducts = () => 
    async (dispatch: ThunkDispatch<GlobalState, void, AnyAction>, getState: () => GlobalState ) => {
        const state = getState();

        const { token } = state.authentication;
        
        const {data} = await axios.get<Favorites>( `/favorites/user/`, {
            headers: { token },
            params: {
                page: state.account?.favorites?.page || 1,
                limit: state.account?.favorites?.limit || 10,
                fields: [ 'id', 'name', 'image_src' ]
            }
        });

        dispatch( FavoritesAction.setFavorites(data) );
    }

export const toggleFavoriteProduct = ( id: number, index: number ) => 
    async (dispatch: ThunkDispatch<GlobalState, void, AnyAction>, getState: () => GlobalState ) => {
        const { token } = getState().authentication;

        const {status}: AxiosResponse<any> = await axios
            .post<any, any>( `/favorites/product/${id}`, {}, { headers: {token}} )

        const favorite = status === 201 
            ? true 
            : status === 200
        dispatch( ProductsAction
            .updateProductByIndex( index, { id, favorite }) );
    }


    
export const removeFavoriteFromList = ( id: number ) => 
    async (dispatch: ThunkDispatch<GlobalState, void, AnyAction>, getState: () => GlobalState ) => {
        const state = getState();

        const { token } = state.authentication;

        const result: AxiosResponse<any> = await axios.post<any, any>( `/favorites/product/${id}`, {}, { headers: {token}} )
            .catch( (err: AxiosError) => {} );

        if(result.status === 200 )
            dispatch(FavoritesAction.removeFavorite(result.data));
    }

export const incrementFavorites = () => 
    async(dispatch: ThunkDispatch<GlobalState, void, AnyAction>, getState: () => GlobalState ) => {
        const state = getState();
        const { token } = state.authentication;
        
        const {data} = await axios.get<Favorites>( `/favorites/user/`, {
            headers: { token },
            params: {
                page: state.account.favorites.page + 1,
                limit: state.account?.favorites?.limit || 10,
                offset: state.account.favorites.data.length,
                fields: [ 'id', 'name', 'image_src' ]
            }
        });

        dispatch(FavoritesAction.incrementFavorites(data));
    }
