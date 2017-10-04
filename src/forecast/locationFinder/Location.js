// @flow
import * as React from 'react'
import { withStyles, MenuItem } from 'material-ui'
/* eslint-disable no-undef */
type PropsType = {
  +onLocationClick: Function,
  +id: number,
  +name: string,
  +country:string
}
/* eslint-enable no-undef */

const styles = theme => {
  const spaceUnit = theme.spacing.unit
  return ({
    root: {
    }
  })
}

const Location:React.StatelessFunctionalComponent<any> = ({ onLocationClick, id, name, country }:PropsType):React.Element<any> => (
  <MenuItem onClick={onLocationClick}>{name}, {country}</MenuItem>
)

export default withStyles(styles)(Location)
