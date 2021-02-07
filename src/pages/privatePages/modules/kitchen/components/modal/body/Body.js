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
    productTypeComparator 
}) => {
    const { product_type } = product;
    const { store } = useContext(Context)

    return (
        <StyledContainer
            visible={order_product_status._id}
            onClick={() => product_type._id === productTypeComparator &&
                putOrderProductStatus(order_product_id, order_product_status._id)
            }>

            <StyledProduct checked={order_product_status._id}>
                {
                    product_type._id === 1 &&
                    <BarIcon size={20} color={store.danger}/>
                }
                {
                    product_type._id === 2 &&
                    <KitchenIcon size={20} color={store.danger}/>
                }
                {product.name}
            </StyledProduct>
            
            <div>
                {
                    aggregates.length > 0 &&
                    aggregates.map(({ name, _id }) =>
                        <StyledAggreagates key={`modalAggregates${_id}`}>
                            {name}
                        </StyledAggreagates>
                    )
                }
            </div>
        </StyledContainer>
    )
}

export default Body;
