// @flow
import * as React from 'react'

/* eslint-disable no-undef */
type PropsType = {
  +onLocationChange: Function,
  +onSearchClick: Function,
  +inputValue: string
}
/* eslint-enable no-undef */

const LocationFinderSearch:React.StatelessFunctionalComponent<any> = ({ onLocationChange, onSearchClick, inputValue }:PropsType):React.Element<any> => (
  <form>
    <input type='text' placeholder='Location' onChange={(e) => onLocationChange(e)} />
    <input type='submit' value='Search' onClick={(e) => onSearchClick(e, inputValue)} />
  </form>
)

export default LocationFinderSearch
