import React from 'react'
import IconWeather from './IconWeather'
import {shallow} from 'enzyme'

describe('<IconWeather />', () => {
  it('should render', () => {
    const wrapper = shallow(<IconWeather code={200} />)
    expect(wrapper.contains(<i className='wi wi-day-storm-showers' />)).toBe(true)
  })
})
