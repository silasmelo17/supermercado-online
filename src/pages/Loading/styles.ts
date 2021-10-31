
import { FaSpinner } from 'react-icons/fa';
import styled, {keyframes} from "styled-components";



const spinnerLoading = keyframes`
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
`;

const AnimationLetter = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-100px);
    }
    100% {
        transform: translateY(0);
    }
`

export const LoadingContainer = styled.section`
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: #f13d4c;

    z-index: 9999;
`

export const Spinner = styled(FaSpinner)`
    color: white;
    font-size: 48px;

    animation-name: ${spinnerLoading};
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-play-state: running;
    animation-timing-function: linear;
`

interface LetterAnimation {
    baseDelay: number,
    delay: number
    count: number,
    duraction: number
}

export const Letter = styled.span<LetterAnimation>`
    font-size: 60px;
    color: white;

    animation-name: ${AnimationLetter};
    animation-duration: ${ props => props.duraction }ms;
    animation-delay: ${(props) => props.delay * props.baseDelay }ms;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-play-state: running;

`

Letter.defaultProps = {
    baseDelay: 200
}
