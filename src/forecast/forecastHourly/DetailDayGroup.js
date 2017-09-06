import React from 'react'
import moment from 'moment'
import DetailHour from './DetailHour'

const DetailDayGroup = ({ timespan, hours }) => {
  const dayFormat = moment.unix(timespan).format('ddd, MMM D')
  const hoursDetails = hours.map((day, index) =>
    <DetailHour
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
