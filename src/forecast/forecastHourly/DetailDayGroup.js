import React from 'react'
import moment from 'moment'
import Detail from './Detail'

const DetailDayGroup = ({ timespan, hours }) => {
  const dayFormat = moment.unix(timespan).format('ddd, MMM D')
  const hoursDetails = hours.map((day, index) =>
    <Detail
      key={index}
      {...hours[index]}
    />
  )
  return (
    <div>
      <div>
        {dayFormat}
      </div>
      <div>
        {hoursDetails}
      </div>
    </div>
  )
}

export default DetailDayGroup
