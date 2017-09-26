// @flow
import React from 'react'
import { createMockStore, createMockDispatch } from 'redux-test-utils'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import configureStore from 'redux-mock-store'
import ForecastHourlyContainer from './ForecastHourlyContainer'
import {getForecastHourly, setForecastHourlyActiveReportType} from './forecastHourlyActions'
import location from '../../app/location'
import { createMomentId } from '../../app/utility'

describe('<ForecastHourlyContainer />', () => {
  it('should render', () => {
    const initialState = {
      forecastHourlyReducer: {
        forecastHourly: {
          data: [],
          app: {
            locationId: location().locationId, // nyc usa
            isFetching: false
          },
          ui: {
            selectedDate: createMomentId(Date.now()),
            activeReportType: 'summary'
          }
        }}
    }
    const mockStore = configureStore()
    const store = mockStore(initialState)
    const wrapper = shallow(<ForecastHourlyContainer store={store} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should dispatch action getForecastHourly', () => {
    const state = 'state'
    const store = createMockStore(state)
    const action = getForecastHourly(location().locationId)

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

  it('should dispatch action setForecastHourlyActiveReportType', () => {
    const state = 'state'
    const store = createMockStore(state)
    const action = setForecastHourlyActiveReportType('details')

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
