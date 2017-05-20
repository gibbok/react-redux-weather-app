import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, Tooltip } from 'recharts'

/*
[{"momentId":"2017:4:20:6","hour":9,"temp":288.03,"weatherIcon":"01n"},{"momentId":"2017:4:20:6","hour":12,"temp":288.83,"weatherIcon":"01d"},{"momentId":"2017:4:20:6","hour":15,"temp":290.74,"weatherIcon":"02d"},{"momentId":"2017:4:20:6","hour":18,"temp":292.973,"weatherIcon":"01d"},{"momentId":"2017:4:20:6","hour":21,"temp":292.783,"weatherIcon":"01d"}]

*/

//  const { payload: { name, main, weather, wind, sys, visibility } } = action

const CustomizedDot = React.createClass({
  render () {
    const { cx, cy, payload: {weatherIcon} } = this.props
    const styles = {
      fontSize: '200px'
    }
    return (
      <svg x={cx - 10} y={cy - 10} width={100} height={100} viewBox='0 0 1024 1024'>
        <foreignObject width='100' height='100'>
          <div style={styles}> {weatherIcon}</div>
        </foreignObject>
      </svg>
    )
  }
})

const ForecastHourlyChart = ({ forecastHourly }) => (
  <LineChart width={500} height={250} data={forecastHourly}>
    <Line type='monotone' dataKey='temp' stroke='#8884d8' dot={<CustomizedDot />} />
    <CartesianGrid stroke='#ccc' />
    <XAxis dataKey='hour' />
    <Tooltip />
  </LineChart>
)

export default ForecastHourlyChart
