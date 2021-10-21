
import { Link } from 'react-router-dom';
import { FaCartPlus, FaTrash } from 'react-icons/fa';

import connector, { Props } from './connector';

import { 
    BuyProduct, ProductContainer, ImageContainer, ProductImage, ProductName, 
    FavoriteProduct, FavoriteIcon
} from './styles';



function Product( { auth, index, favorite, cart, product, toggleFavorite, addProductInCart, removeProductInCart }: Props) {

    const onClickBuyButton = () => {
        const { id, Carts } = product;

        cart && Carts
            ? removeProductInCart(Carts.id, index)
            : addProductInCart( id, index )
    }


    return(
        <ProductContainer>
            {auth && <FavoriteProduct onClick={() => toggleFavorite( product.id, index )} >
                <FavoriteIcon favorite={favorite} />
            </FavoriteProduct>}

            <Link to={`/products/${product.id}`}>
                <ImageContainer>
                    <ProductImage src={product.image_src} />
                </ImageContainer>
            </Link>
            
            <ProductName>
                {product.name}
            </ProductName>
            <span>
                {new Intl.NumberFormat( 'pt-br' , { 
                    style: 'currency' ,
                    currency: 'BRL'
                }).format(product.price || 0)}
            </span>

            <BuyProduct onClick={onClickBuyButton} remove={cart} disabled={product.amount===0} >
                { !cart && <FaCartPlus style={{ marginRight: 8 }} />}
                { cart && <FaTrash style={{ marginRight: 8 }} /> }

                { cart 
                    ? 'Remover' 
                    : product.amount === 0 
                        ? 'Produto Indisponível'
                        : 'Adicionar' 
                }
            </BuyProduct>
        </ProductContainer>
    )
}

export default connector(Product);
