import dotProp from 'dot-prop-immutable'
import * as types from './forecastHourlyActionTypes'
import { createMomentId, getHoursFromMoment } from '../app/utility'

const initialState = {
  forecastHourly: {
    data: [],
    app: {
      locationId: 5128581 // nyc usa
    },
    ui: {
      selectedDate: createMomentId(Date.now()),
      activeReportType: 'summry'
    }
  }
}

const updateAppIsFetching = (state, action, value) => {
  return dotProp.set(state, 'forecastHourly.app.isFetching', value)
}

const updateData = (state, action) => {
  const { payload: { list } } = action
  const data = list.map(x => {
    let timeInMs = x.dt * 1000
    return {
      momentId: createMomentId(timeInMs),
      hour: getHoursFromMoment(timeInMs),
      temp: x.main.temp,
      weatherIconCode: x.weather[0].id
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
