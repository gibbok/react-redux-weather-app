// @flow
import * as React from 'react'
import {FlatButton} from 'material-ui'

/* eslint-disable no-undef */
type PropsType = {
  +onSummaryClick: Function
}
/* eslint-enable no-undef */

const SummaryButton:React.StatelessFunctionalComponent<any> = ({ onSummaryClick }:PropsType):React.Element<any> => {
  return (
    <FlatButton onClick={(e) => onSummaryClick(e)}>Summary</FlatButton>
  )
}

export default SummaryButton
