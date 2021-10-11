
import Category from './Category';



interface Product {
    id: number,
    name?: string,
    price?: number,
    amount?: number,
    image_src?: string,
    codeBar?: string,
    category_id?: number,
    Category?: Category,

    favorite?: boolean
}

export default Product;
