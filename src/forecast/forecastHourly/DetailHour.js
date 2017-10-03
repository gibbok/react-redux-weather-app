// @flow
import * as React from 'react'
import moment from 'moment'
import IconWeather from '../../shared/icon/IconWeather'
import IconWind from '../../shared/icon/IconWind'
import { withStyles, Typography, Divider } from 'material-ui'

/* eslint-disable no-undef */
type PropsType = {
  +momentId: string,
  +timespan: number,
  +temp: number,
  +weatherIconCode: number,
  +weatherDescription: string,
  +windDegree: number,
  +windSpeed: number,
  +humidityUnit: '%',
  +humidityValue: number,
  +classes: Object
}
/* eslint-enable no-undef */

const styles = theme => {
  return ({
    root: {
      width: 112
    }
  })
}

const DetailHour:React.StatelessFunctionalComponent<PropsType> = ({ momentId, timespan, temp, weatherIconCode, weatherDescription, windDegree, windSpeed, humidityUnit, humidityValue, classes }:PropsType):React.Element<any> => {
  const hourFormat = moment.unix(timespan).format('h A')
  const tempFormat = Math.round(temp)
  const windSpeedFormat = Math.round(windSpeed)
  return (
    <div className={classes.root}>
      <div>
        <Typography type='title'>
          <IconWeather code={weatherIconCode} />
        </Typography>
      </div>
      <div>
        <Typography type='subheading'>
          {tempFormat} &#176;
        </Typography>
      </div>
      <div>
        <Typography type='subheading'>
          {weatherDescription}
        </Typography>
      </div>
      <div>
        <Typography type='body1'>
          Wind <IconWind degree={windDegree} /> {windSpeedFormat} mps
        </Typography>
      </div>
      <div>
        <Typography type='body1'>
          Humidity {humidityValue} {humidityUnit}
        </Typography>
      </div>
      <div>
        <Divider />
        <Typography type='subheading'>
          <strong>{hourFormat}</strong>
        </Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(DetailHour)
