import React from 'react'

const RegionsSelect = ({ regions, onRegionsChange }) => {
  return (
    <select onChange={() => onRegionsChange()}>
      {regions.map((region) =>
        <option
          key={region.id}
          >{region.title}</option>)}
    </select>
  )
}
export default RegionsSelect
