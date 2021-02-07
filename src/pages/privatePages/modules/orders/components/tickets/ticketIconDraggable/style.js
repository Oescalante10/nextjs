
import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const StyledContainer = styled(Link)`
    height: 46px;
    width: 45px;
    box-shadow: ${({ noshadow }) => noshadow==='true' ? 'none' : 'inset 0 0 8px rgba(0,0,0,0.14), 0 4px 4px 3px rgba(0,0,0,.14)'};
    margin: 5px;
    border-radius: 30px;
    font-size: 12px;
    color: ${({ theme, color }) => color === 'white' ? 'white' : theme.color.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    background-color: ${({ theme, background }) => background === 'alert' ? theme.color.alert : background === 'success' ? theme.color.success : 'white'};
    & > div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        user-select: none;
        text-align: center;
    }
    & > div > svg{
        user-select: none;
        align-self: center;
    }
    & > div > span{
        text-align: center;
        font-weight: bold;
        color: ${({ theme, color }) => color === 'danger' ? theme.color.danger : color === 'secondary' ? theme.color.secondary : 'white'};
        user-select: none;
    }
`
