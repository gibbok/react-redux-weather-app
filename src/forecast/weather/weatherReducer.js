import {StateType, ActionType} from '../../types' // eslint-disable-line no-unused-vars

import dotProp from 'dot-prop-immutable'
import * as types from './weatherActionTypes'
import location from '../../app/location'
import moment from 'moment'

const initialState:StateType = {
  weather: {
    data: {},
    app: {
      locationId: location().locationId,
      isFetching: false
    },
    ui: {}
  }
}

const updateAppIsFetching = (state:StateType, action:ActionType, value:boolean):StateType => {
  return dotProp.set(state, 'weather.app.isFetching', value)
}

const updateData = (state:StateType, action:ActionType):StateType => {
  const { payload: { name, main, weather, wind, sys, visibility, clouds } } = action
  const weatherData = {
    name: name,
    country: sys.country,
    icon: weather[0].id,
    temperature: main.temp,
    temperatureMin: main.temp_min,
    temperatureMax: main.temp_max,
    weatherMain: weather[0].main,
    weatherDescription: weather[0].description,
    updatedTime: moment().unix(),
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

function weatherReducer (state:StateType = initialState, action:ActionType):StateType {
  switch (action.type) {
    case types.GET_WEATHER_PENDING:
      return updateAppIsFetching(state, action, true)

    case types.GET_WEATHER_FULFILLED:
      return updateData(updateAppIsFetching(state, action, false), action)

    default:
      return state
  }
}

export default weatherReducer
