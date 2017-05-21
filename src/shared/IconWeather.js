import React from 'react'
import getIconClassName from '../app/weatherIcons'

const IconWeather = ({iconCode}) => {
  const iconClassName = getIconClassName(iconCode)
  return (
    <i className={iconClassName} />
  )
}

export default IconWeather
