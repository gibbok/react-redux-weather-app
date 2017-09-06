import React from 'react'
import moment from 'moment'

const DetailDayGroup = ({ day }) => {
  debugger
  const dayFormat = moment.unix(day.timespan).format('ddd, MMM D')
  return (
    <div>
      {dayFormat}
    </div>
  )
}

export default DetailDayGroup
