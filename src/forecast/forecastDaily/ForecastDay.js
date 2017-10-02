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
  return ({
    root: {
      width: '100%',
      height: 120
    }
  })
}

const ForecastDay:React.StatelessFunctionalComponent<PropsType> = ({ date, tempMin, tempMax, iconCode, weatherMain, classes }:PropsType):React.Element<any> => {
  const dateFormat = moment.unix(date).format('ddd, MMM D')
  const tempMinRounded = Math.round(tempMin)
  const tempMaxRounded = Math.round(tempMax)
  return (
    <div className={classes.root}>
      <div>
        <Typography type='title'>
          {dateFormat}
        </Typography>
      </div>
      <div>
        <Typography type='title'>
          <IconWeather code={iconCode} />
        </Typography>
      </div>
      <div>
        <div>
          <Typography type='subheading'>
            Min {tempMinRounded}&#176;
          </Typography>
        </div>
        <div>
          <Typography type='subheading'>
            Max {tempMaxRounded}&#176;
          </Typography>
        </div>
      </div>
      <div>
        <Typography type='subheading'>
          {weatherMain}
        </Typography>
      </div>
    </div>
  )
}
export default withStyles(styles)(ForecastDay)
