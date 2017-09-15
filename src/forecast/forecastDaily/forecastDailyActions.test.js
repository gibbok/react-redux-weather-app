import {getForecastDaily} from './forecastDailyActions'
// import * as types from './forecastDailyActionTypes'
// import nock from 'nock'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import * as api from '../../app/api'
const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('forecastDailyActions', () => {
  // afterEach(() => {
  //   nock.cleanAll()
  // })

  // it('should create an action getForecastDaily', () => {
  //   const expectedAction = {
  //     type: types.GET_FORECAST_DAILY,
  //     payload: new Promise(() => {}, () => {})
  //   }
  //   expect(getForecastDaily(5128581)).toEqual(expectedAction)
  // })

  // deprecated because now we are using a mock for fetch
  // it('should create action GET_FORECAST_DAILY', () => {
  //   const middlewares = [thunk]
  //   const mockStore = configureMockStore(middlewares)
  //   const store = mockStore()
  //   const action = getForecastDaily(5128581)
  //   const expectedAction = [
  //     { type: types.GET_FORECAST_DAILY, payload: new Promise(() => {}, () => {}) }
  //   ]

  //   store.dispatch(action)
  //   expect(store.getActions()).toEqual(expectedAction)
  // })

  // refactory this code at api.test.js level
  // it('should get valid api data when GET_FORECAST_DAILY has been fulfilled', () => {
  //   const middlewares = [thunk]
  //   const mockStore = configureMockStore(middlewares)
  //   const store = mockStore()
  //   const action = getForecastDaily(5128581)
  //   store.dispatch(action).payload.then(data => {
  //     expect(data).toEqual(expect.objectContaining({
  //       city: expect.any(Object),
  //       cod: expect.any(String),
  //       message: expect.any(Number),
  //       cnt: expect.any(Number),
  //       list: expect.any(Array)
  //     }))
  //   })
  // })

  it('should dispatch action GET_FORECAST_DAILY and check for its fulfillment', () => {
    const location = 5128581
    const store = mockStore({ })

    fetchMock.get(api.forecastDaily(location), {data: 'mock'})
    const action = getForecastDaily(location)

    const expectedActions = [
         {type: 'GET_FORECAST_DAILY', payload: new Promise(() => {}, () => {})}
    ]
    return store.dispatch(action).payload
         .then(data => { // return of async actions
           expect(store.getActions()).toEqual(expectedActions)
           expect(data).toEqual({data: 'mock'})
         })
  })
})
