// @flow
import * as React from 'react'
import {ForecastHourlyType} from '../../types' // eslint-disable-line no-unused-vars
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import SummaryChartIcon from './SummaryChartIcon'
import CustomTooltip from './CustomTooltip'
import moment from 'moment'

/* eslint-disable no-undef */
type PropsType = {
  +forecastHourly: ForecastHourlyType
}
/* eslint-enable no-undef */

const SummaryChart:React.StatelessFunctionalComponent<any> = ({ forecastHourly }:PropsType):React.Element<any> => {
  let forecastHourlyFormat = forecastHourly.map(data => {
    return {
      momentId: data.momentId,
      timespan: data.timespan,
      temp: Math.round(data.temp),
      weatherIconCode: data.weatherIconCode,
      rain: data.rain,
      day: moment.unix(data.timespan).format('ddd, MMM D'),
      hour: moment.unix(data.timespan).format('hh A')
    }
  })
  return (
    <LineChart width={900} height={450} data={forecastHourlyFormat}>
      <Line type='monotone' dataKey='temp' stroke='#8884d8' dot={<SummaryChartIcon />} />
      <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
      <XAxis dataKey='hour' />
      <YAxis dataKey='temp' />
      <Tooltip content={<CustomTooltip />} />
    </LineChart>
  )
}

export default SummaryChart
