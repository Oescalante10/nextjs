import React from 'react';
import { StyledContainer, StyledForm, InputContainer  } from './style';

const Form = ({ onSubmit, children }) => {

    const submit = e => {
        e.preventDefault()
        onSubmit()
    }

    return (
        <StyledContainer>
            <StyledForm onSubmit={submit}>
                <InputContainer>
                    {children}
                </InputContainer>
            </StyledForm>
        </StyledContainer>
    )
}

export default Form;
