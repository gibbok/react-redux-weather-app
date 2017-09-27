// @flow
import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import SummaryChart from './SummaryChart'

describe('<SummaryChart />', () => {
  it('should render', () => {
    const data = [
      {
        momentId: '2017:8:12:2',
        timespan: 1505217600,
        temp: 15.52,
        weatherIconCode: 804,
        weatherDescription: 'Clouds',
        windDegree: 344,
        windSpeed: 1.3,
        rain: 1.1,
        humidityUnit: '%',
        humidityValue: 89},
      {
        momentId: '2017:8:12:2',
        timespan: 1505228400,
        temp: 21.77,
        weatherIconCode: 801,
        weatherDescription: 'Clouds',
        windDegree: 266.501,
        windSpeed: 1.27,
        rain: undefined,
        humidityUnit: '%',
        humidityValue: 67
      }
    ]
    const wrapper = shallow(
      <SummaryChart
        forecastHourly={data}
      />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
