
import { AnyAction } from 'redux';
import { ThunkDispatch } from "redux-thunk";

import axios from "../../../config/axios.config";

import ActionsProducts from "../actions";
import AxiosResponseProducts from "../../../types/AxiosResponseProducts";
import GlobalState from "../../../types/GlobalState";



function findAllProducts() {
    return async (dispatch: ThunkDispatch<GlobalState, void, AnyAction>, getState: () => GlobalState  ) => {
        const { page, limit } = (getState()).products;

        const { data } = await axios.get<AxiosResponseProducts>( '/products', {
            headers: { token: '' },
            params: { limit, page }
        });

        dispatch(ActionsProducts.findAllProducts({...data}) );
    }
}

export default findAllProducts;
