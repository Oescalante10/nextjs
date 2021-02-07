import React, { useContext, useEffect, useState } from 'react';
import { StyledCard, StyledHeader, StyledTableIcon, StyledTitle, StyledIconGroup, Divider } from './style';
import { formatDate } from '../../../../../../../helpers/formatDate';
import { Context } from '../../../../../../../store/appContext';
import { getLastOrderStatusList, formatOrderIdentifier } from '../../../../../../../helpers/formatOrders';
import TakeawayIcon from '../../../../../../../components/icons/TakeawayIcon';
import TableIcon from '../../../../../../../components/icons/TableIcon';
import BarIcon from '../../../../../../../components/icons/BarIcon';
import KitchenIcon from '../../../../../../../components/icons/KitchenIcon';

const Ticket = ({ order, order_status_list, order_product, href }) => {

    const { _id, created_at, table } = order;
    const { actions, store } = useContext(Context);
    const [times, setTimes] = useState(formatDate(created_at));
    const [productOrderTypeUnique, setProductOrderTypeUnique] = useState({})
    const [lastOrderStatusId, setLastOrderStatusId] = useState(null)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimes(formatDate(created_at))
        }, 60000);
        return () => {
            clearInterval(interval)
        }
    }, [created_at])

    const handleClick = () => {
        actions.handlePage(href)
        lastOrderStatusId === 1 && actions.postOrderStatus(3, _id)

    }

    useEffect(() => {

        const getLastOrderStatusId = () => {
            let index = order_status_list.length
            setLastOrderStatusId(order_status_list[index - 1].order_status_type._id)
        }

        const getProductOrderTypeUnique = () => {
            let uniqueTypeKitchenProduct = 0
            let uniqueTypeBarProduct = 0
            order_product.map(({ product }) => {
                product.preparation_area._id === 1 && uniqueTypeKitchenProduct++
                product.preparation_area._id === 2 && uniqueTypeBarProduct++
                return null;
            })
            setProductOrderTypeUnique({
                kitchen: uniqueTypeKitchenProduct,
                bar: uniqueTypeBarProduct
            })
        }
        getProductOrderTypeUnique()
        getLastOrderStatusId()
    }, [order_status_list, order_product])

    return (
        <StyledCard to={href} onClick={handleClick} laststatus={3} listorderstatus={getLastOrderStatusList(order_status_list)}>
            <StyledTitle>Comanda N° {formatOrderIdentifier(_id)}</StyledTitle>
            <StyledHeader>
                <span>
                    <div><strong>Creado:</strong> {times.created_at}</div>
                    <div><strong>Tiempo:</strong> {times.minutes}</div>
                </span>
                <StyledIconGroup>


                    <StyledTableIcon>
                        {
                            table._id === 1 ?
                                <TakeawayIcon color={lastOrderStatusId === 1 ? 'white' : store.success} size={20} />
                                :
                                <>
                                    <TableIcon color={lastOrderStatusId === 1 ? 'white' : store.success} size={20} />
                                    <span>{table.number}</span>
                                </>
                        }
                    </StyledTableIcon>

                    <Divider danger={lastOrderStatusId === 1 && true} />
                    {
                        productOrderTypeUnique.kitchen > 0 &&
                        <StyledTableIcon>
                            <BarIcon color={lastOrderStatusId === 1 ? 'white' : store.success} size={20} />
                        </StyledTableIcon>
                    }

                    {
                        productOrderTypeUnique.bar > 0 &&
                        <StyledTableIcon>
                            <KitchenIcon color={lastOrderStatusId === 1 ? 'white' : store.success} size={20} />
                        </StyledTableIcon>
                    }



                </StyledIconGroup>
            </StyledHeader>
        </StyledCard>
    )
}

export default Ticket;
