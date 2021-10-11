
import Product from './Product';



interface Products {
    data: Product[]
    page: number,
    limit: number,
    count: number,
    offset?: number,
    term?: string,
}

export default Products;
