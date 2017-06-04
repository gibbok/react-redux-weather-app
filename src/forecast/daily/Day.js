import React from 'react'

const Day = ({ onClick, momentId, date, tempMin, tempMax, weatherDescription }) => (
  <li onClick={onClick}>
    {momentId} {date} {tempMin} {tempMax} {weatherDescription}
  </li>
)

export default Day
