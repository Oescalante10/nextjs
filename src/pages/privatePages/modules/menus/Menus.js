import React, { useContext, useEffect } from 'react';
import { Context } from '../../../../store/appContext';
import Page from '../../../../components/containers/page/Page';
import Loading from '../../../../components/loading/Loading';
import Tickets from './components/Tickets';

const Menus = () => {
    const { actions, store } = useContext(Context);
    const { menus } = store

    useEffect(() => {
        actions.getMenuByLocal()
    }, [actions])

    return (
        <Page 
            title='Menús'
            create='/menu'
            back='/' 
        >
            <Loading>
                <Tickets {...{ menus }} />
            </Loading>
        </Page>
    )
}

export default Menus;
