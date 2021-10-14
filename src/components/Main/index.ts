
import styled from 'styled-components';



export const Main = styled.main<{ column?: boolean }>`
    display: flex;
    flex-direction: ${ ({ column }) => column ? 'column': 'row' };

    position: relative;
    max-width: 1200px;
    width: 100%;

    margin: 140px auto;
    background: white;
    padding: 20px;

    box-shadow: 4px 4px 8px #e4dcdc;
`;

export const Container = styled.section`
    margin-left: 24px;
    flex: 1;
`
