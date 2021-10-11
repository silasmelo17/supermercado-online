
import { Link } from 'react-router-dom';

import TypeProduct from '../../types/Product';

import { 
    BuyProduct, ProductContainer, ImageContainer, ProductImage, ProductName, 
    FavoriteProduct, FavoriteIcon 
} from './style';



function Product( { id, name, price, image_src }: TypeProduct) {
    return(
        <ProductContainer>
            <FavoriteProduct>
                <FavoriteIcon />
            </FavoriteProduct>

            <Link to={`/products/${id}`}>
                <ImageContainer>
                    <ProductImage src={image_src} />
                </ImageContainer>
            </Link>
            
            <ProductName>
                {name}
            </ProductName>
            <span>
                {new Intl.NumberFormat( 'pt-br' , { 
                    style: 'currency' ,
                    currency: 'BRL'
                }).format(price || 0)}
            </span>

            <BuyProduct>Adicionar</BuyProduct>
        </ProductContainer>
    )
}

export default Product;
