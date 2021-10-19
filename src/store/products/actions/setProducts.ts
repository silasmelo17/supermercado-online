
import Products from '../../../types/reduxState/Products';

import { SET_ALL_PRODUCTS } from '../types'



function setProducts(products: Products) {
    return {
        type: SET_ALL_PRODUCTS,
        playload: {
            data: products.data,
            page: products.page,
            count: products.count,
            offset: products.offset,
            limit: products.limit,
            term: products.term ? products.term : undefined
        }
    };
}

export default setProducts;
