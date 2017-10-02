// @flow
import * as React from 'react'
import { Input, withStyles, Icon, IconButton } from 'material-ui'

/* eslint-disable no-undef */
type PropsType = {
  +onLocationChange: Function,
  +onLocationKeyDown: Function,
  +onSearchClick: Function,
  +inputValue: string,
  +classes: Object
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
      <IconButton color='inherit' aria-label='Search'>
        <Icon onClick={(e) => onSearchClick(e, inputValue)}>search</Icon>
      </IconButton>
    </div>
  )
}

export default withStyles(styles)(LocationFinderSearch)
