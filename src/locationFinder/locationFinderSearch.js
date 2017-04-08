import React from 'react'

const LocationFinderSearch = ({ locations, onLocationSearchClick, onLocationInputChange }) => (
  <form>
    <input type='text' name='name' placeholder='Location' onChange={(e) => onLocationInputChange(e)}
    />
    <input type='submit' value='Search' onClick={(e) => onLocationSearchClick(e)}
    />
  </form>
)

export default LocationFinderSearch
