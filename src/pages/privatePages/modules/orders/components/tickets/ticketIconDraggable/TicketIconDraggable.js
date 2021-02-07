import React from 'react';
import { StyledContainer } from './style';

const TicketIconDraggable = ({ noshadow = 'false', color, background, text, icon, href }) => {

    return (
        <StyledContainer
            noshadow={noshadow}
            color={color}
            background={background}
            to={href}
        >
            {(text && !icon) && text}
            {(text && icon) && <div>
                {icon}
                <span>{text}</span>
            </div>}
        </StyledContainer>
    )
}

export default TicketIconDraggable;

