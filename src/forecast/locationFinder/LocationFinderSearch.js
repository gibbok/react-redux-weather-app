// @flow
import * as React from 'react'
import {FlatButton, TextField} from 'material-ui'

/* eslint-disable no-undef */
type PropsType = {
  +onLocationChange: Function,
  +onSearchClick: Function,
  +inputValue: string
}
/* eslint-enable no-undef */

const LocationFinderSearch:React.StatelessFunctionalComponent<any> = ({ onLocationChange, onSearchClick, inputValue }:PropsType):React.Element<any> => (
  <div>
    <TextField hintText='Enter a location' onChange={(e) => onLocationChange(e)} />
    <FlatButton onClick={(e) => onSearchClick(e, inputValue)}>Search</FlatButton>
  </div>
)

export default LocationFinderSearch
