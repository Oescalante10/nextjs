import styled from 'styled-components';

export const StyledContainer = styled.div`
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
    user-select: none;
    background-color: ${({ theme, background }) => background === 'alert' ? theme.color.alert : background === 'success' ? theme.color.success : 'white'};
    & > div{
        display: flex;
        flex-direction: ${({ noshadow }) => noshadow==='true' ? 'row' : 'column'};
        justify-content: center;
        align-items: center;
        user-select: none;
    }
    & > div > img{
        width: ${({ noshadow }) => noshadow==='true' ? '40px' : '25px'};
        color: white;
        user-select: none;
    }
    & > div > span{
        text-align: center;
        font-weight: bold;
        font-size: 12px;
        margin-left: ${({ noshadow }) => noshadow==='true' ? '5px' : '0'};
        color: ${({ theme, color }) => color === 'danger' ? theme.color.danger : color === 'secondary' ? theme.color.secondary : 'white'};
        user-select: none;
    }
`