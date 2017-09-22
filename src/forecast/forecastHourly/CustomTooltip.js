// @flow
// import React, {Component} from 'react'
import * as React from 'react'

/* eslint-disable no-undef */
type PropsType = {
  +active:boolean,
  +payload:Array<{
    +payload:{
    +momentId: string,
    +timespan: number,
    +temp: number,
    +weatherIconCode: number,
    +rain: number | void,
    +day: string,
    +hour: string
  }}>
}
/* eslint-enable no-undef */

class CustomTooltip extends React.Component<PropsType> {
  render () {
    const { payload, active } = this.props
    if (!active) {
      return null
    }
    const data = payload[0].payload
    const hour = data.hour
    const temp = data.temp
    const rain = data.rain === undefined ? 'N/A' : data.rain.toFixed(1)
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
}

export default CustomTooltip
