
import { FaUser } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import styled from "styled-components";



export const UserIconContainer = styled.div`
    background: lightgray;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 0 auto 60px auto;
`;

export const UserIcon = styled(FaUser)`
    color: #efefef;
`;

export const RightText = styled.span`
    margin: 4px 0 4px auto;
`

export const RightLink = styled(Link)`
    margin: 4px 0 4px auto;

    &:hover {
        color: #067BF9;
    }
`

