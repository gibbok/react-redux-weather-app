import React from 'react'

const SummaryButton = ({ onSummaryClick }) => {
  return (
    <button type='button' onClick={(e) => onSummaryClick(e)}>Summary</button>
  )
}

export default SummaryButton
