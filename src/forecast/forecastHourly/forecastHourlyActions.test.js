// @flow
import {getForecastHourly, setForecastHourlyActiveReportType} from './forecastHourlyActions'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import * as api from '../../app/api'
import * as types from './forecastHourlyActionTypes'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('forecastHourlyActions', () => {
  it('should dispatch action GET_FORECAST_HOURLY and check for its fulfillment', () => {
    const location = 5128581
    const store = mockStore({ })

    fetchMock.get(api.forecast(location), {data: 'mockData'})
    const action = getForecastHourly(location)

    const expectedActions = [
      {type: 'GET_FORECAST_HOURLY', payload: new Promise(() => {})}
    ]

    return store.dispatch(action).payload
         .then(data => { // return of async actions
           expect(store.getActions()).toEqual(expectedActions)
           expect(data).toEqual({data: 'mockData'})
         })
  })

  it('should return an action of type SET_FORECAST_HOURLY_ACTIVE_REPORT_TYPE', () => {
    const action = setForecastHourlyActiveReportType('details')
    const store = mockStore({ })
    const expectedActions = [
      {
        type: types.SET_FORECAST_HOURLY_ACTIVE_REPORT_TYPE,
        payload: 'details'
      }
    ]
    store.dispatch(action)
    expect(store.getActions()).toEqual(expectedActions)
  })
})
