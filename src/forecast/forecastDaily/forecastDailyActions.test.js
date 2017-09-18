// @flow
import {ActionType} from '../../types' // eslint-disable-line no-unused-vars
import {getForecastDaily} from './forecastDailyActions'
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

    fetchMock.get(api.forecastDaily(location), {data: 'mockData'})
    const action:ActionType = getForecastDaily(location)

    const expectedActions:ActionType = [
         {type: 'GET_FORECAST_DAILY', payload: new Promise(() => {})}
    ]
    return store.dispatch(action).payload
         .then(data => { // return of async actions
           expect(store.getActions()).toEqual(expectedActions)
           expect(data).toEqual({data: 'mockData'})
         })
  })
})
