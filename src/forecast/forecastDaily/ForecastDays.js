
import React from 'react'
import ForecastDay from './ForecastDay'

const ForecastDays = ({ forecastDays, onForecastDayClick }) => (
  <div>
    <h2>Daily</h2>
    <div>
      {forecastDays.map((day, index) =>
        <ForecastDay
          key={index}
          {...forecastDays[index]}
      />
    )}
    </div>
  </div>
)

export default ForecastDays
