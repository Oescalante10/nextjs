import React, { useContext } from 'react';
import { Context } from '../../store/appContext';
import Owner from './users/Owner';
import Administrator from './users/Administrator';
import Waiter from './users/Waiter';
import Bartender from './users/Bartender';
import Kitchener from './users/Kitchener';
import Deliverer from './users/Deliverer';


const Dashboard = () => {
    const { store } = useContext(Context)

    return (
        <>
            {
                {
                    5: <Owner />,
                    6: <Administrator />,
                    7: <Waiter />,
                    8: <Kitchener />,
                    9: <Bartender />,
                    10: <Deliverer />
                }[store.currentUser.user.role._id]
            }
        </>
    )
}

export default Dashboard;