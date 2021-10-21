
import { Link } from 'react-router-dom'

import styled from "styled-components";



export const Title = styled.h2`
    text-align: center;
`;

export const SubTitle = styled.h3`
    margin: 22px 16px;
`;

export const Paragraph = styled.p`
    & + & {
        margin-top: 8px;
    }
`;

export const ClickHere = styled(Link)`
    &:hover {
        color: #067BF9;
    }
`;
