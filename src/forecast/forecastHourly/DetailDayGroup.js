// @flow
import * as React from 'react'
import moment from 'moment'
import DetailHour from './DetailHour'

/* eslint-disable no-undef */
type PropsType = {
  +timespan:number,
  +hours: Array<{
    +humidityUnit: '%',
    +humidityValue: number,
    +momentId: string,
    +temp: number,
    +timespan: number,
    +weatherDescription: string,
    +weatherIconCode: number,
    +windDegree: number,
    +windSpeed: number
  }>
}
/* eslint-enable no-undef */

const DetailDayGroup:React.StatelessFunctionalComponent<PropsType> = ({ timespan, hours }:PropsType):React.Element<any> => {
  const dayFormat = moment.unix(timespan).format('ddd, MMM D')
  const hoursDetails = hours.map((day, index) =>
    <DetailHour
      key={index}
      {...hours[index]}
    />
  )
  return (
    <div>
      <div>
        {dayFormat}
      </div>
      <div>
        {hoursDetails}
      </div>
    </div>
  )
}

export default DetailDayGroup
