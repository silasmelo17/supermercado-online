
import styled from 'styled-components';

import { Link } from 'react-router-dom';



interface PaginationItemType  {
    active: boolean
}

export const PaginationContainer = styled.ul`
    display: flex;
    justify-content: center;
    margin: 80px 0 30px 0;
`;

export const PaginationItem = styled.li<PaginationItemType>`
    background: ${ (props) => props.active ? '#067BF9': '#efefef' } ;
    color: ${ (props) => props.active ? 'white': 'black' };
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1px;

    &:first-child, &:last-child {
        padding: 0 16px;
    }

    & + & {
        margin-left: 10px;
    }
`;

export const PaginationLink = styled(Link)`
    display: block;

    min-width: 35px;
    height: 35px;
    line-height: 35px; 
    text-align: center;

    &:disabled {
        pointer-events: none;
        cursor: default;
    }
`;
