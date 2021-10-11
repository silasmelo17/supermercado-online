
import styled from 'styled-components';



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

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;

    & + & {
        margin-top: 20px;
    }
`;

export const Input = styled.input`
    border: 1px solid #ccc;
    cursor: pointer;
    font-size: 18px;
    padding: 8px 12px;
`;

export const Label = styled.label`
    margin: 0 0 8px 8px;
    font-size: 18px;
`;


export const Button = styled.button`
    font-size: 18px;
    padding: 10px 18px;
    cursor: pointer;
`;


export const ButtonHighlight = styled(Button)`
    background: #067BF9;
    color: white;
`;
