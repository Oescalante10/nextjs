import React, { useState } from 'react';
import { StyledDiv, StyledSelect, StyledTags, StyledTag } from './style';

const SelectTag = ({ elements = [], id, label, value, setValues }) => {

    const [selections, setSelections] = useState([])

    const onChange = e => {
        const element = JSON.parse(e.target.value)
        const found = selections.find(selection => selection._id === element._id);
        !found && setValues([...value, element._id])
        !found && setSelections([...selections, element])
    }

    const deleteSelection = index => {
        const clone = [...selections]
        const cloneValue = [...value]
        cloneValue.splice(index, 1)
        clone.splice(index, 1)
        setSelections(clone)
        setValues(cloneValue)
    }

    return (
        <StyledDiv>
            <label htmlFor={id}>
                <span>{label}</span>
            </label>
            <StyledSelect value={value[0]} onChange={onChange} id={id}>
                <option value='No select'>Opciones</option>
                {
                    elements.length > 0 &&
                    elements.map(element =>
                        <option key={element._id} value={JSON.stringify(element)}>{element.name}</option>
                    )
                }
            </StyledSelect>
            <StyledTags>
                {
                    selections.length > 0 &&
                    selections.map((selection, i) =>
                        <StyledTag key={selection._id} onClick={() => deleteSelection(i)}>
                            {selection.name}
                        </StyledTag>
                    )
                }
            </StyledTags>
        </StyledDiv>
    )
}

export default SelectTag;
