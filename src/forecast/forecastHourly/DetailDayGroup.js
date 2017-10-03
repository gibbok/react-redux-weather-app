// @flow
import * as React from 'react'
import moment from 'moment'
import DetailHour from './DetailHour'
import { withStyles, Typography, Divider } from 'material-ui'

/* eslint-disable no-undef */
type PropsType = {
  +timespan:number,
  +hours: Array<{
    +humidityUnit: '%',
    +humidityValue: number,
    +momentId: string,
    +temp: number,
    +timespan: number,
    +weatherDescription: string,
    +weatherIconCode: number,
    +windDegree: number,
    +windSpeed: number
  }>,
  +classes: Object
}
/* eslint-enable no-undef */

const styles = theme => {
  const spaceUnit = theme.spacing.unit
  return ({
    root: {
    },
    title: {
      marginBottom: spaceUnit * 1
    },
    hours: {
      display: 'flex',
      marginTop: spaceUnit * 1.5,
      marginBottom: spaceUnit * 3
      // borderTop: '1px solid rgba(0,0,0,0.5)',
      // borderBottom: '1px solid rgba(0,0,0,0.5)'
    }
  })
}

const DetailDayGroup:React.StatelessFunctionalComponent<PropsType> = ({ timespan, hours, classes }:PropsType):React.Element<any> => {
  const dayFormat = moment.unix(timespan).format('ddd, MMM D')
  const hoursDetails = hours.map((day, index) =>
    <DetailHour
      key={index}
      {...hours[index]}
    />
  )
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography type='title'>
          {dayFormat}
        </Typography>
      </div>
      <Divider />
      <div className={classes.hours}>
        {hoursDetails}
      </div>
    </div>
  )
}

export default withStyles(styles)(DetailDayGroup)
