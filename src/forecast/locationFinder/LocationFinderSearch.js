// @flow
import * as React from 'react'
import {Button, Input} from 'material-ui'

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
    <Input onKeyPress={(e) => onLocationKeyPress(e)} placeholder='Enter a location' onChange={(e) => onLocationChange(e)} />
    <Button onClick={(e) => onSearchClick(e, inputValue)}>Search</Button>
  </div>
)

export default LocationFinderSearch
