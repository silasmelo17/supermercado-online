
import Products from "../../../types/reduxState/Products";

import setPage from "./setPage";
import updateProductByIndex from "./updateProduct";

import * as PRODUCTS_TYPE from "../types";

import { ActionProducts } from '../index'



const setProducts = (products: Products): ActionProducts => {
    console.log('set products', products)

    return ({
        type: PRODUCTS_TYPE.SET_ALL_PRODUCTS,
        payload: { ...products }
    });
}



const ProductsActions = {
    setProducts,

    setPage,
    updateProductByIndex,

    resetPage: () => ({ type: PRODUCTS_TYPE.RESET_PAGE }),
    incrementPage: () => ({ type: PRODUCTS_TYPE.INCREMENT_PAGE }),
    decrementPage: () => ({ type: PRODUCTS_TYPE.DECREMENT_PAGE })
};

export default ProductsActions;
