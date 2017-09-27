// @flow
import * as React from 'react'
import Location from './Location'

/* eslint-disable no-undef */
type PropsType = {
  +locations: Array<Object>,
  +onLocationClick: Function
}
/* eslint-enable no-undef */

const LocationFinder:React.StatelessFunctionalComponent<any> = ({ locations, onLocationClick }:PropsType) => {
  const locationItems = locations.map((location, index) =>
    <Location
      key={index}
      {...locations[index]}
      onLocationClick={() => onLocationClick(location)}
      />
      )
  const locationList = locations.length > 0 ? <ul>{locationItems}</ul> : null
  return (locationList)
}

export default LocationFinder
