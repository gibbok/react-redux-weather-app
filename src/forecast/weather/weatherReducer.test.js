import weatherReducer from './weatherReducer'
import location from '../../app/location'
import * as types from './weatherActionTypes'
import moment from 'moment'

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

  it('should handle action GET_WEATHER_PENDING', () => {
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

  it('should handle action GET_WEATHER_FULFILLED', () => {
    const dataAPI = {
      'coord': {
        'lon': -74.01,
        'lat': 40.71
      },
      'weather': [{
        'id': 741,
        'main': 'Fog',
        'description': 'fog',
        'icon': '50n'
      }],
      'base': 'stations',
      'main': {
        'temp': 15.26,
        'pressure': 1013,
        'humidity': 87,
        'temp_min': 11,
        'temp_max': 19
      },
      'visibility': 16093,
      'wind': {
        'speed': 1.51,
        'deg': 258.001
      },
      'clouds': {
        'all': 1
      },
      'dt': 1505294100,
      'sys': {
        'type': 1,
        'id': 1969,
        'message': 0.0036,
        'country': 'US',
        'sunrise': 1505298923,
        'sunset': 1505344038
      },
      'id': 5128581,
      'name': 'New York',
      'cod': 200
    }

    const dataState = {
      weather: {
        data: {
          'name': 'New York',
          'country': 'US',
          'icon': 741,
          'temperature': 15.26,
          'temperatureMin': 11,
          'temperatureMax': 19,
          'weatherMain': 'Fog',
          'weatherDescription': 'fog',
          'updatedTime': moment().unix(),
          'windDegree': 258.001,
          'windSpeed': 1.51,
          'visibility': 16093,
          'humidity': 87,
          'sunrise': 1505298923,
          'sunset': 1505344038,
          'cloudiness': 1,
          'pressure': 1013,
          'pressureUnit': 'hPa'
        }
      }
    }

    expect(weatherReducer({}, {
      type: types.GET_WEATHER_FULFILLED,
      payload: dataAPI
    })).toEqual(dataState)
  })
})
