// @flow
import * as React from 'react'
import {Button, Input} from 'material-ui'
import { withStyles } from 'material-ui'

/* eslint-disable no-undef */
type PropsType = {
  +onLocationChange: Function,
  +onLocationKeyDown: Function,
  +onSearchClick: Function,
  +inputValue: string
}
/* eslint-enable no-undef */

const styles = theme => {
  return ({
    input: {
      color: '#ffffff'
    }
  })
}

const LocationFinderSearch:React.StatelessFunctionalComponent<any> = ({ onLocationChange, onLocationKeyDown, onSearchClick, inputValue, classes }:PropsType):React.Element<any> => {
  return (
    <div>
      <Input
        classes={classes}
        onKeyDown={(e) => onLocationKeyDown(e)}
        placeholder='Enter a location'
        onChange={(e) => onLocationChange(e)}
    />
      <Button color='contrast' onClick={(e) => onSearchClick(e, inputValue)}>Search</Button>
    </div>
  )
}

export default withStyles(styles)(LocationFinderSearch)
