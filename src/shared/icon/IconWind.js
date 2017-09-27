// @flow
import * as React from 'react'

/* eslint-disable no-undef */
type PropsType = {
  +degree: number,
}
/* eslint-enable no-undef */

const IconWind:React.StatelessFunctionalComponent<PropsType> = ({degree}:PropsType):React.Element<any> => {
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
