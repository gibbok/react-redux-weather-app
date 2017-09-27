// @flow
import * as React from 'react'
import {FlatButton, TextField} from 'material-ui'

/* eslint-disable no-undef */
type PropsType = {
  +onLocationChange: Function,
  +onLocationKeyPress: Function,
  +onSearchClick: Function,
  +inputValue: string
}
/* eslint-enable no-undef */

const LocationFinderSearch:React.StatelessFunctionalComponent<any> = ({ onLocationChange, onLocationKeyPress, onSearchClick, inputValue }:PropsType):React.Element<any> => (
  <div>
    <TextField onKeyPress={(e) => onLocationKeyPress(e)} hintText='Enter a location' onChange={(e) => onLocationChange(e)} />
    <FlatButton onClick={(e) => onSearchClick(e, inputValue)}>Search</FlatButton>
  </div>
)

export default LocationFinderSearch
