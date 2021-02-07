import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StyledNav } from './style';
import LogoQieroApp from '../../icons/LogoQieroApp';
import { Context } from '../../../store/appContext';
import ButtonPower from '../../buttons/buttonPower/ButtonPower';


const Navbar = () => {
    const { actions, store } = useContext(Context);

    return (
        <StyledNav>
            <Link to='/' onClick={() => actions.handlePage('/modulos')}>
                <LogoQieroApp color={store.danger} size={60}/>
            </Link>
            <ButtonPower onClick={() => actions.logout()} />
        </StyledNav>
    )
}

export default Navbar;
