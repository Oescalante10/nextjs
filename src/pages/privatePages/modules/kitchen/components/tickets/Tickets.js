import React from 'react';
import { StyledContainer, StyledTickets } from './style';
import Ticket from './ticket/Ticket';

const Tickets = ({ orders = [] }) => {

    return (
        <>
            <StyledContainer>
                <StyledTickets>
                    {
                        orders.length > 0 &&
                        orders.map(({ order, order_product, order_status_list }) => (
                            <Ticket
                                key={`cardOrders${order._id}`}
                                href={`/cocina/orden/${order._id}`}
                                {...{
                                    order,
                                    order_status_list,
                                    order_product
                                }}
                            />
                        ))
                    }
                </StyledTickets>
            </StyledContainer>
        </>
    )
}

export default Tickets;
