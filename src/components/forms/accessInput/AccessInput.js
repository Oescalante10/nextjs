import React from 'react';
import { StyledDiv } from './style'

const Form = ({ id, label, name, type='text', onChange }) => {
    return (
        <StyledDiv>
            <label htmlFor={id}>
                <span>{label}</span>
            </label>
            <input onChange={onChange} name={name} type={type} id={id} />
        </StyledDiv>
    )
}

export default Form;
