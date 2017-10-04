// @flow
import * as React from 'react' // eslint-disable-line no-unused-vars
import moment from 'moment'
import IconWeather from '../../shared/icon/IconWeather'
import { withStyles, Typography } from 'material-ui'

/* eslint-disable no-undef */
type PropsType = {
  +date: number,
  +tempMin: number,
  +tempMax: number,
  +iconCode:number,
  +weatherMain:string,
  +classes: Object
}
/* eslint-enable no-undef */

const styles = theme => {
  const spaceUnit = theme.spacing.unit
  return ({
    root: {
      width: '100%',
      height: 120
    },
    title: {
      marginBottom: spaceUnit
    },
    icon: {
      marginTop: spaceUnit * 1,
      marginBottom: spaceUnit / 2
    },
    temperature: {
      width: 65,
      marginBottom: spaceUnit / 2,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    },
    weather: {
    }
  })
}

const ForecastDay:React.StatelessFunctionalComponent<PropsType> = ({ date, tempMin, tempMax, iconCode, weatherMain, classes }:PropsType):React.Element<any> => {
  const dateFormat = moment.unix(date).format('ddd, MMM D')
  const tempMinRounded = Math.round(tempMin)
  const tempMaxRounded = Math.round(tempMax)
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography type='title'>
          {dateFormat}
        </Typography>
      </div>
      <div className={classes.icon}>
        <Typography type='headline'>
          <IconWeather code={iconCode} />
        </Typography>
      </div>
      <div className={classes.temperature}>
        <div>
          <Typography type='title'>{tempMaxRounded}&#176;</Typography>
        </div>
        <div>
          <Typography type='subheading'>{tempMinRounded}&#176;</Typography>
        </div>
      </div>
      <div className={classes.weather}>
        <Typography type='subheading'>
          {weatherMain}
        </Typography>
      </div>
    </div>
  )
}
export default withStyles(styles)(ForecastDay)
