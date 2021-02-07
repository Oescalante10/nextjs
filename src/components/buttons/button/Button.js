import React from 'react';
import { StyledButton } from './style'

const Button = ({ onClick, text, color }) => (
    <StyledButton onClick={onClick}>{text}</StyledButton>
)

export default Button;
