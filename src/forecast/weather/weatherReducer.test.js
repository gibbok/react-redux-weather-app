import weatherReducer from './weatherReducer'
import location from '../../app/location'
import * as types from './weatherActionTypes'

describe('weatherReducer', () => {
  it('should return the initial state', () => {
    const dataInitialState = {
      weather: {
        data: {},
        app: {
          locationId: location().locationId,
          isFetching: false
        },
        ui: {}
      }
    }
    expect(weatherReducer(undefined, {})).toEqual(dataInitialState)
  })

  it('should render action GET_WEATHER_PENDING', () => {
    expect(weatherReducer({}, {
      type: types.GET_WEATHER_PENDING,
      payload: {}
    })).toEqual({
      weather: {
        app: {
          isFetching: true
        }
      }
    })
  })
})
