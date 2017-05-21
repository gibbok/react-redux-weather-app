import React from 'react'
import SummaryChart from './SummaryChart'
import Details from './Details'

const ForecastHourly = ({ forecastHourly }) => {
  return (
    <div>
      <SummaryChart forecastHourly={forecastHourly} />
      <Details forecastHourly={forecastHourly} />
    </div>
  )
}

export default ForecastHourly
