
import Cart from '../reduxState/Cart';
import Category from './Category';
import Favorite from './Favorite';



interface Product {
    id: number,
    name?: string,
    price?: number,
    amount?: number,
    image_src?: string,
    codeBar?: string,
    category_id?: number,
    Category?: Category,
    Favorites?: Favorite,
    Carts?: Cart

    favorite?: boolean,
    cart?: boolean
}

export default Product;
