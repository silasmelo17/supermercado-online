
import { Link } from 'react-router-dom';

import connector, { Props } from './connector';

import {
    ProductContainer, ImageContainer, ProductImage, ProductName,
    FavoriteProduct, FavoriteIcon
} from './styles';
import BuyProductButton from '../BuyButton';



function Product({ auth, index, favorite, cart, product, toggleFavorite, addProductInCart, removeProductInCart }: Props) {

    const onClickBuyButton = () => {
        const { id, Carts } = product;

        cart && Carts
            ? removeProductInCart(Carts.id, index)
            : addProductInCart(id, index)
    }


    return (
        <ProductContainer>
            {auth && <FavoriteProduct onClick={() => toggleFavorite(product.id, index)} >
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
                {new Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(product.price || 0)}
            </span>

            <BuyProductButton
                onClick={onClickBuyButton}
                cart={cart}
                product={product}
            />
        </ProductContainer>
    )
}

export default connector(Product);
