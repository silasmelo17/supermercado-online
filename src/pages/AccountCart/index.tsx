import { useEffect } from "react";
import { FaPlus, FaTrash } from 'react-icons/fa';

import TemplateAccount from "../../templates/TemplateAccount";

import Product from "../../types/objects/Product";

import { 
    CheckList, ListProductContainer, Increment, 
    ProductContainer, ProductContainerColumn, ProductImage, ProductName,
    Remove, ProductListEmpty
} from '../../styles/verticalListProducts';

import connector, { Props } from './connector';



function AccountCart( {loadCart, removeProductInCart, cart }: Props ) {

    useEffect( () => {
        loadCart();
    }, [loadCart]);



    const CartProduct = ({product, index, id}: { product: Product, index: number, id: number} )=> (<ProductContainer>
        <ProductContainerColumn>
            <CheckList type="checkbox" value={product.id} />
            
            <ProductImage src={product.image_src} />
            
            <ProductName>
                {product.name}
            </ProductName>
        </ProductContainerColumn>

        <ProductContainerColumn>
            <Remove onClick={ () => removeProductInCart( id, index ) }>
                <FaTrash size={22} />
            </Remove>
        </ProductContainerColumn>
    </ProductContainer>);

    return(
        <TemplateAccount title="Carrinho" subtitle="Meus produtos">
            {cart.count > 0 && <span>{cart.count} produtos encontrados.</span>}
            {cart.count === 0 && <ProductListEmpty>
                Nenhum produto favoritado.
            </ProductListEmpty>}

            <ListProductContainer>
                { cart && cart.data?.map( ( product, index ) => 
                    (<CartProduct 
                        product={product.Product}
                        id={product.id}
                        index={index} 
                    />)
                )}

                { cart.count !== cart.data.length && <Increment
                    onClick={() => {}}
                    disabled={cart.count === cart.data.length}
                >
                    <FaPlus size={22} />
                </Increment>}
            </ListProductContainer>
        </TemplateAccount>
    );
}

export default connector(AccountCart);
