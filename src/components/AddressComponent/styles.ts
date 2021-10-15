
import styled from 'styled-components';
import {Link} from 'react-router-dom';



export const AddressContainer = styled.article`
    position: relative;
    display: flex;
    flex-direction: column;

    padding: 16px 12px;
    height: max-content;

    background: #efefef;
    box-shadow: 2px 2px 4px #efefef,
                2px 2px 4px white inset;
`;

export const Text = styled.span``;

export const EditAddress = styled(Link)`
    position: absolute;
    bottom: 10px;
    right: 10px;

    color: #f13d4c;
    font-size: 14px;
    transition: color 200ms;

    &:hover {
        color: #067BF9;
    }
`;
