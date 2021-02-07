import React from 'react';
import { StyledContainer } from './style'

const ButtonPower = ({ onClick }) => {
    return (
        <StyledContainer onClick={onClick}>
            <div></div>
            <span></span>
        </StyledContainer>
    )
}
export default ButtonPower;