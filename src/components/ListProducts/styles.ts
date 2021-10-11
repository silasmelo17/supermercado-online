
import styled, { keyframes } from 'styled-components';

import { FaSpinner } from 'react-icons/fa';



export const ProductsContainer = styled.section`
    display: grid;
    grid-template-columns: repeat( 5, auto );

    grid-column-gap: 10px;
    grid-row-gap: 40px;
    margin-top: 40px;
`;


const SpinAnimation  = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const Loading = styled(FaSpinner)`
    animation-name: ${SpinAnimation};
    animation-duration: 1s;
    animation-iteration-count: infinite;

    margin: 40px auto;
    color: #0f0f0f;
`;
