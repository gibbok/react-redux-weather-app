import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import Forecast from './Forecast'

describe('<Forecast />', () => {
  it('should render', () => {
    const wrapper = shallow(<Forecast />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
