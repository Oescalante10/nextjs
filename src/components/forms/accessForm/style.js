import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

export const StyledForm = styled.form`
    box-shadow: ${({ theme }) => theme.boxShadow.normal};
    border-radius: 10px;
    padding: 40px;
    width: 600px;
`

export const InputContainer = styled.div`
    width: 100%;
`
export const TitleContainer = styled.div`
    margin-top: 45px;
    text-align: center;
    & > h1{
        padding: 0;
        margin: 0;
        text-align: center;
        text-transform: uppercase;
        font-size: 30px;
    }
`