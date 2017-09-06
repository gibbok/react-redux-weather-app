import React from 'react'
import moment from 'moment'
import Detail from './Detail'

const DetailDayGroup = ({ timespan, infos }) => {
  const dayFormat = moment.unix(timespan).format('ddd, MMM D')
  return (
    <div>
      <div>
        {dayFormat}
      </div>
      <div>
        {infos.map((day, index) =>
          <Detail
            key={index}
            {...infos[index]}
       />
     )}
      </div>
    </div>
  )
}

export default DetailDayGroup
