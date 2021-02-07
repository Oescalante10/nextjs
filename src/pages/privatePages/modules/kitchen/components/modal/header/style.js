import styled from 'styled-components';

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 100%;
    margin-bottom: 20px;
    padding: 10px 0; 
`
export const StyledHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > span {
        font-size: 12px;
    }

`
export const StyledTitle = styled.span`
        font-size: 12px;
        margin-bottom: 5px;
`


export const StyledTableIcon = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
    & > img {
        width: 30px;
    }
    & > span {
        font-size: 12px;
    }
`
