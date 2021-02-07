import React, { useContext } from 'react';
import { Context } from '../../../../../../store/appContext';
import { StyledItem } from './style'

const Module = ({ href, logo, text }) => {

    const { actions } = useContext(Context)

    return (
        <StyledItem to={href} onClick={() => actions.handlePage(href)}>
            <div>
                {logo}
            </div>
            <span>{text}</span>
        </StyledItem>
    )
}

export default Module;
