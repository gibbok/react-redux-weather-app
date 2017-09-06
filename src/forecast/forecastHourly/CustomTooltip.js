import React from 'react'

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

export default CustomTooltip
