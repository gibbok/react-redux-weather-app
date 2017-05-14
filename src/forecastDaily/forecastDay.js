import React from 'react'

const ForecastDay = ({ onClick, dt, date, tempMin, tempMax, weatherDescription }) => (
  <li onClick={onClick}>
    {dt} {date} {tempMin} {tempMax} {weatherDescription}
  </li>
)

export default ForecastDay
