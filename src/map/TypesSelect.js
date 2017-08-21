import React from 'react'

const TypesSelect = ({ types, onTypesChange }) => {
  return (
    <select onChange={(e) => onTypesChange(e.target.value)}>
      {types.map((type) =>
        <option
          value={type.id}
          key={type.id}
          >{type.title}</option>)}
    </select>
  )
}
export default TypesSelect
