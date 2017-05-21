import React from 'react'

const DetailsButton = ({ onDetailsClick }) => {
  return (
    <button type='button' onClick={(e) => onDetailsClick(e)}>Details</button>
  )
}

export default DetailsButton
