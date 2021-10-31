
import { ActionProducts } from "..";
import Product from "../../../types/objects/Product"

import * as ProductsType from '../types';



const updateProductByIndex = ( index: number, product: Product ): ActionProducts => {
    return {
        type: ProductsType.UPDATE_PRODUCT,
        update: {
            index,
            product
        }
    }
}

export default updateProductByIndex;
