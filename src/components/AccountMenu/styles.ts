
import styled from 'styled-components';



export const AccountMenuContainer = styled.section<{ fixed: boolean}>`
    position: ${ ({ fixed }) => fixed ? 'fixed': 'relative' };
    top: ${ ({ fixed }) => fixed ? 76: 0 }px;

    width: 400px;
    background: white;

    margin-right: auto;
`;

export const AccountMenuItem = styled.div`
    padding: 16px 24px;
    border: 3px solid #eee;
    font-size: 18px;
    cursor: pointer;

    color: #444;

    & + & {
        border-top: 0;
    }

    &:hover {
        background: #067BF9;
        border-color: #067BF9;
        color: white;
    }
`
