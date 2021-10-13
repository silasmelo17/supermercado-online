
import Product from "../../../types/Product"

import * as ProductsType from '../types';



const updateProductByIndex = ( index: number, product: Product ) => {
    return {
        type: ProductsType.UPDATE_PRODUCT,
        index,
        product
    }
}

export default updateProductByIndex;
