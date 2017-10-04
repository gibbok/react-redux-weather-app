// @flow
import * as React from 'react'
import Location from './Location'
import { withStyles, Menu } from 'material-ui'

/* eslint-disable no-undef */
type PropsType = {
  +locations: Array<Object>,
  +onLocationClick: Function,
  +isFinderOpen: boolean,
  +classes: Object
}
/* eslint-enable no-undef */

const styles = theme => {
  return ({
    root: {
    }
  })
}

const LocationFinder:React.StatelessFunctionalComponent<any> = ({ locations, onLocationClick, isFinderOpen, classes }:PropsType) => {
  const locationItems = locations.map((loc, index) =>
    <Location
      key={index}
      {...locations[index]}
      onLocationClick={() => onLocationClick(loc)}
      />
      )
  const locationList = locations.length > 0 ? <ul>{locationItems}</ul> : null
  const canOpen = locations.length > 0
  return (
    <Menu open={canOpen}>
      {locationList}
    </Menu>
    // <Menu open={isFinderOpen}>
    //   {locationList}
    // </Menu>
  )
}

export default withStyles(styles)(LocationFinder)

// const LocationFinder:React.StatelessFunctionalComponent<any> = ({ locations, onLocationClick }:PropsType) => {
//   const locationItems = locations.map((location, index) =>
//     <Location
//       key={index}
//       {...locations[index]}
//       onLocationClick={() => onLocationClick(location)}
//       />
//       )
//   const locationList = locations.length > 0 ? <ul>{locationItems}</ul> : null
//   return (locationList)
// }

// export default LocationFinder
