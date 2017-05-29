import dotProp from 'dot-prop-immutable'
import * as types from './weatherActionTypes'

const initialState = {
  weather: {
    data: {},
    app: {
      locationId: 5128581 // nyc usa
    },
    ui: {}
  }
}

const updateAppIsFetching = (state, action, value) => {
  return dotProp.set(state, 'weather.app.isFetching', value)
}

const updateData = (state, action) => {
  const { payload: { name, main, weather, wind, sys, visibility, clouds } } = action
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
    sunset: sys.sunset,
    cloudiness: clouds.all,
    pressure: main.pressure,
    pressureUnit: 'hPa'
  }
  return dotProp.set(state, 'weather.data', weatherData)
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
