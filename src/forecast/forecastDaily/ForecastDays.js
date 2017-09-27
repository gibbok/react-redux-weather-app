
// @flow
import * as React from 'react'
import ForecastDay from './ForecastDay'

/* eslint-disable no-undef */
type PropsType = {
  +forecastDays: Array<Object>,
  +onForecastDayClick: Object
}
/* eslint-enable no-undef */

const ForecastDays:React.StatelessFunctionalComponent<PropsType> = ({ forecastDays, onForecastDayClick }:PropsType):React.Element<any> => (
  <div>
    <h2>Daily</h2>
    <div>
      {forecastDays.map((day, index) =>
        <ForecastDay
          key={index}
          {...forecastDays[index]}
      />
    )}
    </div>
  </div>
)

export default ForecastDays
