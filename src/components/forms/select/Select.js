import React from 'react';
import { StyledSelect, StyledDiv } from './style'

const Select = ({ elements, label, id, defaultValue, value, setValues, identifier }) => {
    return (
        <StyledDiv>
            <label htmlFor={id}>{label}</label>
            <StyledSelect
                value={defaultValue}
                onChange={e => setValues({
                    ...value,
                    [identifier]: parseInt(e.target.value)
                })}
            >
                {
                    elements.length > 0 &&
                    elements.map( element =>
                        <option key={element._id} value={element._id}>{element.name}</option>
                    )
                }
            </StyledSelect>
        </StyledDiv>
    )
}

export default Select;