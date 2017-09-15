import mapReducer from './mapReducer'
import * as types from './mapActionTypes'
import location from '../app/location'

describe('mapReducer', () => {
  it('should return the initial state', () => {
    const dataInitialState = {
      map: {
        data: {
          regions: [
            {
              id: 'currentLocation',
              title: 'Current Location',
              isActive: true
            },
            {
              id: 'northAmerica',
              title: 'North America',
              isActive: false
            },
            {
              id: 'southAmerica',
              title: 'South America',
              isActive: false
            },
            {
              id: 'europe',
              title: 'Europe',
              isActive: false
            },
            {
              id: 'asia',
              title: 'Asia',
              isActive: false
            },
            {
              id: 'pacificIslands',
              title: 'Pacific Islands',
              isActive: false
            },
            {
              id: 'africa',
              title: 'Africa',
              isActive: false
            }
          ],
          types: [
            {
              id: 'temperature',
              title: 'Temperature',
              isActive: true
            },
            {
              id: 'precipitation',
              title: 'Precipitation',
              isActive: false
            },
            {
              id: 'pressure',
              title: 'Pressure',
              isActive: false
            },
            {
              id: 'wind',
              title: 'Wind',
              isActive: false
            },
            {
              id: 'cloud',
              title: 'Cloud',
              isActive: false
            }
          ]
        },
        app: {
          locationId: location().locationId, // nyc usa
          geo: location().geo,
          isFetching: false
        },
        ui: {
          type: 'temperature',
          region: 'northAmerica'
        }
      }
    }

    expect(mapReducer(undefined, {})).toEqual(dataInitialState)
  })

  it('should handle action SET_MAP_REGION', () => {
    const dataPrevState = {
      map: {
        data: {
          regions: [
            {
              id: 'currentLocation',
              title: 'Current Location',
              isActive: false
            },
            {
              id: 'northAmerica',
              title: 'North America',
              isActive: true
            },
            {
              id: 'southAmerica',
              title: 'South America',
              isActive: false
            },
            {
              id: 'europe',
              title: 'Europe',
              isActive: false
            },
            {
              id: 'asia',
              title: 'Asia',
              isActive: false
            },
            {
              id: 'pacificIslands',
              title: 'Pacific Islands',
              isActive: false
            },
            {
              id: 'africa',
              title: 'Africa',
              isActive: false
            }
          ],
          types: [
            {
              id: 'temperature',
              title: 'Temperature',
              isActive: true
            },
            {
              id: 'precipitation',
              title: 'Precipitation',
              isActive: false
            },
            {
              id: 'pressure',
              title: 'Pressure',
              isActive: false
            },
            {
              id: 'wind',
              title: 'Wind',
              isActive: false
            },
            {
              id: 'cloud',
              title: 'Cloud',
              isActive: false
            }
          ]
        },
        app: {
          locationId: location().locationId,
          geo: location().geo,
          isFetching: false
        },
        ui: {
          type: 'temperature',
          region: 'northAmerica'
        }
      }
    }

    const dataNextState = {
      map: {
        data: {
          regions: [
            {
              id: 'currentLocation',
              title: 'Current Location',
              isActive: false
            },
            {
              id: 'northAmerica',
              title: 'North America',
              isActive: false
            },
            {
              id: 'southAmerica',
              title: 'South America',
              isActive: false
            },
            {
              id: 'europe',
              title: 'Europe',
              isActive: true
            },
            {
              id: 'asia',
              title: 'Asia',
              isActive: false
            },
            {
              id: 'pacificIslands',
              title: 'Pacific Islands',
              isActive: false
            },
            {
              id: 'africa',
              title: 'Africa',
              isActive: false
            }
          ],
          types: [
            {
              id: 'temperature',
              title: 'Temperature',
              isActive: true
            },
            {
              id: 'precipitation',
              title: 'Precipitation',
              isActive: false
            },
            {
              id: 'pressure',
              title: 'Pressure',
              isActive: false
            },
            {
              id: 'wind',
              title: 'Wind',
              isActive: false
            },
            {
              id: 'cloud',
              title: 'Cloud',
              isActive: false
            }
          ]
        },
        app: {
          locationId: location().locationId,
          geo: location().geo,
          isFetching: false
        },
        ui: {
          type: 'temperature',
          region: 'northAmerica'
        }
      }
    }
    expect(mapReducer(dataPrevState, {
      type: types.SET_MAP_REGION,
      payload: 'europe'
    })).toEqual(dataNextState)
  })

  it('should handle action SET_MAP_TYPE', () => {
    const dataPrevState = {
      map: {
        data: {
          regions: [
            {
              id: 'currentLocation',
              title: 'Current Location',
              isActive: false
            },
            {
              id: 'northAmerica',
              title: 'North America',
              isActive: true
            },
            {
              id: 'southAmerica',
              title: 'South America',
              isActive: false
            },
            {
              id: 'europe',
              title: 'Europe',
              isActive: false
            },
            {
              id: 'asia',
              title: 'Asia',
              isActive: false
            },
            {
              id: 'pacificIslands',
              title: 'Pacific Islands',
              isActive: false
            },
            {
              id: 'africa',
              title: 'Africa',
              isActive: false
            }
          ],
          types: [
            {
              id: 'temperature',
              title: 'Temperature',
              isActive: true
            },
            {
              id: 'precipitation',
              title: 'Precipitation',
              isActive: false
            },
            {
              id: 'pressure',
              title: 'Pressure',
              isActive: false
            },
            {
              id: 'wind',
              title: 'Wind',
              isActive: false
            },
            {
              id: 'cloud',
              title: 'Cloud',
              isActive: false
            }
          ]
        },
        app: {
          locationId: location().locationId,
          geo: location().geo,
          isFetching: false
        },
        ui: {
          type: 'temperature',
          region: 'northAmerica'
        }
      }
    }

    const dataNextState = {
      map: {
        data: {
          regions: [
            {
              id: 'currentLocation',
              title: 'Current Location',
              isActive: false
            },
            {
              id: 'northAmerica',
              title: 'North America',
              isActive: true
            },
            {
              id: 'southAmerica',
              title: 'South America',
              isActive: false
            },
            {
              id: 'europe',
              title: 'Europe',
              isActive: false
            },
            {
              id: 'asia',
              title: 'Asia',
              isActive: false
            },
            {
              id: 'pacificIslands',
              title: 'Pacific Islands',
              isActive: false
            },
            {
              id: 'africa',
              title: 'Africa',
              isActive: false
            }
          ],
          types: [
            {
              id: 'temperature',
              title: 'Temperature',
              isActive: false
            },
            {
              id: 'precipitation',
              title: 'Precipitation',
              isActive: false
            },
            {
              id: 'pressure',
              title: 'Pressure',
              isActive: false
            },
            {
              id: 'wind',
              title: 'Wind',
              isActive: true
            },
            {
              id: 'cloud',
              title: 'Cloud',
              isActive: false
            }
          ]
        },
        app: {
          locationId: location().locationId,
          geo: location().geo,
          isFetching: false
        },
        ui: {
          type: 'temperature',
          region: 'northAmerica'
        }
      }
    }

    expect(mapReducer(dataPrevState, {
      type: types.SET_MAP_TYPE,
      payload: 'wind'
    })).toEqual(dataNextState)
  })

  it('should handle action GET_MAP', () => {
    const dataNextState = {
      map: {
        data: {
          regions: [
            {
              id: 'currentLocation',
              title: 'Current Location',
              isActive: true
            },
            {
              id: 'northAmerica',
              title: 'North America',
              isActive: false
            },
            {
              id: 'southAmerica',
              title: 'South America',
              isActive: false
            },
            {
              id: 'europe',
              title: 'Europe',
              isActive: false
            },
            {
              id: 'asia',
              title: 'Asia',
              isActive: false
            },
            {
              id: 'pacificIslands',
              title: 'Pacific Islands',
              isActive: false
            },
            {
              id: 'africa',
              title: 'Africa',
              isActive: false
            }
          ],
          types: [
            {
              id: 'temperature',
              title: 'Temperature',
              isActive: true
            },
            {
              id: 'precipitation',
              title: 'Precipitation',
              isActive: false
            },
            {
              id: 'pressure',
              title: 'Pressure',
              isActive: false
            },
            {
              id: 'wind',
              title: 'Wind',
              isActive: false
            },
            {
              id: 'cloud',
              title: 'Cloud',
              isActive: false
            }
          ]
        },
        app: {
          locationId: location().locationId,
          geo: location().geo,
          isFetching: true
        },
        ui: {
          type: 'temperature',
          region: 'northAmerica'
        }
      }
    }
    expect(mapReducer(undefined, {
      type: types.GET_MAP,
      payload: true
    })).toEqual(dataNextState)
  })
})
