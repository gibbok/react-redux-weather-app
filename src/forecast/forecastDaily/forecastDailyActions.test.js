import {getForecastDaily} from './forecastDailyActions'
import * as types from './forecastDailyActionTypes'
import nock from 'nock'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

describe('forecastDailyActions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('should create an action getForecastDaily', () => {
    const expectedAction = {
      type: types.GET_FORECAST_DAILY,
      payload: new Promise(() => {}, () => {})
    }
    expect(getForecastDaily(5128581)).toEqual(expectedAction)
  })

  it('should create action GET_FORECAST_DAILY', () => {
    const middlewares = [thunk]
    const mockStore = configureMockStore(middlewares)
    const store = mockStore()
    const action = getForecastDaily(5128581)
    const expectedAction = [
      { type: types.GET_FORECAST_DAILY, payload: new Promise(() => {}, () => {}) }
    ]

    store.dispatch(action)
    expect(store.getActions()).toEqual(expectedAction)
  })

  it('should get valid api data when GET_FORECAST_DAILY has been fulfilled', () => {
    const middlewares = [thunk]
    const mockStore = configureMockStore(middlewares)
    const store = mockStore()
    const action = getForecastDaily(5128581)
    store.dispatch(action).payload.then(data => {
      expect(data).toEqual(expect.objectContaining({
        city: expect.any(Object),
        cod: expect.any(String),
        message: expect.any(Number),
        cnt: expect.any(Number),
        list: expect.any(Array)
      }))
    })
  })
})
