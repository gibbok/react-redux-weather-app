import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Map from './Map'
import MapRegions from './MapRegions'
import MapTypes from './MapTypes'
import MapOpenLayer from './MapOpenLayer'

describe('<Map />', () => {
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
        }
      ],
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
        }
      ],
      geo: [-74.006, 40.7143]
    }

    const wrapper = shallow(
      <Map
        regions={data.regions}
        types={data.types}
        onTypesChange={() => {}}
        onRegionsChange={() => {}}
        geo={data.geo}
        />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should contain MapTypes, MapRegions and MapOpenLayer components', () => {
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
        }
      ],
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
        }
      ]
    }

    const wrapper = shallow(
      <Map
        regions={data.regions}
        types={data.types}
        onTypesChange={() => {}}
        onRegionsChange={() => {}}
        geo={[-74.006, 40.7143]}
          />
      )
    expect(wrapper.find(MapTypes).length).toBe(1)
    expect(wrapper.find(MapRegions).length).toBe(1)
    expect(wrapper.find(MapOpenLayer).length).toBe(1)
  })
})
