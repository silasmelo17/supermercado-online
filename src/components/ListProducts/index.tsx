
import Product from '../Product';

import { ProductsContainer } from './styles';

import connector, { Props } from './connector';



function ListProducts(props: Props) {

    // const LoadingProducts = () => props.products.length === 0
    //     ? (<Loading size={32} />)
    //     : (<ProductsContainer>
    //         { props.products.map( (product, i) => 
    //             <Product key={`product___${i}`} {...product} /> ) }
    //     </ProductsContainer>)
    
    return(
        <ProductsContainer>
            { props.products.map( (product, i) => 
                <Product key={`product___${i}`} index={i} {...product} /> ) }
        </ProductsContainer>
    );
}

export default connector(ListProducts);
