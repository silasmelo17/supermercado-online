
import React from 'react';
import { FaHeart } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import TypeProduct from '../../types/TypeProduct';

import { 
    BuyProduct, ProductContainer, ImageContainer, ProductImage, ProductName, 
    FavoriteProduct, FavoriteIcon 
} from './style';



function Product( { id, nome, preco, image_src }: TypeProduct) {
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
                {nome}
            </ProductName>
            <span>
                {new Intl.NumberFormat( 'pt-br' , { 
                    style: 'currency' ,
                    currency: 'BRL'
                }).format(preco)}
            </span>

            <BuyProduct>Adicionar</BuyProduct>
        </ProductContainer>
    )
}

export default Product;
