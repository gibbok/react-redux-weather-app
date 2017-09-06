import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import SummaryChartIcon from './SummaryChartIcon'
import CustomTooltip from './CustomTooltip'
import moment from 'moment'

const SummaryChart = ({ forecastHourly }) => {
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
