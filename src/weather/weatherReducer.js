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
  // take data from api
  let weather = {}
  weather.name = action.payload.name
  weather.country = action.payload.sys.country

  weather.temperature = action.payload.main.temp
  weather.temperatureMin = action.payload.main.temp_min
  weather.temperatureMax = action.payload.main.temp_max

  weather.weatherMain = action.payload.weather[0].main
  weather.weatherDescription = action.payload.weather[0].description
  weather.weatherIcon = action.payload.weather[0].icon

  weather.updatedTime = new Date().toString()

  weather.windDegree = action.payload.wind.deg
  weather.windSpeed = action.payload.wind.speed

  weather.visibility = action.payload.visibility

/*
weather: [
{
id: 802,
main: "Clouds",
description: "scattered clouds",
icon: "03n"
}
],

*/

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
