import React from 'react'
import DetailDayGroup from './DetailDayGroup'

const Details = ({ forecastHourly }) => {
  const hoursByDate = forecastHourly.reduce((acc, hour) => {
    (acc[hour.momentId] || (acc[hour.momentId] = [])).push(hour)
    return acc
  }, {})
  const dateHours = Object.keys(hoursByDate).map((day, index) => {
    const hours = hoursByDate[day]
    const timespanHead = hoursByDate[day][0].timespan
    return (
      <DetailDayGroup
        key={index}
        timespan={timespanHead}
        hours={hours}
      />
    )
  })
  return (
    <div>
      {dateHours}
    </div>
  )
}

export default Details
