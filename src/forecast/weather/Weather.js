// @flow
import * as React from 'react'
import IconWind from '../../shared/icon/IconWind'
import moment from 'moment'
import IconWeather from '../../shared/icon/IconWeather'
import { withStyles, Typography } from 'material-ui'

/* eslint-disable no-undef */
type PropsType = {
  +weather:{
    +name: string,
    +country: string,
    +icon: number,
    +temperature: number,
    +temperatureMin: number,
    +temperatureMax: number,
    +weatherMain: number,
    +weatherIcon: number,
    +updatedTime:number,
    +windDegree: number,
    +windSpeed: number,
    +visibility: number,
    +humidity: number,
    +sunrise: number,
    +sunset: number,
    +cloudiness: number,
    +pressure: number,
    +pressureUnit: 'hPa'
  },
  +classes: Object
}
/* eslint-enable no-undef */

const styles = theme => {
  const spaceUnit = theme.spacing.unit
  return ({
    root: {
      display: 'flex',
      width: 900,
      marginBottom: spaceUnit * 3,
      flexDirection: 'column'
    },
    title: {
      display: 'flex',
      justifyContent: 'center'
    },
    temperature: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    temperatureContent: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: 200
    },
    temperatureMinMax: {
      display: 'flex',
      flexDirection: 'column',
      width: 54
    },
    temperatureMin: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    temperatureMax: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    description: {
      display: 'flex',
      justifyContent: 'center'
    },
    update: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: spaceUnit * 0.5,
      marginBottom: spaceUnit * 2.25
    },
    infos: {
      display: 'flex',
      justifyContent: 'center'
    },
    infosContent: {
      display: 'flex',
      flexDirection: 'column',
      width: 500
    },
    infosLine1: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: spaceUnit * 0.75
    },
    infosLine2: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  })
}

const Weather:React.StatelessFunctionalComponent<any> = ({ weather: {
  name,
  country,
  icon,
  temperature,
  temperatureMin,
  temperatureMax,
  weatherMain,
  weatherIcon,
  updatedTime,
  windDegree,
  windSpeed,
  visibility,
  humidity,
  sunrise,
  sunset,
  cloudiness,
  pressure,
  pressureUnit
 },
 classes
}:PropsType):React.Element<any> => {
  const temperatureRounded = Math.round(temperature)
  const updatedTimeFormat = moment.unix(updatedTime).format('h:mm A')
  const sunriseFormat = moment.unix(sunrise).format('h:mm A')
  const sunsetFormat = moment.unix(sunset).format('h:mm A')
  const windSpeedFormat = Math.round(windSpeed)
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography type='headline'>
          {name}, {country}
        </Typography>
      </div>
      <div className={classes.temperature}>
        <div className={classes.temperatureContent}>
          <div>
            <Typography type='display2'>
              <IconWeather code={icon} />
            </Typography>
          </div>
          <div>
            <Typography type='display3'>
              {temperatureRounded}&#176;
          </Typography>
          </div>
          <div className={classes.temperatureMinMax}>
            <div className={classes.temperatureMax}>
              <div><Typography type='body2'>Min</Typography></div>
              <div><Typography type='body2'>{temperatureMin} &#176;</Typography></div>
            </div>
            <div className={classes.temperatureMin}>
              <div><Typography type='body2'>Max</Typography></div>
              <div><Typography type='body2'>{temperatureMax} &#176;</Typography></div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.description}>
        <Typography type='title'>
          {weatherMain}
        </Typography>
      </div>
      <div className={classes.update}>
        <Typography type='body1'>
        Updated as of {updatedTimeFormat}
        </Typography>
      </div>
      <div className={classes.infos}>
        <div className={classes.infosContent}>
          <div className={classes.infosLine1}>
            <div>
              <Typography type='body1'>Wind <IconWind degree={windDegree} /> {windSpeedFormat} mps</Typography>
            </div>
            <div>
              <Typography type='body1'>Visibility {visibility} meter</Typography>
            </div>
            <div>
              <Typography type='body1'>Humidity {humidity} &#37;</Typography>
            </div>
          </div>
          <div className={classes.infosLine2}>
            <div>
              <Typography type='body1'>Sunrise {sunriseFormat}</Typography>
            </div>
            <div>
              <Typography type='body1'>Sunset {sunsetFormat}</Typography>
            </div>
            <div>
              <Typography type='body1'>Cloudiness {cloudiness} &#37;</Typography>
            </div>
            <div>
              <Typography type='body1'>Pressure {pressure} {pressureUnit}</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(Weather)
