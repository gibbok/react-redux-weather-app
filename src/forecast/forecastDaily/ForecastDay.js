import React from 'react'

const ForecastDay = ({ onClick, momentId, date, tempMin, tempMax, weatherDescription }) => (
  <li onClick={onClick}>
    {momentId} {date} {tempMin} {tempMax} {weatherDescription}
  </li>
)

export default ForecastDay
