import dotProp from 'dot-prop-immutable'
import * as types from './weatherActionTypes'

const initialState = {
  weather: {
    data: {},
    app: {
      location: 5128581 // nyc usa
    },
    ui: {}
  }
}

const updateAppIsFetching = (state, action, value) => {
  return dotProp.set(state, 'weather.app.isFetching', value)
}

const updateData = (state, action) => {
  const { payload } = action
  const weather = {
    name: payload.name,
    country: payload.sys.country,
    temperature: payload.main.temp,
    temperatureMin: payload.main.temp_min,
    temperatureMax: payload.main.temp_max,
    weatherMain: payload.weather[0].main,
    weatherDescription: payload.weather[0].description,
    weatherIcon: payload.weather[0].icon,
    updatedTime: new Date().toString(),
    windDegree: payload.wind.deg,
    windSpeed: payload.wind.speed,
    visibility: payload.visibility
  }
  return dotProp.set(state, 'weather.data', weather)
}

function weatherReducer (state = initialState, action) {
  switch (action.type) {
    case types.GET_WEATHER_PENDING:
      return updateAppIsFetching(state, action, true)
    case types.GET_WEATHER_FULFILLED:
      updateAppIsFetching(state, action, false)
      return updateData(state, action)
    default:
      return state
  }
}

export default weatherReducer
