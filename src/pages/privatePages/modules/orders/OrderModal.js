import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../../../store/appContext';
import ModalPage from '../../../../components/containers/modalPage/ModalPage';
import Loading from '../../../../components/loading/Loading';
import Header from './components/modal/header/Header';
import Body from './components/modal/body/Body';
import { formatDate } from '../../../../helpers/formatDate';

const OrderModal = ({ match, history }) => {

    const { store, actions } = useContext(Context)
    const { path } = store;
    const { id, status } = match.params

    const [order, setOrder] = useState({})
    const [orderProducts, setOrderProducts] = useState([])

    const putOrderProductStatus = async (id, status) => {
        let switchStatus = status === 3 ? 2 : 3
        const res = await fetch(`${path}/order-product/${id}`, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({
                order_product_status_id: switchStatus,
            })
        })
        const data = await res.json()
        if (data.error) {
            alert(data.error)
        } else {
            console.log(data)
            getOrder()
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
            back='/ordenes'
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
                            key={`orderOrdersCard${order_product_id}`}
                            {...{
                                product,
                                aggregates,
                                order_product_id,
                                order_product_status,
                                putOrderProductStatus,
                                status
                            }}
                        />
                    )
                }
            </Loading>
        </ModalPage>
    )
}

export default OrderModal;
