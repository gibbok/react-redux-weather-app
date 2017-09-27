
// @flow
import * as React from 'react'
import getIconClassName from '../../app/weatherIcons'

/* eslint-disable no-undef */
type PropsType = {
  +code?: number,
}
/* eslint-enable no-undef */

const IconWeather:React.StatelessFunctionalComponent<any> = ({code}:PropsType) => {
  if (code === undefined) {
    return null
  }
  const iconClassName = getIconClassName(code)
  return (
    <i className={iconClassName} />
  )
}

export default IconWeather
