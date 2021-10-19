
import { AnyAction } from 'redux';
import { ThunkDispatch } from "redux-thunk";

import axios from "../../../config/axios.config";

import ActionsProducts from "../actions";
import AxiosResponseProducts from "../../../types/axiosResponse/AxiosResponseProducts";
import GlobalState from "../../../types/reduxState/GlobalState";



function findAllProductsByName( name: string ) {
    return async (dispatch: ThunkDispatch<GlobalState, void, AnyAction>, getState: () => GlobalState  ) => {
        const { page, limit } = (getState()).products;
        const { token } = (getState()).authentication;

        const { data } = await axios.get<any,AxiosResponseProducts>( `/products/name/${name}`, {
            headers: { token },
            params: { limit, page }
        });

        dispatch(ActionsProducts.setProducts({...data}) );
    }
}

export default findAllProductsByName;
