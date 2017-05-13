import React from 'react'

const LocationFinderSearch = ({ onLocationChange, onSearchClick, inputValue }) => (
  <form>
    <input type='text' placeholder='Location' onChange={(e) => onLocationChange(e)} />
    <input type='submit' value='Search' onClick={(e) => onSearchClick(e, inputValue)} />
  </form>
)

export default LocationFinderSearch
