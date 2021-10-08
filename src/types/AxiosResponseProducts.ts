
import TypeProduct from './TypeProduct';



interface AxiosResponseProducts {
    page: number,
    limit: number,
    offset: number,
    count: number,
    data: TypeProduct[]
}

export default AxiosResponseProducts;
