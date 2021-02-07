import styled from 'styled-components';

export const StyledButton = styled.button`
    background-color: white;
    border: 0;
    border-radius: 999px;
    box-shadow: ${({ theme }) => theme.boxShadow.normal};
    color: ${({ theme }) => theme.color.secondary};
    font-weight: bold;
    font-size: 30px;
    height: 60px; 
    outline: none;
    width: 100%;
    ${({ theme }) => theme.screen.desktop}{
        width: 255px;
    }
`