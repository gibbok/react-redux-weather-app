// @flow
import * as React from 'react'
import {ForecastHourlyType} from '../../types' // eslint-disable-line no-unused-vars
import DetailDayGroup from './DetailDayGroup'
import { withStyles } from 'material-ui'

/* eslint-disable no-undef */
type PropsType = {
  +forecastHourly:ForecastHourlyType,
  +classes: Object
}
/* eslint-enable no-undef */

const styles = theme => {
  return ({
    root: {
      display: 'flex',
      flexDirection: 'column'
    }
  })
}

const Details:React.StatelessFunctionalComponent<PropsType> = ({ forecastHourly, classes }:PropsType):React.Element<any> => {
  const hoursByDate = forecastHourly.reduce((acc, hour) => {
    (acc[hour.momentId] || (acc[hour.momentId] = [])).push(hour)
    return acc
  }, {})
  const dateHours = Object.keys(hoursByDate).map((day, index) => {
    const hours = hoursByDate[day]
    const timespanHead = hoursByDate[day][0].timespan
    return (
      <DetailDayGroup
        key={index}
        timespan={timespanHead}
        hours={hours}
      />
    )
  })
  return (
    <div className={classes.root}>
      {dateHours}
    </div>
  )
}

export default withStyles(styles)(Details)
