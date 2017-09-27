// @flow
import forecastDailyReducer from './forecastDailyReducer'
import * as types from './forecastDailyActionTypes'
import { createMomentId } from '../../app/utility'
import location from '../../app/location'

describe('forecastDailyReducer', () => {
  it('should return the initial state', () => {
    const dataInitialState = {
      forecastDaily: {
        data: [],
        app: {
          locationId: location().locationId,
          isFetching: false
        },
        ui: {
          selectedDate: createMomentId(Date.now())
        }
      }
    }
    expect(forecastDailyReducer(undefined, {})).toEqual(dataInitialState)
  })

  it('should handle action GET_FORECAST_DAILY_PENDING', () => {
    expect(forecastDailyReducer({}, {
      type: types.GET_FORECAST_DAILY_PENDING,
      payload: {}
    })).toEqual({
      forecastDaily: {
        app: {isFetching: true}
      }
    })
  })

  it('should handle action GET_FORECAST_DAILY_FULFILLED', () => {
    const dataAPI = {
      'city': {
        'id': 5128581,
        'name': 'New York',
        'coord': {
          'lon': -74.006,
          'lat': 40.7143
        },
        'country': 'US',
        'population': 0
      },
      'cod': '200',
      'message': 0.0223723,
      'cnt': 7,
      'list': [{
        'dt': 1505232000,
        'temp': {
          'day': 16.8,
          'min': 16.8,
          'max': 16.8,
          'night': 16.8,
          'eve': 16.8,
          'morn': 16.8
        },
        'pressure': 1023.79,
        'humidity': 77,
        'weather': [{
          'id': 803,
          'main': 'Clouds',
          'description': 'broken clouds',
          'icon': '04n'
        }],
        'speed': 3.41,
        'deg': 258,
        'clouds': 64
      },
      {
        'dt': 1505318400,
        'temp': {
          'day': 23.78,
          'min': 14.6,
          'max': 25.49,
          'night': 21.22,
          'eve': 25.49,
          'morn': 14.6
        },
        'pressure': 1023.89,
        'humidity': 67,
        'weather': [{
          'id': 800,
          'main': 'Clear',
          'description': 'sky is clear',
          'icon': '01d'
        }],
        'speed': 1.21,
        'deg': 242,
        'clouds': 0
      },
      {
        'dt': 1505404800,
        'temp': {
          'day': 22.76,
          'min': 19.78,
          'max': 24.57,
          'night': 20.45,
          'eve': 23.42,
          'morn': 19.78
        },
        'pressure': 1023.71,
        'humidity': 86,
        'weather': [{
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10d'
        }],
        'speed': 1.16,
        'deg': 257,
        'clouds': 88,
        'rain': 1.72
      },
      {
        'dt': 1505491200,
        'temp': {
          'day': 22.68,
          'min': 19.91,
          'max': 22.68,
          'night': 19.91,
          'eve': 21.18,
          'morn': 20.24
        },
        'pressure': 1017.21,
        'humidity': 0,
        'weather': [{
          'id': 502,
          'main': 'Rain',
          'description': 'heavy intensity rain',
          'icon': '10d'
        }],
        'speed': 3.04,
        'deg': 115,
        'clouds': 22,
        'rain': 15.65
      },
      {
        'dt': 1505577600,
        'temp': {
          'day': 22.46,
          'min': 19.35,
          'max': 22.46,
          'night': 19.86,
          'eve': 21.18,
          'morn': 19.35
        },
        'pressure': 1017.79,
        'humidity': 0,
        'weather': [{
          'id': 501,
          'main': 'Rain',
          'description': 'moderate rain',
          'icon': '10d'
        }],
        'speed': 2.22,
        'deg': 71,
        'clouds': 57,
        'rain': 3.12
      },
      {
        'dt': 1505664000,
        'temp': {
          'day': 23.74,
          'min': 17.65,
          'max': 23.74,
          'night': 17.65,
          'eve': 21.24,
          'morn': 19.74
        },
        'pressure': 1013.69,
        'humidity': 0,
        'weather': [{
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10d'
        }],
        'speed': 5.71,
        'deg': 36,
        'clouds': 22
      },
      {
        'dt': 1505750400,
        'temp': {
          'day': 19.37,
          'min': 14.13,
          'max': 19.37,
          'night': 14.13,
          'eve': 17.47,
          'morn': 14.79
        },
        'pressure': 1015.62,
        'humidity': 0,
        'weather': [{
          'id': 800,
          'main': 'Clear',
          'description': 'sky is clear',
          'icon': '01d'
        }],
        'speed': 4.66,
        'deg': 12,
        'clouds': 0
      }
      ]
    }

    const dataState = {
      'forecastDaily': {
        'app': {
          'isFetching': false
        },
        'data': [{
          'momentId': '2017:8:12:2',
          'dt': 1505232000,
          'date': 1505232000,
          'tempMin': 16.8,
          'tempMax': 16.8,
          'iconCode': 803,
          'weatherDescription': 'broken clouds'
        },
        {
          'momentId': '2017:8:13:3',
          'dt': 1505318400,
          'date': 1505318400,
          'tempMin': 14.6,
          'tempMax': 25.49,
          'iconCode': 800,
          'weatherDescription': 'sky is clear'
        },
        {
          'momentId': '2017:8:14:4',
          'dt': 1505404800,
          'date': 1505404800,
          'tempMin': 19.78,
          'tempMax': 24.57,
          'iconCode': 500,
          'weatherDescription': 'light rain'
        },
        {
          'momentId': '2017:8:15:5',
          'dt': 1505491200,
          'date': 1505491200,
          'tempMin': 19.91,
          'tempMax': 22.68,
          'iconCode': 502,
          'weatherDescription': 'heavy intensity rain'
        },
        {
          'momentId': '2017:8:16:6',
          'dt': 1505577600,
          'date': 1505577600,
          'tempMin': 19.35,
          'tempMax': 22.46,
          'iconCode': 501,
          'weatherDescription': 'moderate rain'
        },
        {
          'momentId': '2017:8:17:0',
          'dt': 1505664000,
          'date': 1505664000,
          'tempMin': 17.65,
          'tempMax': 23.74,
          'iconCode': 500,
          'weatherDescription': 'light rain'
        },
        {
          'momentId': '2017:8:18:1',
          'dt': 1505750400,
          'date': 1505750400,
          'tempMin': 14.13,
          'tempMax': 19.37,
          'iconCode': 800,
          'weatherDescription': 'sky is clear'
        }
        ]
      }
    }

    expect(
      forecastDailyReducer({}, {
        type: types.GET_FORECAST_DAILY_FULFILLED,
        payload: dataAPI
      })
    ).toEqual(dataState)
  })
})
