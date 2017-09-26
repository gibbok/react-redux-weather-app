// @flow
import * as React from 'react'

/* eslint-disable no-undef */
type PropsType = {
  +onSummaryClick: Function
}
/* eslint-enable no-undef */

const SummaryButton:React.StatelessFunctionalComponent<any> = ({ onSummaryClick }:PropsType):React.Element<any> => {
  return (
    <button type='button' onClick={(e) => onSummaryClick(e)}>Summary</button>
  )
}

export default SummaryButton
