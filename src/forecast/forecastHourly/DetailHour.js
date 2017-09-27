// @flow
import * as React from 'react'
import moment from 'moment'
import IconWeather from '../../shared/icon/IconWeather'
import IconWind from '../../shared/icon/IconWind'

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
  +humidityValue: number
}
/* eslint-enable no-undef */

const DetailHour:React.StatelessFunctionalComponent<PropsType> = ({ momentId, timespan, temp, weatherIconCode, weatherDescription, windDegree, windSpeed, humidityUnit, humidityValue }:PropsType):React.Element<any> => {
  const hourFormat = moment.unix(timespan).format('h A')
  const tempFormat = Math.round(temp)
  const windSpeedFormat = Math.round(windSpeed)
  return (
    <div>
      <div>
        <div>
          {hourFormat}
        </div>
        <div>
          {tempFormat} &#176;
          </div>
      </div>
      <div>
        <IconWeather code={weatherIconCode} />
      </div>
      <div>
        {weatherDescription}
      </div>
      <div>
        <IconWind degree={windDegree} />
      </div>
      <div>
        {windSpeedFormat} mps
      </div>
      <div>
        Humidity
      </div>
      <div>
        {humidityValue} {humidityUnit}
      </div>
    </div>
  )
}

export default DetailHour
