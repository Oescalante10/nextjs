import React, { useEffect } from 'react';
import { StyledDiv, StyledInputContainer } from './style';

const SelectInputNumber = ({ elements, id, label, value, setValues }) => {

    const defaultValue = 1;
    const controlValues = (e, index) => {
        const number = parseInt(e.target.value)
        const clone = [...value]
        clone[index] = number
        setValues(clone)

    }

    useEffect(() => {
        setValues(Array(elements.length).fill(defaultValue))
        /* eslint-disable-next-line */
    }, [elements.length])

    return (
        <StyledDiv>
            <label htmlFor={id}>
                <span>{label}</span>
            </label>
            {
                elements.length > 0 &&
                elements.map((element, index) =>
                    <StyledInputContainer key={element._id}>
                        <label htmlFor={`product${element._id}`}>{element.name}s: {value[index]}</label>
                        <input
                            id={`product${element._id}`}
                            type="range"
                            name={`product${element._id}`}
                            defaultValue={defaultValue}
                            onChange={e => controlValues(e, index)}
                            min={defaultValue}
                            max="9"
                        />
                    </StyledInputContainer>
                )
            }
        </StyledDiv>
    )
}

export default SelectInputNumber
