import React, {Component} from 'react'
import IconWeather from '../../shared/icon/IconWeather'

class SummaryChartIcon extends Component {
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
}
export default SummaryChartIcon
