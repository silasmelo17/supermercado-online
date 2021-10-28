
import styled from "styled-components";

import { Link } from 'react-router-dom';



export const MenuContainer = styled.nav`
    position: absolute;
    right: 0;
    top: 60px;

    display: flex;
    flex-direction: column;
    
    background: white;

    max-width: 500px;
    width: 100%;
    height: calc( 100vh - 60px );

    border-left: 1px solid #efefef;
    box-shadow: -2px 0 8px #efefef;
`;

export const DropDown = styled.section`
    color: black;

    &:first-child {
        margin-top: 18px;
    }

    &:last-child {
        margin-bottom: 18px;
    }
`;

export const DropDownTitle = styled.h4`
    background: #067BF9;
    color: white;
    padding: 8px 16px;
    font-size: 18px;
`

export const DropDownItem = styled.article`
    border: 1px solid #efefef;
    padding: 8px 16px;
    margin: 0 12px;
`;

export const DropDownMenuLink = styled(Link)`
    width: 100%;
    font-size: 16px;
`;
