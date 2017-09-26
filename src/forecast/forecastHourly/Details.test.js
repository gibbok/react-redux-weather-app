// @flow
import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import Details from './Details'
import DetailDayGroup from './DetailDayGroup'

describe('<Details />', () => {
  it('should render', () => {
    const forecastHourly = [
      {
        momentId: '2017:8:12:2',
        timespan: 1505206800,
        temp: 14.73,
        weatherIconCode: 803,
        weatherDescription: 'Clouds',
        windDegree: 273.006,
        windSpeed: 1.26,
        humidityUnit: '%',
        humidityValue: 93},
      {
        momentId: '2017:8:13:1',
        timespan: 1505217600,
        temp: 16.55,
        weatherIconCode: 804,
        weatherDescription: 'Clouds',
        windDegree: 344,
        windSpeed: 1.3,
        humidityUnit: '%',
        humidityValue: 89}
    ]
    const wrapper = shallow(
      <Details
        forecastHourly={forecastHourly}
      />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should render two DetailDayGroup components (one for each day)', () => {
    const forecastHourly = [
      {
        momentId: '2017:8:12:2',
        timespan: 1505206800,
        temp: 14.73,
        weatherIconCode: 803,
        weatherDescription: 'Clouds',
        windDegree: 273.006,
        windSpeed: 1.26,
        humidityUnit: '%',
        humidityValue: 93},
      {
        momentId: '2017:8:13:1',
        timespan: 1505217600,
        temp: 16.55,
        weatherIconCode: 804,
        weatherDescription: 'Clouds',
        windDegree: 344,
        windSpeed: 1.3,
        humidityUnit: '%',
        humidityValue: 89}
    ]
    const wrapper = shallow(
      <Details
        forecastHourly={forecastHourly}
        />
      )
    expect(wrapper.find(DetailDayGroup).length).toBe(2)
  })
})
