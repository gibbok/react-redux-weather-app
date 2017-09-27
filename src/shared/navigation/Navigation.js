// @flow
import * as React from 'react'
import { NavLink } from 'react-router-dom'

/* eslint-disable no-undef */
type PropsType = {
  +onClick: Function,
  +id: number,
  +title:string,
  +tooltip:string,
  +url:string
}
/* eslint-enable no-undef */

const Navigation:React.StatelessFunctionalComponent<any> = ({ onClick, id, title, tooltip, url }:PropsType):React.Element<any> => (
  <div onClick={onClick} alt={tooltip}>
    <NavLink
      to={url}
      exact
      activeStyle={{
        fontWeight: 'bold',
        color: 'red'
      }}
    >{title}</NavLink >
  </div >
)

export default Navigation
