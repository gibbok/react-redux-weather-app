import React from 'react'

const LocationFinderSearch = ({ locations, onLocationClick }) => (
  <form>
    <input type='text' name='name' placeholder='Location' />
    <input type='submit' value='Search' onClick={() => onLocationSearchClick()}
    />
  </form>
)

export default LocationFinderSearch
