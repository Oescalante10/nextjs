import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    &> h1{
        margin-top: 20px;
        color:${({ theme }) => theme.color.secondary};
        text-align: center;
    }
`
export const StyledModules = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

