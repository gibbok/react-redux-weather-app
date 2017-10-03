// @flow
import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import Navigations from './Navigations'
import { NavLink } from 'react-router-dom'

describe('<Navigations />', () => {
  it('should render', () => {
    const wrapper = shallow(<Navigations />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should NavLink have navigational properties', () => {
    const wrapper = shallow(<Navigations />)
    // expect(wrapper.find(NavLink).find({ to: '/' }).first().length === 1).toEqual(true)
    expect(wrapper.find(NavLink).get(0).props.to).toEqual('/')
    expect(wrapper.find(NavLink).get(1).props.to).toEqual('/map')
  })
})
