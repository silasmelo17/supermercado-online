
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk';

import GlobalState from '../../types/reduxState/GlobalState';

import axios from '../../config/axios.config';
import { setSuggestions } from './actions';
import AxiosResponseProducts from '../../types/axiosResponse/AxiosResponseProducts';



export const findProductsSuggestions = (name: string) => 
    async (dispatch: ThunkDispatch<GlobalState, void, AnyAction> ) => {
        const {data} = await axios.get<any,AxiosResponseProducts>( `/products/name/${name}`, {
            params: {
                page: 1,
                limit: 5,
                fields: [ 'id', 'name', 'image_src' ]
            }
        });

        dispatch( setSuggestions(data.data) );
    }
