import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import Navigations from './Navigations'
import Navigation from './Navigation'

describe('<Navigations />', () => {
  it('should render', () => {
    const dataState = [
      {
        id: 'home',
        title: 'Weather',
        tooltip: 'Weather',
        isActive: true,
        url: '/'
      },
      {
        id: 'map',
        title: 'Map',
        tooltip: 'Weather map',
        isActive: false,
        url: '/map'
      }
    ]
    const wrapper = shallow(
      <Navigations
        navigations={dataState}
      />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should render two <Navigation /> components', () => {
    const dataState = [
      {
        id: 'home',
        title: 'Weather',
        tooltip: 'Weather',
        isActive: true,
        url: '/'
      },
      {
        id: 'map',
        title: 'Map',
        tooltip: 'Weather map',
        isActive: false,
        url: '/map'
      }
    ]
    const wrapper = shallow(
      <Navigations
        navigations={dataState}
      />
    )
    expect(wrapper.find(Navigation).length).toBe(2)
  })
})
