import styled from 'styled-components';

export const StyledContainer = styled.div`
        width: 45px;
        height: 45px;
        background-color: ${({theme})=> theme.color.danger};
        border-radius: 50%;
        display: flex;
        justify-content: center;
        position:relative;
        transition: 200ms ease;
        cursor: pointer;
        &:hover{
            & , & > span {
                background-color: ${({theme})=> theme.color.alert};
            }
        }
        & > div{
            align-self: center;
            width: 35px;
            height: 35px;
            background-color: white;
            border-radius: 50%; 
        }
        & > span{
            position:absolute;
            top: -10px;
            width: 6px;
            height: 30px;
            border-radius: 4px;
            background-color: ${({theme})=> theme.color.danger};
            border: 8px solid white;
            transition: 200ms ease;
        }
`

