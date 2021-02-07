import React, { useContext } from 'react';
import { Context } from '../../../../../../../store/appContext';
import KitchenIcon from '../../../../../../../components/icons/KitchenIcon';
import BarIcon from '../../../../../../../components/icons/BarIcon';
import { StyledContainer, StyledAggreagates, StyledProduct } from './style';

const Body = ({ 
    product,
    aggregates,
    putOrderProductStatus,
    order_product_id,
    order_product_status,
    status
}) => {
    const { product_type } = product;
    const { store } = useContext(Context)

    return (
        <StyledContainer
            checked={order_product_status._id === parseInt(status) ? true : false}
            onClick={() => putOrderProductStatus(order_product_id, parseInt(status))}>
            <StyledProduct>
                {
                    product_type._id === 1 &&
                    <BarIcon color={store.danger} size={20}/>
                }
                {
                    product_type._id === 2 &&
                    <KitchenIcon color={store.danger} size={20}/>
                }
                {product.name}
            </StyledProduct>
            <div>
                {
                    aggregates.length > 0 &&
                    aggregates.map(({ name, _id }) =>
                        <StyledAggreagates key={`aggregates${_id}`}>
                            {name}
                        </StyledAggreagates>
                    )
                }
            </div>
        </StyledContainer>
    )
}

export default Body;
