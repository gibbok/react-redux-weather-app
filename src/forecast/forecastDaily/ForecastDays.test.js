// @flow
import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import ForecastDays from './ForecastDays'
import ForecastDay from './ForecastDay'

describe('<ForecastDays />', () => {
  it('should render', () => {
    const forecastDays = [
      {
        date: 1505145600,
        dt: 1505145600,
        iconCode: 801,
        momentId: '2017:8:11:1',
        tempMax: 15.57,
        tempMin: 11.20,
        weatherDescription: 'few clouds'
      },
      {
        date: 1505165700,
        dt: 1505165700,
        iconCode: 200,
        momentId: '2017:8:11:2',
        tempMax: 14.12,
        tempMin: 12.40,
        weatherDescription: 'storm rains'
      }
    ]
    const wrapper = shallow(
      <ForecastDays
        forecastDays={forecastDays}
        onForecastDayClick={() => {}}
        />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should contain two ForecastDays components', () => {
    const forecastDays = [
      {
        date: 1505145600,
        dt: 1505145600,
        iconCode: 801,
        momentId: '2017:8:11:1',
        tempMax: 15.57,
        tempMin: 11.20,
        weatherDescription: 'few clouds'
      },
      {
        date: 1505165700,
        dt: 1505165700,
        iconCode: 200,
        momentId: '2017:8:11:2',
        tempMax: 14.12,
        tempMin: 12.40,
        weatherDescription: 'storm rains'
      }
    ]
    const wrapper = shallow(
      <ForecastDays
        forecastDays={forecastDays}
        onForecastDayClick={() => {}}
          />
      )
    expect(wrapper.find(ForecastDay).length).toBe(2)
  })
})
