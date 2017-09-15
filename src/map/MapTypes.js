import React from 'react'

const MapTypes = ({ types, onTypesClick }) => {
  return (
    <div >
      {types.map((type) =>
        <div onClick={(e) => onTypesClick(type.id)}
          key={type.id}
          >{type.title}</div>)}
    </div>
  )
}

export default MapTypes
