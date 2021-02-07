import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 100%;
    margin-bottom: 15px;
    display: ${({ visible }) => visible < 3 ? 'flex' : 'none'};
    flex-direction: column;
    
`
export const StyledAggreagates = styled.div`
    margin-left: 45px;
    font-size: 13px;
    
`
export const StyledProduct = styled.div`
    display: flex;
    align-items: center;  
    padding-bottom: 5px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${({ theme, checked }) => checked === 2 ? theme.color.alert : 'white'};
    &>svg{
        width: 30px;
        margin-right: 10px;
    }
`