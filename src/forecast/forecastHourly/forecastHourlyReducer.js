import dotProp from 'dot-prop-immutable'
import * as types from './forecastHourlyActionTypes'
import { createMomentId } from '../../app/utility'
import location from '../../app/location'

const initialState = {
  forecastHourly: {
    data: [],
    app: {
      locationId: location().locationId, // nyc usa
      isFetching: false
    },
    ui: {
      selectedDate: createMomentId(Date.now()),
      activeReportType: 'summary'
    }
  }
}

const updateAppIsFetching = (state, action, value) => {
  return dotProp.set(state, 'forecastHourly.app.isFetching', value)
}

const updateData = (state, action) => {
  const { payload: { list } } = action
  const data = list.map(x => {
    const timeInMs = x.dt * 1000
    return {
      momentId: createMomentId(timeInMs),
      timespan: x.dt,
      temp: x.main.temp,
      weatherIconCode: x.weather[0].id,
      weatherDescription: x.weather[0].main,
      windDegree: x.wind.deg,
      windSpeed: x.wind.speed,
      humidityUnit: '%',
      humidityValue: x.main.humidity,
      rain: 'rain' in x ? x.rain['3h'] : undefined
    }
  })
  return dotProp.set(state, 'forecastHourly.data', data)
}

const updateDataActiveReportType = (state, action) => {
  return dotProp.set(state, 'forecastHourly.ui.activeReportType', action.payload)
}

function forecastHourlyReducer (state = initialState, action) {
  switch (action.type) {
    case types.GET_FORECAST_HOURLY_PENDING:
      return updateAppIsFetching(state, action, true)

    case types.GET_FORECAST_HOURLY_FULFILLED:
      updateAppIsFetching(state, action, false)
      return updateData(state, action)

    case types.SET_FORECAST_HOURLY_ACTIVE_REPORT_TYPE:
      return updateDataActiveReportType(state, action)

    default:
      return state
  }
}

export default forecastHourlyReducer
