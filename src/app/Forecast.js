// @flow
import * as React from 'react'
import NavigationContainer from '../shared/navigation/NavigationContainer'
import LocationFinderSearchContainer from '../forecast/locationFinder/LocationFinderSearchContainer'
import LocationFinderContainer from '../forecast/locationFinder/LocationFinderContainer'
import WeatherContainer from '../forecast/weather/WeatherContainer'
import ForecastDailyContainer from '../forecast/forecastDaily/ForecastDailyContainer'
import ForecastHourlyContainer from '../forecast/forecastHourly/ForecastHourlyContainer'
import { withStyles, AppBar, Toolbar, Typography, IconButton } from 'material-ui'
import MenuIcon from 'material-ui-icons/Menu'
import '../../node_modules/weather-icons/css/weather-icons.css' // eslint-disable-line no-unused-vars

const drawerWidth = 240
const styles = theme => {
  return ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      zIndex: 1,
      overflow: 'hidden'
    },
    appFrame: {
      position: 'relative',
      display: 'flex',
      width: '100%',
      height: '100%'
    },
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
    menuButton: {
      marginLeft: 12,
      marginRight: 36
    },
    hide: {
      display: 'none'
    },
    bar__search: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%'
    },
    content: {
      width: '100%',
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: 24,
      height: 'calc(100% - 56px)',
      marginTop: 56,
      [theme.breakpoints.up('sm')]: {
        height: 'calc(100% - 64px)',
        marginTop: 64
      }
    }
  })
}

const Forecast = (props) => {
  const classes = props.classes
  return (
    <div className={classes.root}>
      <div className={classes.appFrame}>
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
            <div className={classes.bar__search}>
              <div>
                <LocationFinderSearchContainer />
                <LocationFinderContainer />
              </div>
            </div>
          </Toolbar>
        </AppBar>

        <NavigationContainer />

        <div className={classes.content}>
          <WeatherContainer />
          <ForecastDailyContainer />
          <ForecastHourlyContainer />
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(Forecast)
