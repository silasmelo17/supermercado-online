
import { ActionFavorite } from '.';
import Favorite from '../../types/objects/Favorite';
import Favorites from '../../types/reduxState/Favorites';

import * as FavoritesTypes from './types';



export const setFavorites = (favorites: Favorites): ActionFavorite => ({
    type: FavoritesTypes.SET_FAVORITES,
    payload: { 
        page: favorites.page,
        count: favorites.count,
        data: favorites.data,
        offset: favorites.offset,
        limit: favorites.limit
    }
});

export const resetFavorites = () => ({
    type: FavoritesTypes.RESET_FAVORITES,
});

export const removeFavorite = (index: number ) => ({
    type: FavoritesTypes.REMOVE_FAVORITE,
    index
});

export const incrementFavorites = (favorites: Favorites) => ({
    type: FavoritesTypes.INCREMENT_FAVORITE,
    payload: { ...favorites }
})
