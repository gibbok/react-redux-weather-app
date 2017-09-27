// @flow
import React from 'react'
import { createMockStore, createMockDispatch } from 'redux-test-utils'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import configureStore from 'redux-mock-store'
import MapContainer from './MapContainer'
import { setMapRegion, setMapType } from './mapActions'
import location from '../app/location'

describe('WeatherContainer', () => {
  it('should render', () => {
    const initialState = {
      mapReducer: {
        map: {
          data: {
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
          },
          app: {
            locationId: location().locationId,
            geo: location().geo,
            isFetching: false
          },
          ui: {
            type: 'temperature',
            region: 'northAmerica'
          }
        }
      }
    }
    const mockStore = configureStore()
    const store = mockStore(initialState)
    const wrapper = shallow(<MapContainer store={store} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should dispatch action setMapRegion', () => {
    const state = 'state'
    const store = createMockStore(state)
    const action = setMapRegion('europe')

    store.dispatch(action)
    expect(store.getAction(action.type)).toEqual(action)
    expect(store.getActions()).toEqual([action])
    expect(store.isActionDispatched(action)).toBe(true)
    expect(store.isActionTypeDispatched(action.type)).toBe(true)
    expect(store.getState()).toBe(state)

    const dispatchMock = createMockDispatch()
    dispatchMock.dispatch(action)
    expect(dispatchMock.getAction(action.type)).toEqual(action)
    expect(dispatchMock.getActions()).toEqual([action])
    expect(dispatchMock.isActionDispatched(action)).toBe(true)
    expect(dispatchMock.isActionTypeDispatched(action.type)).toBe(true)
  })

  it('should dispatch action setMapType', () => {
    const state = 'state'
    const store = createMockStore(state)
    const action = setMapType('wind')

    store.dispatch(action)
    expect(store.getAction(action.type)).toEqual(action)
    expect(store.getActions()).toEqual([action])
    expect(store.isActionDispatched(action)).toBe(true)
    expect(store.isActionTypeDispatched(action.type)).toBe(true)
    expect(store.getState()).toBe(state)

    const dispatchMock = createMockDispatch()
    dispatchMock.dispatch(action)
    expect(dispatchMock.getAction(action.type)).toEqual(action)
    expect(dispatchMock.getActions()).toEqual([action])
    expect(dispatchMock.isActionDispatched(action)).toBe(true)
    expect(dispatchMock.isActionTypeDispatched(action.type)).toBe(true)
  })
})
