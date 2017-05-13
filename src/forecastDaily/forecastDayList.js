import React from 'react'
import ForecastDay from './forecastDay'

const ForecastDaily = ({ forecastDayList, onForecastDayClick }) => (
  <ul>
    {forecastDayList.map((day, index) =>
      <ForecastDay
        key={index}
        {...forecastDayList[index]}
        onClick={() => onForecastDayClick(day)}
      />
    )}
  </ul>
)

export default ForecastDaily
