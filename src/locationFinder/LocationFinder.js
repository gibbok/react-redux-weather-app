import React from 'react'
import Location from './Location'

const LocationFinder = ({ locations, onLocationClick }) => {
  let hasLocations = locations.length > 0
  return (hasLocations ? (
    <ul>
      {locations.map((location, index) =>
        <Location
          key={index}
          {...locations[index]}
          onLocationClick={() => onLocationClick(location)}
      />
    )}
    </ul>
    ) : null)
}
export default LocationFinder
