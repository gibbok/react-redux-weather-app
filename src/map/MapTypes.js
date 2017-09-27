
import React from 'react'
/* eslint-disable no-undef */
type PropsType = {
  +regions: Array<Object>,
  +onRegionsChange: Function
}
/* eslint-enable no-undef */

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
