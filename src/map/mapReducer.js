import dotProp from 'dot-prop-immutable'
import * as types from './mapActionTypes'
import location from '../app/location'

const initialState = {
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

const updateAppIsFetching = (state, action, value) => {
  return dotProp.set(state, 'weather.app.isFetching', value)
}

const updateType = (state, action) => {
  return dotProp.set(state, 'map.ui.type', action.payload)
}

const updateTypes = (state, action) => {
  let types = state.map.data.types.map(type => {
    type.isActive = type.id === action.payload
    return type
  })
  return dotProp.set(state, 'map.ui.types', types)
}

const updateRegion = (state, action) => {
  return dotProp.set(state, 'map.data.region', action.payload)
}

const updateRegions = (state, action) => {
  let regions = state.map.data.regions.map(region => {
    region.isActive = region.id === action.payload
    return region
  })
  return dotProp.set(state, 'map.data.regions', regions)
}

function mapReducer (state = initialState, action) {
  switch (action.type) {
    case types.GET_MAP:
      return updateAppIsFetching(state, action, true)

    case types.SET_MAP_TYPE:
      updateType(state, action)
      return updateTypes(state, action)

    case types.SET_MAP_REGION:
      updateRegion(state, action)
      return updateRegions(state, action)

    default:
      return state
  }
}

export default mapReducer
