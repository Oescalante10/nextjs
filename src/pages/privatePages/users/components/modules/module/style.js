import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledItem = styled(Link)`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    text-align: center;
    margin: 70px 30px 30px 30px;
    transition: 200ms ease;
    text-decoration: none;
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.danger};
    position: relative;
    height: 120px;
    width: 220px;
    border-radius: 30px;
    box-shadow: ${({ theme }) => theme.boxShadow.normal};
    &:hover{
        & > span{
        font-weight:bold;
        color: white;
        & > div > img{
                transform: scale(1.1);
            }
        }
    } 
    & > div{
        border-radius: 50%;
        position: absolute;
        top: -70px;
        left: 23%;
        background-color:  ${({ theme }) => theme.color.danger};
        width: 120px;
        height: 120px;
        display:flex;
        align-items: center;
        justify-content: center;
        box-shadow: ${({ theme }) => theme.boxShadow.normal};
       
        &>svg{
            align-self: center;
        }
    }
    &>span{
        font-weight:bold;
        color: white;
        z-index: 10;
        padding-bottom: 30px;
        transition: 200ms ease;
        text-align: center;
        width: 100%;
    }
`