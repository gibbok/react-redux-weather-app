import React from 'react'
import { createMockStore, createMockDispatch } from 'redux-test-utils'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import configureStore from 'redux-mock-store'
import LocationFinderSearchContainer from './LocationFinderSearchContainer'
import { getLocations, setLocation, setSearchValue } from './locationFinderSearchActions'
import location from '../../app/location'

describe('<LocationFinderSearchContainer />', () => {
  it('should render', () => {
    const initialState = {
      locationFinderReducer: {
        locationFinder: {
          data: [
          ],
          app: {
            isFetching: false
          },
          ui: {
            inputValue: ''
          }
        }
      }
    }
    const mockStore = configureStore()
    const store = mockStore(initialState)
    const wrapper = shallow(<LocationFinderSearchContainer store={store} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should dispatch action getLocations', () => {
    const state = 'state'
    const store = createMockStore(state)
    const action = getLocations(location().locationId)

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

  it('should dispatch action setLocation', () => {
    const state = 'state'
    const store = createMockStore(state)
    const action = setLocation(location().locationId)

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

  it('should dispatch action setSearchValue', () => {
    const state = 'state'
    const store = createMockStore(state)
    const action = setSearchValue('brno')

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
