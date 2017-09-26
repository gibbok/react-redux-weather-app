// @flow
import {getWeather} from './weatherActions'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import * as api from '../../app/api'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('weatherActions', () => {
  it('should dispatch action GET_WEATHER and check for its fulfillment', () => {
    const location = 5128581
    const store = mockStore({ })

    fetchMock.get(api.weather(location), {data: 'mockData'})
    const action = getWeather(location)

    const expectedActions = [
         {type: 'GET_WEATHER', payload: new Promise(() => {})}
    ]
    return store.dispatch(action).payload
         .then(data => { // return of async actions
           expect(store.getActions()).toEqual(expectedActions)
           expect(data).toEqual({data: 'mockData'})
         })
  })
})
