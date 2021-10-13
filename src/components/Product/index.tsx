
import axios from '../../config/axios.config';
import { AxiosError, AxiosResponse } from 'axios';

import { Link } from 'react-router-dom';

import connector, { Props } from './connector';

import { 
    BuyProduct, ProductContainer, ImageContainer, ProductImage, ProductName, 
    FavoriteProduct, FavoriteIcon
} from './styles';



function Product( { token, index, id, name, price, image_src, favorite, updateProduct }: Props) {
    
    const onClickFavoritedProduct = async () => {
        const result: AxiosResponse<any> = await axios.post<any, any>( `/favorites/product/${id}`, {}, { headers: {token}} )
            .catch( (err: AxiosError) => {} );

        if(result.status === 201 ) {
            updateProduct( index, { id, favorite: true });
        } else if( result.status === 200 ) {
            updateProduct( index, { id, favorite: false });
        }
    }

    return(
        <ProductContainer>
            <FavoriteProduct onClick={onClickFavoritedProduct} >
                <FavoriteIcon favorite={favorite} />
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

export default connector(Product);
