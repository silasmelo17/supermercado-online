
import styled from 'styled-components';



export const SuggestionContainer = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;

    display: flex;
    flex-direction: column;

    width: 100%;
    min-width: 400px;
    background: white;
    border: 1px solid #efefef;
    z-index: 10;
`;

export const Suggestion = styled.li`
    display: flex;
    align-items: center;
    padding: 8px 16px;

    &:hover {
        background: '#067BF9';
        color: white;
    }
`;

export const SuggestionImage = styled.img`
    width: 50px;
    height: 50px;
`;

export const SuggestionName = styled.span`
    margin-left: 8px;
    color: black;
`;

