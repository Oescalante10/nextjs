import styled from 'styled-components'

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    & > label {
        color: ${({ theme }) => theme.color.secondary};
        font-weight: bold;
        margin-bottom: 10px;
        font-size: 20px;
    }
`
export const StyledSelect = styled.select`
    border: none;
    outline: none;
    color: ${({ theme }) => theme.color.secondary};
    height: 25px;
    border-bottom: 2px solid ${({ theme }) => theme.color.secondary};
    font-size: 15px;
    margin-bottom: 5px;
    & > option {
        border: none;
    }
`
export const StyledTags = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export const StyledTag = styled.div`
    box-shadow: ${({ theme }) => theme.boxShadow.small};
    border-radius: 10px;
    color: ${({ theme }) => theme.color.secondary};
    display: flex;
    justify-content: center;
    padding: 5px 15px;
    margin: 5px 3px 0 5px;
    font-size: 15px;
    cursor: pointer;
`