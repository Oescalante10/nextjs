import React, { useContext } from 'react';
import { Context } from '../../../store/appContext';
import { StyledContainer, StyledHeader, StyledLink, StyledContent, StyledBody} from './style';

const Page = ({ children, title, back, history }) => {

    const { actions } = useContext(Context)
    const handleClick = (e) => {
        if (!document.getElementById('modal')?.contains(e.target)) {
            history.push(back)
            actions.handlePage(back)
        }
    }

    return (
        <StyledContainer onClick={handleClick}>
            <StyledContent id='modal'>
                <StyledHeader>

                    <h2>{title}</h2>
                    {
                        back &&
                        <StyledLink to={back} onClick={() => actions.handlePage(back)}>x</StyledLink>
                    }
                </StyledHeader>
                <StyledBody>
                    {children}
                </StyledBody>
            </StyledContent>
        </StyledContainer>
    )
}

export default Page
