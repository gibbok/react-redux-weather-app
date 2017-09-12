import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import MapTypes from './MapTypes'

describe('<MapTypes />', () => {
  it('should render', () => {
    const data = {
      types: [
        {
          id: 'temperature',
          title: 'Temperature',
          isActive: true
        },
        {
          id: 'precipitation',
          title: 'Precipitation',
          isActive: false
        },
        {
          id: 'pressure',
          title: 'Pressure',
          isActive: false
        },
        {
          id: 'wind',
          title: 'Wind',
          isActive: false
        },
        {
          id: 'cloud',
          title: 'Cloud',
          isActive: false
        }
      ]
    }
    const wrapper = shallow(
      <MapTypes
        types={data.types}
      />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
