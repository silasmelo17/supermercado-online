
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

export const ForgetPassoword = styled(Link)`
    margin-left: auto;
`

