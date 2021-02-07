import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledCard = styled(Link)`
    display: flex;
    text-decoration: none;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 110px;
    margin: 0 10px 20px 10px;
    border-radius: 10px;
    padding: 10px;
    box-shadow: ${({ theme }) => theme.boxShadow.normal};
    background-color: ${({ laststatus, theme, listorderstatus }) => listorderstatus.includes(laststatus) ? 'white' : theme.color.danger};
    color: ${({ laststatus, theme, listorderstatus }) => listorderstatus.includes(laststatus) ? theme.color.secondary : 'white'};
    cursor: pointer;
    &:hover{
        box-shadow: ${({ theme }) => theme.boxShadow.inset};
    }
    
`
export const StyledHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > span { 
        margin: 5px 0;
        & > div {
            font-size: 12px;
        }
    }
`
export const StyledTitle = styled.span`
        font-size: 12px;
        margin-bottom: 5px;
`

export const StyledIconGroup = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 2px;
    align-items: center;
`

export const StyledTableIcon = styled.div`
    display: flex;
    align-items: center;
    & > svg {
        margin: 0 4px;
    }
    & > span {
        font-size: 12px;
        font-weight: 800;
    }
`

export const Divider = styled.div`
    width: 2px;
    height: 80%;
    background-color: ${({ danger, theme }) => danger ? 'white' : theme.color.secondary};
    margin: 0 5px 0 8px;
`
