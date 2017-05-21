import React from 'react'
import getIconClassName from '../app/weatherIcons'

const IconWeather = ({code}) => {
  const iconClassName = getIconClassName(code)
  return (
    <i className={iconClassName} />
  )
}

export default IconWeather
