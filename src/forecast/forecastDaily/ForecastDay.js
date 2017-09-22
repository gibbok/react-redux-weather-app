// @flow
import * as React from 'react'
import moment from 'moment'
import IconWeather from '../../shared/icon/IconWeather'

/* eslint-disable no-undef */
type PropsType = {
  +date: number,
  +tempMin: number,
  +tempMax: number,
  +iconCode:number,
  +weatherDescription:string
}
/* eslint-enable no-undef */

const ForecastDay:React.StatelessComponent<PropsType> = ({ date, tempMin, tempMax, iconCode, weatherDescription }:PropsType):ReactElement<any> => {
  const dateFormat = moment.unix(date).format('ddd, MMM D')
  const tempMinRounded = Math.round(tempMin)
  const tempMaxRounded = Math.round(tempMax)
  return (
    <div>
      <div>{dateFormat}</div>
      <div>
        <IconWeather code={iconCode} />
      </div>
      <div>
        <div>
          {tempMinRounded}&#176;
        </div>
        <div>
          {tempMaxRounded}&#176;
        </div>
      </div>
      <div>
        {weatherDescription}
      </div>
    </div>
  )
}
export default ForecastDay
