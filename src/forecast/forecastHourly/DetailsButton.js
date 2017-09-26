// @flow
import * as React from 'react'

/* eslint-disable no-undef */
type PropsType = {
  onDetailsClick: Function,
}

/* eslint-enable no-undef */

const DetailsButton:React.StatelessFunctionalComponent<any> = ({ onDetailsClick }:PropsType):React.Element<any> => {
  return (
    <button type='button' onClick={(e) => onDetailsClick(e)}>Details</button>
  )
}

export default DetailsButton
