// @flow
import * as React from 'react'
import NavigationContainer from '../shared/navigation/NavigationContainer'
import LocationFinderSearchContainer from '../forecast/locationFinder/LocationFinderSearchContainer'
import LocationFinderContainer from '../forecast/locationFinder/LocationFinderContainer'
import WeatherContainer from '../forecast/weather/WeatherContainer'
import ForecastDailyContainer from '../forecast/forecastDaily/ForecastDailyContainer'
import ForecastHourlyContainer from '../forecast/forecastHourly/ForecastHourlyContainer'
import { withStyles } from 'material-ui'
import '../../node_modules/weather-icons/css/weather-icons.css' // eslint-disable-line no-unused-vars

const styles = theme => ({
  root: {
    width: '100%'
  },
  appFrame: {
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  drawer: {
    flexGrow: 0
  },
  content: {
    flexGrow: 1,
    backgroundColor: 'yellow'
  }
})

const Forecast = (props) => {
  const classes = props.classes
  return (
    <div className={classes.root}>
      <div className={classes.appFrame}>
        <div className={classes.drawer}>
          <NavigationContainer />
        </div>
        <div className={classes.content}>
          <LocationFinderSearchContainer />
          <LocationFinderContainer />
          <WeatherContainer />
          <ForecastDailyContainer />
          <ForecastHourlyContainer />
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(Forecast)
