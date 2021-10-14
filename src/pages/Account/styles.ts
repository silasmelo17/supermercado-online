
import styled from "styled-components";



export const Title = styled.h2`
    text-align: center;
`;

export const SubTitle = styled.h3`
    margin: 22px 16px;
`


export const FieldContainer = styled.article`
    padding: 12px 16px;
    border: 2px solid #efefef;

    & + & {
        border-top: 0;
    }
`;

export const FieldName = styled.strong`
    font-size: 18px;
`;

export const FieldValue = styled.span`
    font-size: 18px;
`;
