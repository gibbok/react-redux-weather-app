import React from 'react'

const LocationFinderSearch = ({ locations, onLocationSearchClick }) => (
  <form>
    <input type='text' name='name' placeholder='Location' />
    <input type='submit' value='Search' onClick={(e) => onLocationSearchClick(e)}
    />
  </form>
)

export default LocationFinderSearch
