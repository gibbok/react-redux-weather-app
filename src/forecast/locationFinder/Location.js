// @flow
import * as React from 'react'

/* eslint-disable no-undef */
type PropsType = {
  onLocationClick: Function,
  id: number,
  name: string,
  country:string
}
/* eslint-enable no-undef */

const Location:React.StatelessFunctionalComponent<any> = ({ onLocationClick, id, name, country }:PropsType):React.Element<any> => (
  <li>
    <a onClick={onLocationClick}>{name}, {country}</a>
  </li>
)

export default Location
