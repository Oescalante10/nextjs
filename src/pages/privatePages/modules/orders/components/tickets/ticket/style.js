
import styled from 'styled-components';

export const StyledContainer = styled.div`
    box-shadow: ${({ theme }) => theme.boxShadow.normal};
    margin: 0 8px 20px 8px;
    border-radius: 10px;
    width: 250px;
    padding: 4px;
`

export const StyledContainerEndOrder = styled.div`
    box-shadow: ${({ theme }) => theme.boxShadow.normal};
    margin: 0 8px 20px 8px;
    border-radius: 10px;
    width: 250px;
    padding: 4px;
    background-color: ${({ theme }) => theme.color.success};
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
    transition: 200ms ease;
    &>h2{
        text-align:center; 
    }
    &:hover{
        box-shadow: ${({ theme }) => theme.boxShadow.inset};
    }
`

export const Divider = styled.div`
    height: 60px;
    width: 5px;
    background-color: rgba(0,0,0,0.1);
    border-radius: 4px;
`
export const StyledSection = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`
export const StyledSubSection = styled.div`
    display: flex;
    flex-direction: column;
    &>div{
        display: flex;
    }
    &>span{
        font-size: 12px;
        color: ${({ theme }) => theme.color.secondary};
        text-align: center;
        margin: 3px 0;
    }
`
export const StyledInfo = styled.div`
    display: flex;
    align-items: center;
    margin: 6px;
    width: 100%;
    & > span {
        display: flex;
        flex-direction: column;
        color: ${({ theme }) => theme.color.secondary};
        & > span:first-child {
            font-weight: 600;
            font-size: 15px;
            width: 90px;
            height: auto;
            text-align: end; 
        }
        & > span:last-child {
            font-size: 10px;
            text-align: end;   
        }  
    }
    & > div {
        font-size: 10px;
        text-align: center;
        display: flex;
        flex-direction: column;
        margin-left: 8px;
        & > span {
            color: ${({ theme }) => theme.color.danger};
            font-size: 15px;
            font-weight: 600;       
        }     
    }  
`
