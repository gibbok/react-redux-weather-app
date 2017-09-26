// @flow
import * as React from 'react'

import SummaryChart from './SummaryChart'
import Details from './Details'
import SummaryButton from './SummaryButton'
import DetailsButton from './DetailsButton'

/* eslint-disable no-undef */
type PropsType = {
  +forecastHourly:Array<{
    +humidityUnit: '%',
    +humidityValue: number,
    +momentId:string,
    +temp: number,
    +timespan:number,
    +weatherDescription: string,
    +weatherIconCode: number,
    +windDegree:number,
    +windSpeed:number
  }>,
  +activeTypeReport: string,
  +onSummaryClick: Function,
  +onDetailsClick: Function
}
/* eslint-enable no-undef */

const ForecastHourly:React.StatelessFunctionalComponent<any> = ({ forecastHourly, activeTypeReport, onSummaryClick, onDetailsClick }:PropsType):React.Element<any> => {
  return (
    <div>
      <h2>Hourly</h2>
      <SummaryButton onSummaryClick={onSummaryClick} />
      <DetailsButton onDetailsClick={onDetailsClick} />
      {activeTypeReport === 'summary'
      ? <SummaryChart forecastHourly={forecastHourly} />
      : <Details forecastHourly={forecastHourly} />}
    </div>
  )
}

export default ForecastHourly
