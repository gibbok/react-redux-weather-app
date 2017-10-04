
// @flow
import * as React from 'react'
import ForecastDay from './ForecastDay'
import { withStyles, Typography } from 'material-ui'

/* eslint-disable no-undef */
type PropsType = {
  +forecastDays: Array<Object>,
  +onForecastDayClick: Object,
  +classes: Object
}
/* eslint-enable no-undef */

const styles = theme => {
  const spaceUnit = theme.spacing.unit
  return ({
    root: {
      width: 900,
      marginBottom: spaceUnit * 6
    },
    title: {
      marginBottom: spaceUnit * 2.5
    },
    tiles: {
      display: 'flex'
    }
  })
}

const ForecastDays:React.StatelessFunctionalComponent<PropsType> = ({ forecastDays, onForecastDayClick, classes }:PropsType):React.Element<any> => {
  const forecast = forecastDays.map((day, index) =>
    <ForecastDay
      key={index}
      {...forecastDays[index]}
      />
    )
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography type='headline'>Daily</Typography>
      </div>
      <div className={classes.tiles}>
        {forecast}
      </div>
    </div>
  )
}

export default withStyles(styles)(ForecastDays)
