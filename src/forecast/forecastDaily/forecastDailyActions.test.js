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
