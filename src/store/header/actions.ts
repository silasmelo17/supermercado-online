
import Category from '../../types/objects/Category';
import Product from '../../types/objects/Product';

import * as HEADER_TYPES from './types';



export const setSuggestions = ( suggestions: Product[] ) => ({
    type: HEADER_TYPES.SET_SUGGESTIONS,
    suggestions: suggestions
})

export const clearSuggestions = () => ({
    type: HEADER_TYPES.CLEAR_SUGGESTIONS
});

export const setHeaderView = (view: boolean) => ({
    type: HEADER_TYPES.SET_HEADER_VIEW,
    view
});

export const setCategories = (categories: Category[]) => ({
    type: HEADER_TYPES.SET_CATEGORIES,
    categories
});
