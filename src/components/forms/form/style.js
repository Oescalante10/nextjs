import styled from 'styled-components'

export const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
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