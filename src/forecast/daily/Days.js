import React from 'react'
import ForecastDay from './ForecastDay'

const Days = ({ forecastDays, onForecastDayClick }) => (
  <div>
    <h2>Daily</h2>
    <ul>
      {forecastDays.map((day, index) =>
        <ForecastDay
          key={index}
          {...forecastDays[index]}
          onClick={() => onForecastDayClick(day)}
      />
    )}
    </ul>
  </div>
)

export default Days
