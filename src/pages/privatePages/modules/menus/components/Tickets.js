import React from 'react';
import { StyledContainer, StyledModules } from './style';
import Ticket from './ticket/Ticket';

const Tickets = ({ menus=[]}) => {
    return (
        <StyledContainer>
            <StyledModules>
                {
                    menus.length > 0 &&
                    menus.map( ({_id,name}) =>
                        <Ticket
                            key={`modules${_id}`}
                            text={name}
                            edit_href={`/menu/${_id}`}
                            products_href={`/menu/${_id}/${name.replace(/\s+/g, '-').toLowerCase()}/productos`}
                            photo='https://static.vix.com/es/sites/default/files/styles/1x1/public/imj/elgranchef/R/Recetas-que-rinden-mas-de-una-comida-10.jpg'
                        />
                    )
                }
            </StyledModules>
        </StyledContainer>
    )
}

export default Tickets;
