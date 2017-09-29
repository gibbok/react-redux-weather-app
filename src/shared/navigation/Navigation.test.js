// @flow
import React from 'react'
import {shallow} from 'enzyme'
import Navigation from './Navigation'
import toJson from 'enzyme-to-json'
import { NavLink } from 'react-router-dom'

describe('<Navigation />', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Navigation
        onClick={'test'}
        id={1}
        title={'test title'}
        tooltip={'test tooltop'}
        url={'/map'}
       />
      )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should should render one <NavLink /> component', () => {
    const wrapper = shallow(
      <Navigation
        onClick={'test'}
        id={1}
        title={'test title'}
        tooltip={'test tooltop'}
        url={'/map'}
     />
    )
    expect(wrapper.find(NavLink).length).toBe(1)
  })
})
