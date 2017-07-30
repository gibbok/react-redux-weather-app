import React from 'react'

const TypesSelect = ({ types, onTypesChange }) => {
  debugger
  return (
    <select onChange={() => onTypesChange()}>
      {types.map((type) =>
        <option
          key={type.id}
          >{type.title}</option>)}
    </select>
  )
}
export default TypesSelect
