import React, { useContext } from 'react';
import { Context } from '../../../store/appContext';
import LogoQieroApp from '../../icons/LogoQieroApp'
import { StyledContainer, StyledForm, TitleContainer, InputContainer  } from './style';


const Form = ({ onSubmit, children }) => {

    const { store } = useContext(Context)

    const submit = e => {
        e.preventDefault()
        onSubmit()
    }

    return (
        <StyledContainer>
            <StyledForm onSubmit={submit}>
                <TitleContainer>
                    <LogoQieroApp color={store.danger} size={120}/>
                </TitleContainer>
                <InputContainer>
                    {children}
                </InputContainer>
            </StyledForm>
        </StyledContainer>
    )
}

export default Form;
