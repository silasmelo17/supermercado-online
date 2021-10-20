
import Product from "../objects/Product";



export default interface Cart {
    id: number,
    user_id: number,
    product_id: number,
    amount: number,
    Product: Product
}
