
import * as LoadingTypes from './types';

import {LoadingAction} from './index';



export const addLoading = ( loading: string ): LoadingAction => ({
    type: LoadingTypes.ADD_LOADING,
    loading
});

export const removeLoading = (loading: string): LoadingAction => ({
    type: LoadingTypes.REMOVE_LOADING,
    loading
});
