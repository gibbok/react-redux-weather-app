// @flow
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import MapRegions from './MapRegions'
import sinon from 'sinon'

describe('<MapRegions />', () => {
  it('should render', () => {
    const data = {
      regions: [
        {
          id: 'currentLocation',
          title: 'Current Location',
          isActive: true
        },
        {
          id: 'northAmerica',
          title: 'North America',
          isActive: false
        },
        {
          id: 'southAmerica',
          title: 'South America',
          isActive: false
        },
        {
          id: 'europe',
          title: 'Europe',
          isActive: false
        },
        {
          id: 'asia',
          title: 'Asia',
          isActive: false
        },
        {
          id: 'pacificIslands',
          title: 'Pacific Islands',
          isActive: false
        },
        {
          id: 'africa',
          title: 'Africa',
          isActive: false
        }
      ]
    }
    const wrapper = shallow(
      <MapRegions
        regions={data.regions}
      />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should simulate click event', () => {
    const data = {
      regions: [
        {
          id: 'currentLocation',
          title: 'Current Location',
          isActive: true
        },
        {
          id: 'northAmerica',
          title: 'North America',
          isActive: false
        },
        {
          id: 'southAmerica',
          title: 'South America',
          isActive: false
        },
        {
          id: 'europe',
          title: 'Europe',
          isActive: false
        },
        {
          id: 'asia',
          title: 'Asia',
          isActive: false
        },
        {
          id: 'pacificIslands',
          title: 'Pacific Islands',
          isActive: false
        },
        {
          id: 'africa',
          title: 'Africa',
          isActive: false
        }
      ]
    }
    const onRegionsChange = sinon.spy()
    const wrapper = shallow(
      <MapRegions
        regions={data.regions}
        onRegionsChange={onRegionsChange}
      />
    )

    wrapper.find('select').simulate('change', {target: {value: 'europe'}})
    expect(onRegionsChange.called).toEqual(true)
  })
})
