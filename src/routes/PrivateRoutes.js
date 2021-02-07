import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import Dashboard from '../pages/privatePages/Dashboard';
/* 
import Orders from '../pages/privatePages/modules/orders/Orders';
import OrderForm from '../pages/privatePages/modules/orders/OrderForm';
import Kitchen from '../pages/privatePages/modules/kitchen/Kitchen'; 
import KitchenForm from '../pages/privatePages/modules/kitchen/KitchenForm';
*/
import Products from '../pages/privatePages/modules/products/Products';
import Menus from '../pages/privatePages/modules/menus/Menus';
import Tables from '../pages/privatePages/modules/Tables';
import Bar from '../pages/privatePages/modules/bar/Bar';
import Navbar from '../components/navbars/navbar/Navbar';
import MenuForm from '../pages/privatePages/modules/menus/MenuForm';
import ProductForm from '../pages/privatePages/modules/products/ProductForm';
import BarModal from '../pages/privatePages/modules/bar/BarModal';
import Kitchen from '../pages/privatePages/modules/kitchen/Kitchen';
import KitchenModal from '../pages/privatePages/modules/kitchen/KitchenModal';
import Orders from '../pages/privatePages/modules/orders/Orders';
import OrderModal from '../pages/privatePages/modules/orders/OrderModal';

const PrivateRoutes = () => {
    const history = useHistory()
    const { actions, store } = useContext(Context);

    useEffect(() => {
        actions.isPage()
        history.push(store.page)
    }, [actions, store.page, history])

    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Dashboard} />

                <Route exact path="/ordenes" component={Orders} />
                <Route exact path="/orden/:id/estado/:status" component={OrderModal} />

                <Route exact path="/cocina" component={Kitchen} />
                <Route exact path="/cocina/orden/:id" component={KitchenModal} />

                <Route exact path="/bar" component={Bar} />
                <Route exact path="/bar/order/:id" component={BarModal} />

                <Route exact path="/menu/:id/:name/productos" component={Products} />
                <Route exact path="/menu/:menu_id/:menu_name/producto/:id?" component={ProductForm} />

                <Route exact path="/menus" component={Menus} />
                <Route exact path="/menu/:id?" component={MenuForm} />
                
                <Route exact path="/mesas" component={Tables} />
                <Redirect to="/" />
            </Switch>
        </>
    )
}

export default PrivateRoutes;
