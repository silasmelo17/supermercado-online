
import axios from "../../config/axios.config";

import ActionsProducts from "./actions";
import AxiosResponseProducts from "../../types/axiosResponse/AxiosResponseProducts";

import createLoading from '../loading/createLoading';

import { ThunkGlobalDispatch, getGlobalState } from '../ThunkTypes';



export const findProducts = ( url: string ) =>
    async (D: ThunkGlobalDispatch, G: getGlobalState  ) => {
        await createLoading( async (dispatch, getState) => {
            const state = getState();
        
            const { page, limit } = state.products;
            const { token } = state.authentication;
    
            const { data } = await axios.get<any,AxiosResponseProducts>( url, {
                headers: { token },
                params: { limit, page }
            });
    
            dispatch( ActionsProducts.setProducts({...data}) );
        }, D, G );
    }
