// @flow
import * as React from 'react'
import {Button} from 'material-ui'

/* eslint-disable no-undef */
type PropsType = {
  +onSummaryClick: Function
}
/* eslint-enable no-undef */

const SummaryButton:React.StatelessFunctionalComponent<any> = ({ onSummaryClick }:PropsType):React.Element<any> => {
  return (
    <Button onClick={(e) => onSummaryClick(e)}>Summary</Button>
  )
}

export default SummaryButton
