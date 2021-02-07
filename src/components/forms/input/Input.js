import React from 'react';
import { StyledDiv } from './style'

const Form = ({ id, label, type='text', onChange, value }) => {
    return (
        <StyledDiv>
            <label htmlFor={id}>{label}</label>
            <input onChange={onChange} value={value} type={type} id={id} />
        </StyledDiv>
    )
}

export default Form;
