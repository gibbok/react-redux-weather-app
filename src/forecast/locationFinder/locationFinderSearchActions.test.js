import {getLocations, setSearchValue, setLocation} from './locationFinderSearchActions'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import * as api from '../../app/api'
import * as types from './locationFinderActionTypes'
import * as weatherActionTypes from '../weather/weatherActionTypes'
import * as forecastDailyActionTypes from '../forecastDaily/forecastDailyActionTypes'
import * as forecastHourlyActionTypes from '../forecastHourly/forecastHourlyActionTypes'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('locationFinderSearchActions', () => {
  it('should dispatch action setLocation and check for its fulfillment', () => {
    const location = 5128581
    const store = mockStore({ })

    const action = setLocation(location)

    const expectedActions = [
                 {type: weatherActionTypes.GET_WEATHER, payload: new Promise(() => {}, () => {})},
                 {type: forecastDailyActionTypes.GET_FORECAST_DAILY, payload: new Promise(() => {}, () => {})},
                 {type: forecastHourlyActionTypes.GET_FORECAST_HOURLY, payload: new Promise(() => {}, () => {})}
    ]
    store.dispatch(action)
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('should dispatch action GET_LOCATIONS and check for its fulfillment', () => {
    const location = 5128581
    const store = mockStore({ })

    fetchMock.get(api.find(location), {data: 'mockData'})
    const action = getLocations(location)

    const expectedActions = [
             {type: types.GET_LOCATIONS, payload: new Promise(() => {}, () => {})}
    ]
    return store.dispatch(action).payload
             .then(data => { // return of async actions
               expect(store.getActions()).toEqual(expectedActions)
               expect(data).toEqual({data: 'mockData'})
             })
  })

  it('should return an action of type SET_SEARCHVALUE', () => {
    const location = 'brno'
    const action = setSearchValue(location)
    const store = mockStore({ })
    const expectedActions = [
      {
        type: types.SET_SEARCHVALUE,
        payload: location
      }
    ]
    store.dispatch(action)
    expect(store.getActions()).toEqual(expectedActions)
  })
})
