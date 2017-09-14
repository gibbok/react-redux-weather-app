import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import MapOpenLayer from './MapOpenLayer'

describe('MapOpenLayer', () => {
  it('should render', () => {
    const wrapper = shallow(<MapOpenLayer />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
