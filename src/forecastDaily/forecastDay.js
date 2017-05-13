import React from 'react'

const ForecastDay = ({ onClick, date, tempMin, tempMax, weatherDescription }) => (
  <li onClick={onClick}>
    {date} {tempMin} {tempMax} {weatherDescription}
  </li>
)

export default ForecastDay
