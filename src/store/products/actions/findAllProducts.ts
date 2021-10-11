
import AxiosResponseProducts from '../../../types/AxiosResponseProducts';

import { ActionProductsType } from '../@types';

import { SET_ALL_PRODUCTS } from '../types'



function findAllProducts( playload: AxiosResponseProducts ): ActionProductsType {
    return {
        type: SET_ALL_PRODUCTS,
        data: playload.data,
        page: playload.page,
        count: playload.count,
        offset: playload.offset,
        limit: playload.limit
    };
}

export default findAllProducts;
