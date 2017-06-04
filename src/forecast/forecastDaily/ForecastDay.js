import React from 'react'

const ForecastDay = ({ onClick, momentId, date, tempMin, tempMax, weatherDescription }) => (
  <div onClick={onClick}>
    {momentId} {date} {tempMin} {tempMax} {weatherDescription}
  </div>
)

export default ForecastDay
