import React from 'react'

const LocationFinderSearch = ({ onLocationChange, onSearchClick, inputValue }) => (
  <form>
    <input id='locationFinderSearch__inputLocation' type='text' placeholder='Location' onChange={(e) => onLocationChange(e)} />
    <input id='locationFinderSearch__inputSearch' type='submit' value='Search' onClick={(e) => onSearchClick(e, inputValue)} />
  </form>
)

export default LocationFinderSearch
