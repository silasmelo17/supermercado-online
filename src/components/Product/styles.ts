
import { FaHeart } from 'react-icons/fa';

import styled from 'styled-components';



export const ProductContainer = styled.article`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 224px;
    height: 380px;
`;

export const ImageContainer = styled.figure`
    width: 224px;
    height: 224px;
    background: #efefef; 
`;

export const ProductImage = styled.img`
    width: 224px;
    height: 224px;
    background: white;
`;

export const ProductName = styled.span`
    text-align: center;
    margin: 8px;
`;

export const FavoriteProduct = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;

    font-size: 28px;
    color: #efefef;
    transition: color 200ms;
`;

export const FavoriteIcon = styled(FaHeart)<{ favorite?: boolean}>`
    color: ${ (props) => props.favorite ? 'red': '#efefef' };

    &:hover {
        color: red;
        cursor: pointer;
        transition: color 200ms;
    }
`;
