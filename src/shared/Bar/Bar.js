// @flow
import * as React from 'react'
import { withStyles, AppBar, Toolbar, Typography, IconButton } from 'material-ui'
import MenuIcon from 'material-ui-icons/Menu'
import LocationFinderSearchContainer from '../../forecast/locationFinder/LocationFinderSearchContainer'
import LocationFinderContainer from '../../forecast/locationFinder/LocationFinderContainer'

/* eslint-disable no-undef */
type PropsType = {
  +degree: number,
  +classes: Object
}
/* eslint-enable no-undef */

const drawerWidth = 240
const styles = theme => {
  return ({
    appBar: {
      position: 'absolute',
      zIndex: theme.zIndex.navDrawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    appBarSearch: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%'
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36
    },
    hide: {
      display: 'none'
    }
  })
}

const Bar:React.StatelessFunctionalComponent<PropsType> = ({classes}):React.Element<any> => {
  return (
    <AppBar className={classes.appBar}>
      <Toolbar disableGutters={false}>
        <IconButton
          color='contrast'
          aria-label='open drawer'
          className={classes.menuButton}
              >
          <MenuIcon />
        </IconButton>
        <Typography type='title' color='inherit'>Forecast</Typography>
        <div className={classes.appBarSearch}>
          <div>
            <LocationFinderSearchContainer />
            <LocationFinderContainer />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(Bar)
