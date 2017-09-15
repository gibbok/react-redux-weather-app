import React from 'react'
import { shallow } from 'enzyme'
import LocationFinder from './LocationFinder'
import Location from './Location'
import toJson from 'enzyme-to-json'
import sinon from 'sinon'

describe('<LocationFinder />', () => {
  it('should click event', () => {
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
    const onLocationClick = sinon.spy()
    const wrapper = shallow(
      <LocationFinder
        locations={data}
        onLocationClick={onLocationClick}
    />)
    const dom = wrapper.find({ id: 3067696 }).dive().find('li > a')
    expect(dom.length).toBe(1)

    dom.simulate('click')
    expect(onLocationClick.called).toEqual(true)
  })

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

  it('should render', () => {
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
    const wrapper = shallow(
      <LocationFinder locations={data} />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should not render if has no locations', () => {
    const data = []
    const wrapper = shallow(
      <LocationFinder locations={data} />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
