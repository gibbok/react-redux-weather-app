
import React from 'react'
import { createMockStore, createMockDispatch } from 'redux-test-utils'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import configureStore from 'redux-mock-store'
import { getForecastDaily } from './forecastDailyActions'
import ForecastDailyContainer from './ForecastDailyContainer'
import location from '../../app/location'
import { createMomentId } from '../../app/utility'

describe('ForecastDailyContainer', () => {
  it('should render', () => {
    const initialState = {
      forecastDailyReducer: {
        forecastDaily: {
          forecastDaily: {},
          data: [],
          app: {
            locationId: location().locationId,
            isFetching: false
          },
          ui: {
            selectedDate: createMomentId(Date.now())
          }
        }}
    }
    const mockStore = configureStore()
    const store = mockStore(initialState)
    const wrapper = shallow(<ForecastDailyContainer store={store} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should dispatch', () => {
    const state = 'state'
    const store = createMockStore(state)
    const action = getForecastDaily(location().locationId)

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
