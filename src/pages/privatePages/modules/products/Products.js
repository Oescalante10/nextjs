import React, { useEffect, useContext } from 'react';
import { Context } from '../../../../store/appContext';
import Page from '../../../../components/containers/page/Page';
import Loading from '../../../../components/loading/Loading';
import Tickets from './components/Tickets';

const Products = ({ match }) => {
    const { id, name } = match.params
    const { actions, store } = useContext(Context);
    const { products } = store

    useEffect(() => {
        actions.getProductByMenu(id);
    }, [actions, id])

    return (
        <Page 
            title={`${name.charAt(0).toUpperCase()+name.slice(1).replace('-',' ')}`} 
            back='/menus' 
            create={`/menu/${id}/${name}/producto`}>
            <Loading>
                <Tickets {...{ products, id, name }} />
            </Loading>
        </Page>
    )
}

export default Products;
