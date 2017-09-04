import React from 'react'

const RegionsSelect = ({ regions, onRegionsChange }) => {
  return (
    <select onChange={(e) => onRegionsChange(e.target.value)}>
      {regions.map((region) =>
        <option
          value={region.id}
          key={region.id}
        >{region.title}</option>)}
    </select>
  )
}

export default RegionsSelect
