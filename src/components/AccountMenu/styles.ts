
import styled from 'styled-components';



export const AccountMenuContainer = styled.section`
    position: relative;

    width: 400px;
    background: white;

    margin-right: auto;
`;

export const AccountMenuItem = styled.div<{ selected: boolean}>`
    padding: 16px 24px;
    font-size: 18px;
    cursor: pointer;

    color: ${ ({selected}) => selected ? 'white': '#444' };
    background: ${ ({selected}) => selected ? '#067BF9': 'white' };
    border: 3px solid ${ ({selected}) => selected ? '#067BF9': '#eee' };


    & + & {
        border-top: 0;
    }

    &:hover {
        background: #067BF9;
        border-color: #067BF9;
        color: white;
    }
`
