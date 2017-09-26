// @flow
import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import DetailDayGroup from './DetailDayGroup'
import DetailHour from './DetailHour'

describe('<DetailDayGroup />', () => {
  it('should render', () => {
    const data = {
      timespan: 1505206800,
      hours: [
        {
          humidityUnit: '%',
          humidityValue: 93,
          momentId: '2017:8:12:2',
          temp: 14.42,
          timespan: 1505206800,
          weatherDescription: 'Clouds',
          weatherIconCode: 803,
          windDegree: 273.006,
          windSpeed: 1.26
        }
      ]
    }
    const wrapper = shallow(
      <DetailDayGroup
        timespan={data.timespan}
        hours={data.hours}
      />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should render one DetailHour component', () => {
    const data = {
      timespan: 1505206800,
      hours: [
        {
          humidityUnit: '%',
          humidityValue: 93,
          momentId: '2017:8:12:2',
          temp: 14.42,
          timespan: 1505206800,
          weatherDescription: 'Clouds',
          weatherIconCode: 803,
          windDegree: 273.006,
          windSpeed: 1.26
        }
      ]
    }
    const wrapper = shallow(
      <DetailDayGroup
        timespan={data.timespan}
        hours={data.hours}
        />
      )
    expect(wrapper.find(DetailHour).length).toBe(1)
  })
})
