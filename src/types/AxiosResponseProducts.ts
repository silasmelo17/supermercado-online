
import Product from './Product';



interface AxiosResponseProducts {
    page: number,
    limit: number,
    offset: number,
    count: number,
    data: Product[],
    term?: string
}

export default AxiosResponseProducts;
