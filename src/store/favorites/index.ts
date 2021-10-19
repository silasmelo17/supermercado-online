
import { Action } from 'redux';

import Favorite from '../../types/objects/Favorite';
import Favorites from '../../types/reduxState/Favorites';

import { INITIAL_ACCOUNT_FAVORITES } from '../initialState';
import * as FavoritesTypes from './types';



type FavoritesAction = Action & Favorites & Favorite;



function favoriteReducer( state: Favorites = INITIAL_ACCOUNT_FAVORITES, action: FavoritesAction) {
    switch(action.type) {
        case FavoritesTypes.RESET_FAVORITES:
            return {
                ...state,
                ...INITIAL_ACCOUNT_FAVORITES
            }
        case FavoritesTypes.SET_FAVORITES: 
            return {
                ...state,
                limit: action.limit,
                page: action.page,
                count: action.count,
                offset: action.offset,
                data: action.data
            }
        case FavoritesTypes.REMOVE_FAVORITE:
            return {
                ...state,
                offset: state.offset-1,
                count: state.count-1,
                data: state.data?.filter( (f) => f.id !== action.id )
            }
        case FavoritesTypes.INCREMENT_FAVORITE:
            return {
                ...state,
                limit: action.limit,
                page: action.page,
                count: action.count,
                offset: action.offset,
                data: [ ...state.data, ...action.data ]
            }
        default: 
            return state;
    }
}

export default favoriteReducer;
