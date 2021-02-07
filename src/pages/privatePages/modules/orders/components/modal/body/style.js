import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 100%;
    margin-bottom: 15px;
    display: ${({ checked }) => checked ? 'flex' : 'none'};
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
    cursor: pointer;
    &>svg{
        width: 30px;
        margin-right: 10px;
    }
`