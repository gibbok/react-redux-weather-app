import React from 'react'

const ForecastHourlyChart = ({ forecastHourly }) => (
  <div>
    <h2>Hourly</h2>
    { JSON.stringify(forecastHourly) }
  </div>
)

export default ForecastHourlyChart
