import styled from 'styled-components'

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    & > label {
        color: ${({ theme }) => theme.color.secondary};
        font-weight: bold;
        font-size: 20px;
    }
`
export const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0 0 10px;
    & > label {
        color: ${({ theme }) => theme.color.secondary};
        font-size: 16px;
        font-weight: bold;
    }
    & > input {
        color: ${({ theme }) => theme.color.secondary};
        border: none;
        border-bottom: 2px solid ${({ theme }) => theme.color.secondary};
        height: 25px;
        margin-left: 10px;
        outline: none;
    }

`
