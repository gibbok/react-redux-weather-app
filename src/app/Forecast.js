// @flow
import * as React from 'react'
import NavigationContainer from '../shared/navigation/NavigationContainer'
import WeatherContainer from '../forecast/weather/WeatherContainer'
import ForecastDailyContainer from '../forecast/forecastDaily/ForecastDailyContainer'
import ForecastHourlyContainer from '../forecast/forecastHourly/ForecastHourlyContainer'
import { withStyles } from 'material-ui'
import '../../node_modules/weather-icons/css/weather-icons.css' // eslint-disable-line no-unused-vars
import Bar from '../shared/Bar/Bar'

const styles = theme => {
  return ({
    root: {
      width: '100%',
      display: 'flex'
      // marginTop: theme.spacing.unit * 3,
      // zIndex: 1,
      // overflow: 'hidden'
    },
    appFrame: {
      // position: 'relative',
      display: 'flex',
      width: '100%',
      height: '100%'
    },
    content: {
      width: '100%',
      flexGrow: 1,
      // backgroundColor: theme.palette.background.default,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing.unit * 3,
      // height: 'calc(100% - 56px)',
      // marginTop: 56,
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
        <Bar />
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
