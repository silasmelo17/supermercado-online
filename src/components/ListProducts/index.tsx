
import TypeProduct from '../../types/TypeProduct';
import Product from '../Product';

import { ProductsContainer } from './styles';


interface ListProductsProps {
    products: TypeProduct[]
}



function ListProducts({ products }: ListProductsProps ) {
    return(
        <ProductsContainer>
            { products.map( (product, i) => <Product key={`product___${i}`} {...product} /> ) }
        </ProductsContainer>
    )
}

export default ListProducts;
