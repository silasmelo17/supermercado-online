
import styled from 'styled-components';



export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;

    background: #f13d4c;
    color: white;
    height: 60px;
    padding: 0 20px;
`;

export const HeaderNavigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

export const HeaderTitle = styled.h1`

`;

export const SearchProductContainer = styled.form`
    position: relative;
    display: flex;
    width: 350px;
    border-bottom: 1px solid white;
    padding: 6px 12px;

    & {
        cursor: pointer;
    }
`

export const SearchProduct = styled.input`
    flex: 1;
    background: transparent;
    color: white;
    cursor: pointer;
    border: 0;
    padding: 0;

    &::placeholder {
        color: white;
    }
`

export const ListIcons = styled.ul`
    display: flex;
    font-size: 20px;
`;

export const IconContainer = styled.li`
    position: relative;
    display: flex ;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    & + & {
        margin-left: 16px;
    }
`;


export const Username = styled.span`
    font-size: 12px;
    margin-left: 8px;
`


export const DropDown = styled.span`
    
`