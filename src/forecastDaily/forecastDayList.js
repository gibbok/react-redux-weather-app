import React from 'react'
import ForecastDay from './forecastDay'

const ForecastDaily = ({ forecastDays, onForecastDayClick }) => (
  <ul>
    {forecastDays.map((day, index) =>
      <ForecastDay
        key={index}
        {...forecastDays[index]}
        onClick={() => onForecastDayClick(day)}
      />
    )}
  </ul>
)

export default ForecastDaily
