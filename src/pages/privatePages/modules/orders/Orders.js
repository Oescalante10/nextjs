import React, { useContext, useEffect } from 'react';
import { Context } from '../../../../store/appContext';
import Page from '../../../../components/containers/page/Page';
import Loading from '../../../../components/loading/Loading';
import Tickets from './components/tickets/Tickets';

const Orders = () => {

    const { store, actions } = useContext(Context);
    const { orders } = store;

    useEffect(() => {
        actions.getOrdersByLocal()
    }, [actions])

    return (
        <Page
            title='Órdenes'
            back='/'
        >
            <Loading>
                <Tickets {...{ orders }} />
            </Loading>
        </Page>
    )
}

export default Orders;