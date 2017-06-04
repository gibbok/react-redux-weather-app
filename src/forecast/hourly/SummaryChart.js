import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, Tooltip } from 'recharts'
import SummaryChartIcon from './SummaryChartIcon'

const SummaryChart = ({ forecastHourly }) => (
  <LineChart width={500} height={250} data={forecastHourly} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
    <Line type='monotone' dataKey='temp' stroke='#8884d8' dot={<SummaryChartIcon />} />
    <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
    <XAxis dataKey='hour' />
    <Tooltip />
  </LineChart>
)

export default SummaryChart
