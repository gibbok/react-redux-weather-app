import React from 'react'
import Detail from './Detail'

const Details = ({ forecastHourly }) => (
  <div>
    <ul>
      {forecastHourly.map((day, index) =>
        <Detail
          key={index}
          {...forecastHourly[index]}
      />
    )}
    </ul>

  </div>
)

export default Details
