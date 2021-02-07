import React, { useContext, useEffect, useState } from 'react';
import Loading from '../../../../components/loading/Loading';
import ModalPage from '../../../../components/containers/modalPage/ModalPage';
import { Context } from '../../../../store/appContext';
import Body from './components/modal/body/Body';
import Header from './components/modal/header/Header';
import { formatDate } from '../../../../helpers/formatDate';
import { forceRealTime } from '../../../../helpers/realTime';

const BarModal = ({ history, match }) => {

    const { id } = match.params
    const { store, actions } = useContext(Context);
    const { path } = store;
    
    const [order, setOrder] = useState({})
    const [orderProducts, setOrderProducts] = useState([])


    const putOrderProductStatus = async (id, currentStatus) => {
        let status = currentStatus === 2 ? 1 : 2
        const res = await fetch(`${path}/order-product/${id}`, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({
                order_product_status_id: status,
            })
        })
        const data = await res.json()
        if (data.error) {
            alert(data.error)
        } else {
            getOrder()
            forceRealTime('orders', 'z0IviwnsHcHjS5CxfZsZ', { order_status: `${id}${currentStatus}` })
        }
    }

    const getOrder = async () => {
        actions.controlLoading(true)
        const res = await fetch(`${path}/order/${id}/client`, {
            method: 'GET',
            headers: {
                'content-Type': 'application/json'
            }
        })
        const data = await res.json()
        if (data.error) {

        } else {
            setOrder(data.order)
            setOrderProducts(data.order_product)
            actions.controlLoading(false)
        }
    }

    useEffect(() => {
        id && getOrder()
        /* eslint-disable-next-line */
    }, [id])

    return (
        <ModalPage
            title={`Comanda`}
            back='/bar'
            history={history}
        >
            <Loading>
                {JSON.stringify(order) !== '{}' &&
                    < Header
                        time={formatDate(order.created_at)}
                        table={order.table}
                    />
                }
                {
                    orderProducts.length > 0 &&
                    orderProducts.map(({
                        product,
                        aggregates,
                        order_product_id,
                        order_product_status
                    }) =>
                        <Body
                            key={`orderCardKitchen${order_product_id}`}
                            productTypeComparator={1} //type of product to modify in this section
                            {...{
                                product,
                                aggregates,
                                order_product_id,
                                order_product_status,
                                putOrderProductStatus
                            }}
                        />
                    )
                }
            </Loading>
        </ModalPage>
    )
}

export default BarModal;
