import styled from 'styled-components';

export const ButtonContainer = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    ${({ theme }) => theme.screen.desktop}{
        flex-direction: row;
        justify-content: center;
        & > *:last-child {
        margin-left: 15px;
        }
    }
`