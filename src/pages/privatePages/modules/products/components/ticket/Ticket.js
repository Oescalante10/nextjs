import React, { useContext } from 'react';
import { Context } from '../../../../../../store/appContext';
import { StyledCard, StyledOptions } from './style';
import { Link } from 'react-router-dom';

const Ticket = ({ href, photo, text }) => {
    const { actions } = useContext(Context)
    return (
        <StyledCard>
            <img src={photo} alt={text} />
            <span>{text}</span>

            <StyledOptions>
                <Link to={href} onClick={() => actions.handlePage(href)}>✎</Link>
            </StyledOptions>
        </StyledCard>
    )
}

export default Ticket;
