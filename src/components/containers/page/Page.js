import React, { useContext, useState } from 'react';
import { Context } from '../../../store/appContext';
import { StyledContainer, StyledHeader, StyledLink, FloatButton } from './style';
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

const Page = ({ children, title, back, subtitle = 'Volver', create = '', float = '' }) => {

    const { actions, store } = useContext(Context)
    const [button, setButton] = useState('hide')
    window.onscroll = function () { scroll() }

    const scroll = () => {
        let positionY = document.querySelector('html').scrollTop
        if (positionY > 200) {
            setButton('show')
        } else {
            setButton('hide')
        }
    }

    useEffect(() => {
        /* console.log(button) */
    }, [button])

    return (
        <StyledContainer>
            {
                create &&
                <FloatButton>
                    <Link to={create} onClick={() => actions.handlePage(create)}>+</Link>
                    <span className={button} onClick={() => window.scrollTo(0, 0)}>▴</span>
                </FloatButton>
            }
            {
                (float && !store.loading) &&
                <FloatButton>
                    <span>{float}</span>
                </FloatButton>
            }
            <StyledHeader>
                {
                    back &&
                    <StyledLink to={back} onClick={() => actions.handlePage(back)}>{subtitle}</StyledLink>
                }
                <h2>{title}</h2>
                <span></span>
            </StyledHeader>
            {children}
        </StyledContainer>
    )
}

export default Page
