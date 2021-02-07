import React from 'react';
import Ticket from './ticket/Ticket';
import { StyledContainer } from './style';

const Tickets = ({ orders }) => {

    const ordersFiltered = () => {
        return orders.filter(order =>
            order.order_status_list.filter(({ order_status_type }) => order_status_type._id > 3).length === 0
        )
    }

    return (
        <StyledContainer>
            {
                ordersFiltered().length > 0 &&
                ordersFiltered().map(({ order, order_product }) => {
                    return <Ticket
                        key={`orders${order._id}`}
                        {...{ order, order_product }}
                    />
                })
            }
        </StyledContainer>
    )
}

export default Tickets;
