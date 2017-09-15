import locationFinderReducer from './locationFinderReducer'
import * as types from './locationFinderActionTypes'

describe('locationFinderReducer', () => {
  it('should return the initial state', () => {
    const dataInitialState = {
      locationFinder: {
        data: [
        ],
        app: {
          isFetching: false
        },
        ui: {
          inputValue: ''
        }
      }
    }
    expect(locationFinderReducer(undefined, {})).toEqual(dataInitialState)
  })

  it('should render action GET_LOCATIONS_PENDING', () => {
    expect(locationFinderReducer({}, {
      type: types.GET_LOCATIONS_PENDING,
      payload: {}
    })).toEqual({
      locationFinder: {
        app: {
          isFetching: true
        }
      }
    })
  })

  it('should handle action GET_LOCATIONS_FULFILLED', () => {
    const dataAPI = {
      'message': 'accurate',
      'cod': '200',
      'count': 1,
      'list': [{
        'id': 3078610,
        'name': 'Brno',
        'coord': {
          'lat': 49.1952,
          'lon': 16.608
        },
        'main': {
          'temp': 287.17,
          'pressure': 1014,
          'humidity': 76,
          'temp_min': 286.15,
          'temp_max': 288.15
        },
        'dt': 1505289600,
        'wind': {
          'speed': 4.1,
          'deg': 200
        },
        'sys': {
          'country': 'CZ'
        },
        'rain': null,
        'snow': null,
        'clouds': {
          'all': 20
        },
        'weather': [{
          'id': 801,
          'main': 'Clouds',
          'description': 'few clouds',
          'icon': '02d'
        }]
      }]
    }

    const dataState = {
      'locationFinder': {
        'app': {
          'isFetching': false
        },
        'data': [
          {
            'country': 'CZ',
            'id': 3078610,
            'name': 'Brno'
          }
        ]
      }
    }

    expect(locationFinderReducer({}, {
      type: types.GET_LOCATIONS_FULFILLED,
      payload: dataAPI
    })).toEqual(dataState)
  })

  it('should handle action SET_SEARCHVALUE', () => {
    expect(locationFinderReducer({}, {
      type: types.SET_SEARCHVALUE,
      payload: 'brno'
    })).toEqual({
      locationFinder: {
        ui: {
          inputValue: 'brno'
        }
      }
    })
  })
})
