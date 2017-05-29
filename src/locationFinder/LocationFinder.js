import React from 'react'
import Location from './Location'

const LocationFinder = ({ locations, onLocationClick }) => (
  <ul>
    {locations.map((location, index) =>
      <Location
        key={index}
        {...locations[index]}
        onClick={() => onLocationClick(location)}
      />
    )}
  </ul>
)

export default LocationFinder
