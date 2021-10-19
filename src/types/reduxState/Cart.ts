
import Product from "../objects/Product";



export interface ProductCart {
    id: number,
    user_id: number,
    product_id: number,
    amount: number,
    Product: Product
}

export default interface Cart {
    count: number,
    limit: number,
    offset: number,
    page: number,
    data: ProductCart[]
}
