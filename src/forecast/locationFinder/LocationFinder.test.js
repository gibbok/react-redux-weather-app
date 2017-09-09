import React from 'react'
import { shallow } from 'enzyme'
import LocationFinder from './LocationFinder'
import Location from './Location'

describe('<LocationFinder />', () => {
  it('should render two <Location /> components', () => {
    const data = [
      {
        country: 'CZ',
        id: 3067696,
        name: 'Prague'
      },
      {
        country: 'US',
        id: 4548393,
        name: 'Prague'
      }
    ]
    const wrapper = shallow(<LocationFinder locations={data} />)
    expect(wrapper.find(Location).length).toBe(2)
  })
})
