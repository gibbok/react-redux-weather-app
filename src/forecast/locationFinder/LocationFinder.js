import * as React from 'react'
import Location from './Location'

const LocationFinder = ({ locations, onLocationClick }) => {
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
