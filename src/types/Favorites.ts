
import Product from './Product';



export interface Favorite {
    id: number,
    user_id: number,
    product_id: number,
    Product: Product
}

interface Favorites {
    count: number,
    limit: number,
    offset: number,
    page: number,
    data: Favorite[]
}

export default Favorites;
