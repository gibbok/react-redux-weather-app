import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, Tooltip } from 'recharts'
import IconWeather from '../shared/IconWeather'

const CustomizedDot = React.createClass({
  render () {
    const { cx, cy, payload: {weatherIconCode} } = this.props
    return (
      <svg x={cx - 10} y={cy + 20}>
        <foreignObject width='100%' height='100%'>
          <IconWeather code={weatherIconCode} />
        </foreignObject>
      </svg>
    )
  }
})

const ForecastHourlyChart = ({ forecastHourly }) => (
  <LineChart width={500} height={250} data={forecastHourly} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
    <Line type='monotone' dataKey='temp' stroke='#8884d8' dot={<CustomizedDot />} />
    <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
    <XAxis dataKey='hour' />
    <Tooltip />
  </LineChart>
)

export default ForecastHourlyChart
