
import Product from '../Product';

import { ProductsContainer } from './styles';

import connector, { Props } from './connector';



function ListProducts(props: Props) {
    return(
        <ProductsContainer>
            { props.products.map( (product, i) => {
                const { Favorites, Carts } = product;

                return (<Product 
                    key={`product___${i}`} 
                    index={i}
                    product={product}
                    favorite={(Favorites !== undefined && Favorites?.id !== null) || false}
                    cart={ (Carts !== undefined && Carts?.id !== null) || false }
                />)
            })}
        </ProductsContainer>
    );
}

export default connector(ListProducts);
