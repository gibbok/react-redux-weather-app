import dotProp from 'dot-prop-immutable'
import * as types from './forecastActionTypes'

const initialState = {
  forecast: {
    data: {},
    app: {
      location: 5128581 // nyc usa
    },
    ui: {}
  }
}

const updateAppIsFetching = (state, action, value) => {
  return dotProp.set(state, 'forecast.app.isFetching', value)
}

const updateData = (state, action) => {
  const { payload: { name, main, weather, wind, sys, visibility } } = action
  const weatherData = {
    name: name,
    country: sys.country,
    temperature: main.temp,
    temperatureMin: main.temp_min,
    temperatureMax: main.temp_max,
    weatherMain: weather[0].main,
    weatherDescription: weather[0].description,
    weatherIcon: weather[0].icon,
    updatedTime: new Date().toString(),
    windDegree: wind.deg,
    windSpeed: wind.speed,
    visibility: visibility,
    humidity: main.humidity,
    sunrise: sys.sunrise,
    sunset: sys.sunset
  }
  return dotProp.set(state, 'forecast.data', weatherData)
}

function forecastReducer (state = initialState, action) {
  switch (action.type) {
    case types.GET_FORECAST_PENDING:
      return updateAppIsFetching(state, action, true)
    case types.GET_FORECAST_FULFILLED:
      updateAppIsFetching(state, action, false)
      return updateData(state, action)
    default:
      return state
  }
}

export default forecastReducer
