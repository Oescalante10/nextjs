
import React from 'react';
import { StyledContainer } from './style';

const TicketIcon = ({ noshadow = 'false', icon, text, color, background, onClick }) => {
    return (
        <StyledContainer
            noshadow={noshadow}
            color={color}
            background={background}
            onClick={onClick}
        >
            {(text && !icon) && text}
            {(text && icon) && <div>
                {icon}
                <span>{text}</span>
            </div>}
        </StyledContainer>
    )
}
export default TicketIcon;
