// @flow
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Weather from './Weather'

describe('<Weather />', () => {
  it('should render', () => {
    const weather = {
      name: 'New York',
      country: 'US',
      icon: 800,
      temperature: 15.14,
      temperatureMax: 20,
      temperatureMin: 10,
      weatherMain: 'Clear',
      updatedTime: 1505196639,
      weatherIcon: 200,
      windDegree: 306.501,
      windSpeed: 1.29,
      visibility: 16093,
      humidity: 68,
      sunrise: 1505212456,
      sunset: 1505257754,
      cloudiness: 1,
      pressure: 1020,
      pressureUnit: 'hPa'
    }
    const wrapper = shallow(
      <Weather weather={weather} />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
