import styled from 'styled-components';

export const StyledCard = styled.div`
    align-items: center;
    box-shadow: ${({ theme }) => theme.boxShadow.normal};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    height: auto;
    margin: 0 10px 20px 10px;
    padding: 20px; 
    width: 150px;
        & > img{
            margin-top: 20px;
            width: 100px;
            height: 100px;
            border-radius: 10px;
            box-shadow: ${({ theme }) => theme.boxShadow.small};
        }
        & > span{
            color: ${({ theme }) => theme.color.secondary};
            font-size: 16px;
            margin: 20px;
            min-height: 38px;
            text-align: center;
            text-transform: capitalize;
            transform: scale(1);
            transition: 200ms ease;
        }
    
`
export const StyledOptions = styled.div`
    display: flex; 
    font-size: 25px;
    justify-content: space-around;
    width: 100%;
    & > * {
        align-items: center;
        background-color: white;
        box-shadow: ${({ theme }) => theme.boxShadow.small};
        border-radius: 10px;
        color: ${({ theme }) => theme.color.secondary};
        display: flex;
        height: 40px;
        justify-content: center;
        text-decoration: none;
        transition: 150ms ease;
        padding: 5px;
        width: 40px;
        &:active{
            box-shadow: ${({ theme }) => theme.boxShadow.inset};
        }
    } 
`