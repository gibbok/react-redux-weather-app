// @flow
import * as React from 'react'
import {FlatButton} from 'material-ui'

/* eslint-disable no-undef */
type PropsType = {
  +onDetailsClick: Function,
}
/* eslint-enable no-undef */

const DetailsButton:React.StatelessFunctionalComponent<any> = ({ onDetailsClick }:PropsType):React.Element<any> => {
  return (
    <FlatButton onClick={(e) => onDetailsClick(e)}>Details</FlatButton>
  )
}

export default DetailsButton
