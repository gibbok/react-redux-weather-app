import React from 'react'

const MapRegions = ({ regions, onRegionsChange }) => {
  const options = regions.map((region) =>
    <option
      value={region.id}
      key={region.id}
    >{region.title}
    </option>
  )
  return (
    <select onChange={(e) => onRegionsChange(e.target.value)}>
      {options}
    </select>
  )
}

export default MapRegions
