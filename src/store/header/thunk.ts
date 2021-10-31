
import { ThunkGlobalDispatch } from './../ThunkTypes'

import axios from '../../config/axios.config';
import { AxiosResponse } from 'axios';

import { setSuggestions, setCategories } from './actions';

import AxiosResponseProducts from '../../types/axiosResponse/AxiosResponseProducts';
import Category from '../../types/objects/Category';




export const findProductsSuggestions = (name: string) => 
    async (dispatch:ThunkGlobalDispatch ) => {
        const {data} = await axios.get<any,AxiosResponseProducts>( `/products/name/${name}`, {
            params: {
                page: 1,
                limit: 5,
                fields: [ 'id', 'name', 'image_src' ]
            }
        });

        dispatch( setSuggestions(data.data) );
    }

export const findCategories = () =>
    async(dispatch: ThunkGlobalDispatch ) => {
        const categories = await axios
            .get<any, AxiosResponse<Category[]>>( '/categories' );
        dispatch( setCategories(categories.data) );
    }
    