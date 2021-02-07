import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    
`
export const StyledHeader = styled.div`
    margin: 20px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    & > h2{
        margin: 0;
        color:${({ theme }) => theme.color.secondary};
        text-align: left;
        font-size: calc(2vw + 15px );
    } 
        
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: calc(1vw + 10px );
    color:${({ theme }) => theme.color.secondary};
`

export const StyledAdd = styled(Link)`
    color:${({ theme }) => theme.color.secondary};
    font-size: 70px;
    font-weight: 1000; 
    margin-right: 50px;
    text-decoration: none;
    transition: 200ms ease;
    &:active, &:hover{
        color:${({ theme }) => theme.color.success};
    }
`
export const FloatButton = styled.div`
    position: fixed;
    z-index:100;
    bottom: 40px;
    right: 40px;
    background-color: ${({ theme }) => theme.color.success};
    box-shadow: ${({ theme }) => theme.boxShadow.small};
    border-radius: 10px;
    display: flex;
    & > * {
        text-align: center;
        align-items: center;
        color: white;
        display: flex;
        height: 50px;
        justify-content: center;
        text-decoration: none;
        transition: 150ms ease;
        padding: 5px;
        width: 50px;
        font-size: 40px;
        font-weight: 900; 
        cursor: pointer;
        &:active{
            box-shadow: ${({ theme }) => theme.boxShadow.inset};
        }
    }

`
