import React, { useContext } from 'react';
import { StyledContainer, Divider, StyledSection, StyledSubSection, StyledInfo, StyledContainerEndOrder } from './style';
import TicketIconDraggable from '../ticketIconDraggable/TicketIconDraggable';
import KitchenIcon from '../../../../../../../components/icons/KitchenIcon';
import BarIcon from '../../../../../../../components/icons/BarIcon';
import TakeawayIcon from '../../../../../../../components/icons/TakeawayIcon';
import TableIcon from '../../../../../../../components/icons/TableIcon';
import TicketIcon from '../ticketIcon/TicketIcon';
import { Context } from '../../../../../../../store/appContext';

const Ticket = ({ order, order_product }) => {
    const { _id, user, table } = order;
    const { store, actions } = useContext(Context)

    const countOrderProducts = (filterStatusId, filterProductTypeId) => {
        const filtered = order_product.filter(({ order_product_status, product }) =>
            order_product_status._id === filterStatusId &&
            product.product_type._id === filterProductTypeId
        )
        return filtered.length
    }

    const checkOrderProductStatus = () => {
        const filtered = order_product.filter(({ order_product_status }) =>
            order_product_status._id === 3
        )
        return filtered.length === order_product.length ? true : false
    }


    return (
        checkOrderProductStatus() ?

            <StyledContainerEndOrder onClick={() => checkOrderProductStatus() && actions.postOrderStatus(4, order._id)}>
                <h2>Finalizar Orden</h2>
            </StyledContainerEndOrder>
            :
            <StyledContainer>


                <StyledSection>

                    <StyledSubSection>
                        <StyledInfo>

                            <span>
                                <span>
                                    {user.name}
                                </span>
                                <span>
                                    15:30
                            </span>
                            </span>

                            <div>
                                {table.number === 1 ?
                                    <TakeawayIcon color={store.danger} size={20} />
                                    :
                                    <TableIcon color={store.danger} size={20} />}
                                <span>
                                    {table.number === 1 ? ' ' : table.number}
                                </span>
                            </div>


                        </StyledInfo>
                    </StyledSubSection>

                    <StyledSubSection>
                        <div>
                            <TicketIcon
                                text={`x${countOrderProducts(1, 2)}`}
                                icon={<KitchenIcon color={store.secondary} size={15} />}
                                color='secondary'
                                noshadow={false}
                            />
                            <TicketIcon
                                text={`x${countOrderProducts(1, 1)}`}
                                icon={<BarIcon color={store.secondary} size={15} />}
                                color='secondary'
                                noshadow={false}
                            />
                        </div>
                        <span>
                            Preparando
                    </span>

                    </StyledSubSection>

                </StyledSection>


                <StyledSection>
                    <StyledSubSection>
                        <div>
                            <TicketIconDraggable
                                background={countOrderProducts(2, 2) === 0 ? '' : 'success'}
                                text={`x${countOrderProducts(2, 2)}`}
                                icon={<KitchenIcon color='white' size={15} />}
                                href={`/orden/${_id}/estado/${2}`}
                            />

                            <TicketIconDraggable
                                background={countOrderProducts(2, 1) === 0 ? '' : 'success'}
                                text={`x${countOrderProducts(2, 1)}`}
                                icon={<BarIcon color='white' size={15} />}
                                href={`/orden/${_id}/estado/${2}`}
                            />
                        </div>
                        <span>
                            Listos
                    </span>

                    </StyledSubSection>

                    <Divider />

                    <StyledSubSection>
                        <div>
                            <TicketIconDraggable
                                background={countOrderProducts(3, 2) === 0 ? '' : 'alert'}
                                text={`x${countOrderProducts(3, 2)}`}
                                icon={<KitchenIcon color='white' size={15} />}
                                href={`/orden/${_id}/estado/${3}`}
                            />

                            <TicketIconDraggable
                                background={countOrderProducts(3, 1) === 0 ? '' : 'alert'}
                                text={`x${countOrderProducts(3, 1)}`}
                                icon={<BarIcon color='white' size={15} />}
                                href={`/orden/${_id}/estado/${3}`}
                            />
                        </div>
                        <span>
                            Entregados
                    </span>
                    </StyledSubSection>

                </StyledSection>

            </StyledContainer>

    )
}

export default Ticket;