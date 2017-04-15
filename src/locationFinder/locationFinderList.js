import React from 'react'
import Location from './Location'

const LocationFinderList = ({ locations, onLocationClick }) => (
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

// const LocationFinderList = ({ locations, onLocationClick }) => (
//    <ul>
//        {locations.map(location =>
//            <Location
//                key={location.id}
//                {...location}
//                onClick={() => onLocationClick(location.id)}
//            />
//        )}
//    </ul>
// );

export default LocationFinderList
