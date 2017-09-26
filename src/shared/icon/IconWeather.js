import * as React from 'react'
import getIconClassName from '../../app/weatherIcons'

const IconWeather = ({code}:PropsType) => {
  if (code === undefined) {
    return null
  }
  const iconClassName = getIconClassName(code)
  return (
    <i className={iconClassName} />
  )
}

export default IconWeather
