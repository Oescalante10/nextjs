import React, { useContext } from 'react'
import { Context } from '../../store/appContext';
import { StyledContainer, Spinner } from './style';

const Loading = ({ children }) => {
    const { store: { loading } } = useContext(Context);
    return (
        <>
            {
                loading ? (
                    <StyledContainer>
                        <Spinner />
                    </StyledContainer>
                ) : (
                        <>
                            {children}
                        </>
                    )
            }
        </>
    )
}

export default Loading;
