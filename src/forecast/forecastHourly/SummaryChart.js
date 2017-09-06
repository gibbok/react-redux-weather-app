import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import SummaryChartIcon from './SummaryChartIcon'
import moment from 'moment'

const SummaryChart = ({ forecastHourly }) => {
  let forecastHourlyFormat = forecastHourly.map(data => {
    return {
      momentId: data.momentId,
      timespan: data.timespan,
      temp: Math.round(data.temp),
      weatherIconCode: data.weatherIconCode,
      rain: data.rain,
      hour: moment.unix(data.timespan).format('hh A')
    }
  })
  return (
    <LineChart width={800} height={500} data={forecastHourlyFormat} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
      <Line type='monotone' dataKey='temp' stroke='#8884d8' dot={<SummaryChartIcon />} />
      <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
      <XAxis dataKey='hour' />
      <YAxis dataKey='temp' />
      <Tooltip />
    </LineChart>
  )
}

// const SummaryChart = ({ forecastHourly }) => (
//   <LineChart width={800} height={500} data={forecastHourly} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
//     <Line type='monotone' dataKey='temp' stroke='#8884d8' dot={<SummaryChartIcon />} />
//     <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
//     <XAxis dataKey='hour' />
//     <Tooltip />
//   </LineChart>
// )

export default SummaryChart
