import React from 'react'
import { createMockStore, createMockDispatch } from 'redux-test-utils'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import configureStore from 'redux-mock-store'
import WeatherContainer from './WeatherContainer'
import {getWeather} from './weatherActions'
import location from '../../app/location'

describe('WeatherContainer', () => {
  it('should render', () => {
    const initialState = {
      weatherReducer: {
        weather: {
          data: {},
          app: {
            locationId: location().locationId, // nyc usa
            isFetching: false
          },
          ui: {}
        }}
    }
    const mockStore = configureStore()
    const store = mockStore(initialState)
    const wrapper = shallow(<WeatherContainer store={store} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should dispatch action getWeather', () => {
    const state = 'state'
    const store = createMockStore(state)
    const action = getWeather(location().locationId)

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
