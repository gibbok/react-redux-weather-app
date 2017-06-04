import React from 'react'
import IconWeather from '../../shared/icon/IconWeather'
import IconWind from '../../shared/icon/IconWind'

const Detail = ({ momentId, hour, temp, weatherIconCode, weatherDescription, windDegree, windSpeed, humidityUnit, humidityValue }) => (
  <li>
    {momentId} - {hour} - {temp} - <IconWeather code={weatherIconCode} /> - {weatherDescription} - <IconWind degree={windDegree} />{windDegree} - {windSpeed} - {humidityUnit} - {humidityValue}
  </li>
)

export default Detail
