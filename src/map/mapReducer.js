import dotProp from 'dot-prop-immutable'
import * as types from './mapActionTypes'

const initialState = {
  map: {
    data: {
      regions: [
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
          title: 'Temperature'
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
      locationId: 5128581, // nyc usa
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
const updateMapType = (state, action) => {
  return dotProp.set(state, 'map.ui.type', action.payload)
}

const updateData = (state, action) => {
  // const { payload: { title, main, weather, wind, sys, visibility, clouds } } = action
  // const weatherData = {
  //   title: title,
  //   country: sys.country,
  //   temperature: main.temp,
  //   temperatureMin: main.temp_min,
  //   temperatureMax: main.temp_max,
  //   weatherMain: weather[0].main,
  //   weatherDescription: weather[0].description,
  //   weatherIcon: weather[0].icon,
  //   updatedTime: new Date().toString(),
  //   windDegree: wind.deg,
  //   windSpeed: wind.speed,
  //   visibility: visibility,
  //   humidity: main.humidity,
  //   sunrise: sys.sunrise,
  //   sunset: sys.sunset,
  //   cloudiness: clouds.all,
  //   pressure: main.pressure,
  //   pressureUnit: 'hPa'
  // }
  // return dotProp.set(state, 'map.data', weatherData)
}

function mapReducer (state = initialState, action) {
  switch (action.type) {
    case types.GET_MAP:
      return updateAppIsFetching(state, action, true)
    case types.SET_MAP_TYPE:
      return updateMapType(state, action)
    default:
      return state
  }
}

export default mapReducer
