
import styled from "styled-components";



export const ListProductContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 28px;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
`

export const ProductContainer = styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;

    border: 2px solid #efefef;

    & + & {
        border-top: 0;
    }
`;

export const ProductImage = styled.img`
    width: 70px;
    height: 70px;
`

export const ProductName = styled.span`
    margin-left: 12px;
`

export const Remove = styled.button`
    padding: 8px 16px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1px;
    background: transparent;
    color: #ccc;

    &:hover {
        color: #067BF9;
        transition: 200ms;
    }
`;

export const IncrementFavorites = styled.button`
    border-radius: 50%;
    background: #067BF9;
    color: white;
    width: 40px;
    height: 40px;

    cursor: pointer;

    margin: 20px auto 0 auto;

    &:disabled {
        background: #ccc;
    }
`
