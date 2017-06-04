import React from 'react'
import SummaryChart from './SummaryChart'
import Details from './Details'
import SummaryButton from './SummaryButton'
import DetailsButton from './DetailsButton'

const ForecastHourly = ({ forecastHourly, activeTypeReport, onSummaryClick, onDetailsClick }) => {
  const isReportSummary = activeTypeReport === 'summary'
  const isReportDetails = activeTypeReport === 'details'
  return (
    <div>
      <SummaryButton onSummaryClick={onSummaryClick} />
      <DetailsButton onDetailsClick={onDetailsClick} />
      {isReportSummary ? (<SummaryChart forecastHourly={forecastHourly} />) : null}
      {isReportDetails ? (<Details forecastHourly={forecastHourly} />) : null}
    </div>
  )
}

export default ForecastHourly
