import React, { useContext, useEffect } from 'react';
import { Context } from '../../../../store/appContext';
import Page from '../../../../components/containers/page/Page';
import Loading from '../../../../components/loading/Loading';
import { filterOrdersByOrderProductStatusByProductType } from '../../../../helpers/filterOrders';
import Tickets from './components/tickets/Tickets';

const Kitchen = () => {

    const { store, actions } = useContext(Context);
    const { orders } = store;
    const filteredOrders = filterOrdersByOrderProductStatusByProductType(orders, 3)

    useEffect(() => {
        actions.getOrdersByLocal()
    }, [actions])

    return (
        <Page
            title='Cocina'
            back='/'
            float={filteredOrders.length || ''}
        >
            <Loading>
                <Tickets
                    orders={filteredOrders}
                />
            </Loading>
        </Page>
    )
}

export default Kitchen;
