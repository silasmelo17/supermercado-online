
import Favorites, {Favorite} from '../../types/Favorites';

import * as FavoritesTypes from './types';



export const setFavorites = (favorites: Favorites) => ({
    type: FavoritesTypes.SET_FAVORITES,
    page: favorites.page,
    count: favorites.count,
    data: favorites.data,
    offset: favorites.offset,
    limit: favorites.limit
});

export const resetFavorites = () => ({
    type: FavoritesTypes.RESET_FAVORITES,
});

export const removeFavorite = (favorite: Favorite ) => ({
    type: FavoritesTypes.REMOVE_FAVORITE,
    ...favorite
});

export const incrementFavorites = (favorites: Favorites) => ({
    type: FavoritesTypes.INCREMENT_FAVORITE,
    ...favorites
})
