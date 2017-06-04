import React from 'react'

const IconWind = ({degree}) => {
  const degreeAdjusted = -90 + degree
  const style = {
    display: 'inline-block',
    transform: `rotate(${degreeAdjusted}deg)`
  }
  return (
    <span style={style}>&#10148;</span>
  )
}

export default IconWind
