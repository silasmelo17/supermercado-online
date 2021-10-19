
import { AnyAction } from 'redux';
import { ThunkDispatch } from "redux-thunk";

import axios from "../../../config/axios.config";

import ActionsProducts from "../actions";
import AxiosResponseProducts from "../../../types/axiosResponse/AxiosResponseProducts";
import GlobalState from "../../../types/reduxState/GlobalState";



function findAllProducts() {
    return async (dispatch: ThunkDispatch<GlobalState, void, AnyAction>, getState: () => GlobalState  ) => {
        const { page, limit } = (getState()).products;
        const { token } = (getState()).authentication;

        const { data } = await axios.get<any,AxiosResponseProducts>( '/products', {
            headers: { token },
            params: { limit, page }
        });

        console.log( 'thunk find all products',  data);

        dispatch( ActionsProducts.setProducts({...data}) );
    }
}

export default findAllProducts;
