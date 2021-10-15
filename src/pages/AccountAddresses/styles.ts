
import styled from 'styled-components';

import {Link} from 'react-router-dom';



export const Container = styled.section`
    flex: 1;
    display: flex;

    margin-left: 24px;
`;

export const ListAddresses = styled.section`
    display: grid;
    grid-template-columns: repeat( 2, 1fr);
    grid-gap: 8px;
`;
