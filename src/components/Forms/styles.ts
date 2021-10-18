
import styled from 'styled-components';

import InputMask from 'react-input-mask';



export const Form = styled.form`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 500px;
    margin: 140px auto;
    padding: 80px 60px;

    border-radius: 4px;
    box-shadow: 4px 4px 8px #e0e0e0;

    background: white;
`;

export const Container = styled.div`
    display: flex;
    display: row;
    margin: 10px 0;

    & > div + div {
        margin-left: 10px;
    }
`;

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
`;


export const Input = styled.input<{ success?: boolean }>`
    border: 1px solid #ccc;
    cursor: pointer;
    font-size: 18px;
    padding: 8px 12px;

    box-shadow: ${ ({ success }) => 
        success === undefined 
        ? '0 0 0 0'
        : success 
            ? '0 0 5px green'
            : '0 0 5px red'
    };

    &:focus {
        box-shadow: 0 0 5px #067BF9;
    }

    &:disabled {
        background: #efefef;
    }
`;

export const InputWithMask = styled(InputMask)<{ success?: boolean }>`
    border: 1px solid #ccc;
    cursor: pointer;
    font-size: 18px;
    padding: 8px 12px;

    box-shadow: ${ ({ success }) => 
        success === undefined 
        ? '0 0 0 0'
        : success 
            ? '0 0 5px green'
            : '0 0 5px red'
    };

    &:focus {
        box-shadow: 0 0 5px #067BF9;
    }

    &:disabled {
        background: #efefef;
    }
`;

export const Label = styled.label`
    margin: 0 0 8px 8px;
    font-size: 18px;
`;


const BaseButton = styled.button`
    flex: 1;
    color: #333;

    font-size: 18px;
    padding: 10px 18px;
    cursor: pointer;
    border-radius: 4px;
`;

export const Button = styled(BaseButton)`
    border: 2px solid #067BF9;
    background: transparent;
    color: #067BF9;
    font-weight: 600;
    letter-spacing: 1px;
`;

export const ButtonHighlight = styled(BaseButton)`
    background: ${ ({ disabled }) => disabled ? '#ccc': '#067BF9' };
    color: white;
`;
