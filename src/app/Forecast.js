// @flow
import * as React from 'react'
import NavigationContainer from '../shared/navigation/NavigationContainer'
import LocationFinderSearchContainer from '../forecast/locationFinder/LocationFinderSearchContainer'
import LocationFinderContainer from '../forecast/locationFinder/LocationFinderContainer'
import WeatherContainer from '../forecast/weather/WeatherContainer'
import ForecastDailyContainer from '../forecast/forecastDaily/ForecastDailyContainer'
import ForecastHourlyContainer from '../forecast/forecastHourly/ForecastHourlyContainer'
import { withStyles, AppBar, Toolbar, Typography } from 'material-ui'
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
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      order: 1
    },
    drawerHeader: theme.mixins.toolbar,
    bar__search: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%'
    },
    content: {
      backgroundColor: theme.palette.background.default,
      width: '100%',
      padding: theme.spacing.unit * 3,
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
          <Toolbar>
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
