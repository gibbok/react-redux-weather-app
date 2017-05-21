import React from 'react'
import SummaryChart from './SummaryChart'
import Details from './Details'
import SummaryButton from './SummaryButton'
import DetailsButton from './DetailsButton'

const ForecastHourly = ({ forecastHourly, onSummaryClick, onDetailsClick }) => {
  return (
    <div>
      <SummaryButton onSummaryClick={onSummaryClick} />
      <DetailsButton onDetailsClick={onDetailsClick} />
      <SummaryChart forecastHourly={forecastHourly} />
      <Details forecastHourly={forecastHourly} />
    </div>
  )
}

export default ForecastHourly
