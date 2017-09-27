
// @flow
import * as React from 'react'
/* eslint-disable no-undef */
type PropsType = {
  +types: Array<{
    +id: string,
    +title: string,
    +isActive: boolean
  }>,
  +onTypesClick: Function
}
/* eslint-enable no-undef */

const MapTypes:React.StatelessFunctionalComponent<any> = ({ types, onTypesClick }:PropsType):React.Element<any> => {
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
