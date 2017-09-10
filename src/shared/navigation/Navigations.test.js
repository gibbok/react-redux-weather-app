import React from 'react'
import {shallow} from 'enzyme'
import Navigations from './Navigations'
import Navigation from './Navigation'

describe('<Navigations />', () => {
  it('should render two <Navigation /> components', () => {
    const data = [
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
        navigations={data}
      />
    )
    expect(wrapper.find(Navigation).length).toBe(2)
  })
})
