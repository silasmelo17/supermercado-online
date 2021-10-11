
import AxiosResponseProducts from '../../../types/AxiosResponseProducts';

import { ActionProductsType } from '../@types';

import { SET_ALL_PRODUCTS } from '../types'



function setProducts( playload: AxiosResponseProducts ): ActionProductsType {
    console.log(playload.term)

    return {
        type: SET_ALL_PRODUCTS,
        data: playload.data,
        page: playload.page,
        count: playload.count,
        offset: playload.offset,
        limit: playload.limit,
        term: playload.term ? playload.term : undefined
    };
}

export default setProducts;
