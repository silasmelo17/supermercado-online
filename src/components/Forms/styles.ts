
import styled from 'styled-components';

import InputMask from 'react-input-mask';



export const Form = styled.form`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 500px;
    margin: 80px auto;
    padding: 80px 60px;

    border-radius: 4px;
    box-shadow: 4px 4px 8px #e0e0e0;

    background: white;
`;

export const Container = styled.div`
    display: flex;

    & + & {
        margin-top: 20px;
    }
`;

export const ColumnContainer = styled(Container)`
    flex-direction: column;
`;


export const Input = styled.input<{ success?: boolean }>`
    border: 1px solid #ccc;
    cursor: pointer;
    font-size: 18px;
    padding: 8px 12px;

    box-shadow: ${ ({ success }) => 
        success === undefined 
        ? ''
        : success 
            ? '0 0 5px green'
            : '0 0 5px red'
    };

    &:focus {
        box-shadow: 0 0 5px #067BF9;
    }
`;

export const InputWithMask = styled(InputMask)<{ success?: boolean }>`
    border: 1px solid #ccc;
    cursor: pointer;
    font-size: 18px;
    padding: 8px 12px;

    box-shadow: ${ ({ success }) => 
        success === undefined 
        ? 'none'
        : success 
            ? '0 0 5px green'
            : '0 0 5px red'
    };

    &:focus {
        box-shadow: 0 0 5px #067BF9;
    }
`;

export const Label = styled.label`
    margin: 0 0 8px 8px;
    font-size: 18px;
`;

export const Button = styled.button`
    flex: 1;
    color: #333;

    font-size: 18px;
    padding: 10px 18px;
    cursor: pointer;
    border-radius: 4px;
`;

export const ButtonHighlight = styled(Button)`
    background: ${ ({ disabled }) => disabled ? '#ccc': '#067BF9' };
    color: white;
`;
