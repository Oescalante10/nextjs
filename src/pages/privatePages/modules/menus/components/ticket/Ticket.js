import React, { useContext } from 'react';
import { Context } from '../../../../../../store/appContext';
import { StyledCard, StyledOptions } from './style';
import ProductIcon from '../../../../../../components/icons/ProductIcon';
import { Link } from 'react-router-dom';

const Ticket = ({ products_href, photo, text, edit_href }) => {
    const { actions, store } = useContext(Context)

    return (
        <StyledCard>
            <img src={photo} alt={text} />
            <span>{text}</span>

            <StyledOptions>
                <Link to={edit_href} onClick={() => actions.handlePage(edit_href)}>✎</Link>
                <Link to={products_href} onClick={() => actions.handlePage(products_href)}>
                    <ProductIcon color={store.secondary} size={30}/>
                </Link>
            </StyledOptions>
        </StyledCard>
    )
}

export default Ticket;
