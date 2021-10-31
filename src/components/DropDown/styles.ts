
import styled from 'styled-components';



export const DropDownContainer = styled.section<{ visible?: boolean }>`
    display: ${(props) => props.visible ? 'flex': 'none' };
    flex-direction: column;
    min-width: 250px;

    opacity: ${ (props) => props.visible ?  1: 0 };

    transition: opacity 200ms;


    position: absolute;
    left: 50%;
    top: 100%;
    transform: translateX(-50%);

    padding: 16px 0;

    background: white;
    border: 1px solid #efefef;

    &:hover {
        display: flex;
        opacity: 1;
    }
`;

export const DropDownItem = styled.div`
    display: flex;
    justify-content: center;

    border-top: 1px solid #efefef;
    color: #333;
    font-size: 15px;

    padding: 8px 16px;
    transition: 100ms;

    &:last-child {
        border-bottom: 1px solid #efefef;
    }

    &:hover {
        color: blue;
    }
`;

export const Button = styled.button`
    color: #333;
    font-size: 15px;
    background: transparent;

    cursor: pointer;

    &:hover {
        color: blue;
    }
`

export const Text = styled.span`
    font-size: 16px;
    color: black;

    margin: 0 auto 16px auto;
`
