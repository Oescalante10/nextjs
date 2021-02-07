import React from 'react';
import MenuIcon from '../../../components/icons/MenuIcon';
import OrderIcon from '../../../components/icons/OrderIcon';
import TableIcon from '../../../components/icons/TableIcon';
import KitchenIcon from '../../../components/icons/KitchenIcon';
import BarIcon from '../../../components/icons/BarIcon';
import Modules from './components/modules/Modules';


const Owner = () => {

    const modules = [
        { text: 'Órdenes', href: '/ordenes', logo: <OrderIcon color="white" size={60}/> },
        { text: 'Cocina', href: '/cocina', logo: <KitchenIcon color="white" size={60}/> },
        { text: 'Bar', href: '/bar', logo: <BarIcon color="white" size={60}/> },
        { text: 'Mesas', href: '/mesas', logo: <TableIcon color="white" size={60}/>},
        { text: 'Menús', href: '/menus', logo: <MenuIcon color="white" size={60}/> }
    ]

    return (
        <Modules {...{ modules }} />
    )
}

export default Owner;
