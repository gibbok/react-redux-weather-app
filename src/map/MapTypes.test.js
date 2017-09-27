// @flow
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import MapTypes from './MapTypes'
import sinon from 'sinon'

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

  it('should simulate click event', () => {
    const data = {
      types: [{
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
    const onTypesClick = sinon.spy()
    const wrapper = shallow(
      <MapTypes
        types={data.types}
        onTypesClick={onTypesClick}
      />
      )
    wrapper.find('div > div').first().simulate('click', {target: {value: 'wind'}})
    expect(onTypesClick.called).toEqual(true)
  })
})
