// @flow
import React from 'react'
import moment from 'moment'
import IconWeather from '../../shared/icon/IconWeather'

const ForecastDay = ({ date, tempMin, tempMax, iconCode, weatherDescription }:{+date:Date, +tempMin: number, +tempMax: number, +iconCode:string, +weatherDescription:string }) => {
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
