import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import SummaryChartIcon from './SummaryChartIcon'
import moment from 'moment'

const CustomTooltip = React.createClass({
  render () {
    const { payload, active } = this.props
    if (!active) {
      return null
    }
    const data = payload[0].payload
    const hour = data.hour
    const temp = data.temp
    const rain = data.rain ? payload[0].payload.rain.toFixed(1) : 'N/A'
    const day = data.day
    return (
      <div>
        <div>
          {day}
        </div>
        <div>
          <div>
            Hour:
          </div>
          <div>
            {hour}
          </div>
        </div>
        <div>
          <div>
          Temp:
        </div>
          <div>
            {temp} &#176;
          </div>
        </div>
        <div>
          <div>
          Rain:
        </div>
          <div>
            {rain}
          </div>
        </div>
      </div>
    )
  }
})

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
  console.log(forecastHourly)
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

// const SummaryChart = ({ forecastHourly }) => (
//   <LineChart width={800} height={500} data={forecastHourly} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
//     <Line type='monotone' dataKey='temp' stroke='#8884d8' dot={<SummaryChartIcon />} />
//     <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
//     <XAxis dataKey='hour' />
//     <Tooltip />
//   </LineChart>
// )

export default SummaryChart
