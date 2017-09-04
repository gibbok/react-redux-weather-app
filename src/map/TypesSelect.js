import React from 'react'

const TypesSelect = ({ types, onTypesChange }) => {
  return (
    <div >
      {types.map((type) =>
        <div onClick={(e) => onTypesChange(type.id)}
          key={type.id}
          >{type.title}</div>)}
    </div>
  )
}

export default TypesSelect
