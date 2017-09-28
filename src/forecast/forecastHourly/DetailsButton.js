// @flow
import * as React from 'react'
import {Button} from 'material-ui'

/* eslint-disable no-undef */
type PropsType = {
  +onDetailsClick: Function,
}
/* eslint-enable no-undef */

const DetailsButton:React.StatelessFunctionalComponent<any> = ({ onDetailsClick }:PropsType):React.Element<any> => {
  return (
    <Button onClick={(e) => onDetailsClick(e)}>Details</Button>
  )
}

export default DetailsButton
