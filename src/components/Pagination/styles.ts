
import styled from 'styled-components';



interface PaginationItemType  {
    active: boolean
}

export const PaginationContainer = styled.section`
    display: flex;
    justify-content: center;
    margin: 80px 0 30px 0;
`;

export const PaginationButton = styled.button<PaginationItemType>`
    background: ${ (props) => props.active ? '#067BF9': '#efefef' } ;
    color: ${ (props) => props.active ? 'white': 'black' };
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1px;

    height: 35px;
    width: 35px;
    line-height: 35px;

    &:first-child, &:last-child {
        width: auto;
        padding: 0 16px;
    }

    & + & {
        margin-left: 10px;
    }

    &:disabled {
        pointer-events: none;
        cursor: default;
    }
`;
