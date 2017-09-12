import React from 'react'
import {shallow} from 'enzyme'
import ForecastDay from './ForecastDay'
import toJson from 'enzyme-to-json'

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
})
