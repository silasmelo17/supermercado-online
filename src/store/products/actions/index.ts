
import setProducts from "./setProducts";
import setPage from "./setPage";
import updateProductByIndex from "./updateProduct";

import * as PRODUCTS_TYPE from "../types";



const ActionProducts = {
    setProducts,
    setPage,
    updateProductByIndex,

    resetPage: () => ({ type: PRODUCTS_TYPE.RESET_PAGE }),
    incrementPage: () => ({ type: PRODUCTS_TYPE.INCREMENT_PAGE }),
    decrementPage: () => ({ type: PRODUCTS_TYPE.DECREMENT_PAGE })
};

export default ActionProducts;
