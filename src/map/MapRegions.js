// @flow
import * as React from 'react'

/* eslint-disable no-undef */
type PropsType = {
  +regions: Array<{
    +id: string,
    +title:string,
    +isActive:boolean
  }>,
  +onRegionsChange: Function
}
/* eslint-enable no-undef */

const MapRegions:React.StatelessFunctionalComponent<any> = ({ regions, onRegionsChange }:PropsType):React.Element<any> => {
  const options = regions.map((region) =>
    <option
      value={region.id}
      key={region.id}
    >{region.title}
    </option>
  )
  return (
    <select onChange={(e) => onRegionsChange(e.target.value)}>
      {options}
    </select>
  )
}

export default MapRegions
