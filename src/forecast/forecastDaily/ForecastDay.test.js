import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import ForecastDay from './ForecastDay'
import IconWeather from '../../shared/icon/IconWeather'

describe('<ForecastDay />', () => {
  it('should render', () => {
    const wrapper = shallow(
      <ForecastDay
        onClick={() => {}}
        date={1504811633838}
        tempMin={10}
        tempMax={15}
        iconCode={200}
        weatherDescription={'storm showers'}
      />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should contain a IconWeather component', () => {
    const wrapper = shallow(
      <ForecastDay
        onClick={() => {}}
        date={1504811633838}
        tempMin={10}
        tempMax={15}
        iconCode={200}
        weatherDescription={'storm showers'}
        />
      )
    expect(wrapper.find(IconWeather).length).toBe(1)
  })
})
