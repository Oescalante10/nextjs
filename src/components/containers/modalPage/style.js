import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const StyledContainer = styled.div`
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    width: 100vw; 
    height: 100vh;
`

export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 100%;
    min-width: 260px;
    max-width: 500px;
    height: 50%;
    max-height: 500px;
    padding: 20px;
    box-shadow: 0px 7px 7px 4px rgba(0,0,0,.4);
    border-radius: 10px;
`
export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: white;
    margin-bottom: 10px;
        &>h2{
            margin: 0;
            color:${({ theme }) => theme.color.secondary};
        }
`
export const StyledBody = styled.div`
    width: 100%;
    min-height: 200px;
    overflow-y: auto;
    /* width */
    ::-webkit-scrollbar {
    width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.danger}; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #555; 
    }
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    font-weight: 900;
    font-size: 30px;
    color:${({ theme }) => theme.color.secondary};
    transition: 200ms ease;
    &:hover{
        color:${({ theme }) => theme.color.danger};
    }
`
