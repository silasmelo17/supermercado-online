
import { AnyAction } from 'redux';
import { ThunkDispatch } from "redux-thunk";

import axios from "../../../config/axios.config";

import ActionsProducts from "../actions";
import AxiosResponseProducts from "../../../types/axiosResponse/AxiosResponseProducts";
import GlobalState from "../../../types/reduxState/GlobalState";



function findAllProducts() {
    return async (dispatch: ThunkDispatch<GlobalState, void, AnyAction>, getState: () => GlobalState  ) => {
        const state = getState();
        
        const { page, limit } = state.products;
        const { token } = state.authentication;

        const { data } = await axios.get<any,AxiosResponseProducts>( '/products', {
            headers: { token },
            params: { limit, page }
        });

        dispatch( ActionsProducts.setProducts({...data}) );
    }
}

export default findAllProducts;
