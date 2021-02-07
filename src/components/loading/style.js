import styled from 'styled-components';

export const StyledContainer = styled.div`
     width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    color:${({ theme }) => theme.color.secondary};
`
export const Spinner = styled.div`
    border-radius: 50%;
    border-left: 8px solid #f3f3f3;
    border-top: 8px solid ${({ theme }) => theme.color.danger};
    border-right: 8px solid ${({ theme }) => theme.color.success};
    border-bottom: 8px solid ${({ theme }) => theme.color.alert};
    width: 40px;
    height: 40px;
    -webkit-animation: spin 1s linear infinite;
    animation: spin 1s linear infinite;
    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    } 
`