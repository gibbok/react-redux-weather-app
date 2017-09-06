import React from 'react'
import DetailDayGroup from './DetailDayGroup'

const Details = ({ forecastHourly }) => {
  const dayGroup = forecastHourly.reduce((acc, item) => {
    (acc[item.momentId] || (acc[item.momentId] = [])).push(item)
    return acc
  }, {})
  const dayGroupRender = Object.keys(dayGroup).map((day, index) => {
    const infos = dayGroup[day]
    return <DetailDayGroup
      key={index}
      timespan={dayGroup[day][0].timespan}
      infos={infos}
/>
  })
  return (
    <div>
      {dayGroupRender}
    </div>
  )
}

export default Details
