import React, { useContext, useEffect } from 'react';
import { Context } from '../../../../store/appContext';
import Page from '../../../../components/containers/page/Page';
import Loading from '../../../../components/loading/Loading';
import { filterOrdersByOrderProductStatusByProductType } from '../../../../helpers/filterOrders';
import Tickets from './components/tickets/Tickets';

const Bar = () => {

    const { store, actions } = useContext(Context);
    const { orders } = store;
    const filteredOrders = filterOrdersByOrderProductStatusByProductType(orders, 2)

    useEffect(() => {
        actions.getOrdersByLocal()
    }, [actions])

    return (
        <Page
            title='Bar'
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

export default Bar;