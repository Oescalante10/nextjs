import React, { useContext, useEffect } from 'react';
import injectContext, { Context } from '../store/appContext';
import { BrowserRouter as Router } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';



const Routes = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.isAuthenticated()
    }, [actions])

    return (
        <Router>
            {
                JSON.stringify(store.currentUser) === '{}' ?
                    <PublicRoutes />
                    :
                    <PrivateRoutes />
            }
        </Router>
    )
}

export default injectContext(Routes);