import {getForecastHourly} from './forecastHourlyActions'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import * as api from '../../app/api'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('forecastHourlyActions', () => {
  it('should dispatch action GET_FORECAST_HOURLY and check for its fulfillment', () => {
    const location = 5128581
    const store = mockStore({ })

    fetchMock.get(api.forecast(location), {data: 'mockData'})
    const action = getForecastHourly(location)

    const expectedActions = [
         {type: 'GET_FORECAST_HOURLY', payload: new Promise(() => {}, () => {})}
    ]
    return store.dispatch(action).payload
         .then(data => { // return of async actions
           expect(store.getActions()).toEqual(expectedActions)
           expect(data).toEqual({data: 'mockData'})
         })
  })
})
